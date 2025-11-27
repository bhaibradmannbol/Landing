// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { Resend } = require('resend');

dotenv.config();

const app = express();

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// ============ MIDDLEWARE ============
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://helpmehauspet.net',
  'https://www.helpmehauspet.net',
  'https://landing-git-main-bhaibradmannbols-projects.vercel.app',
  'https://landing-bhaibradmannbols-projects.vercel.app',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc)
    if (!origin) return callback(null, true);
    // Allow all Vercel preview URLs
    if (origin.includes('vercel.app') || origin.includes('helpmehauspet.net')) {
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // In development, allow all
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());

// ============ DATABASE CONNECTION ============
const mongoUri = process.env.MONGODB_URI;
if (mongoUri && mongoUri.startsWith('mongodb')) {
  console.log('🔄 Connecting to MongoDB...');
  mongoose.connect(mongoUri)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB error:', err.message));
}

// ============ DATABASE SCHEMA ============
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  name: String,
  petName: String,
  userType: { type: String, enum: ['pet-owner', 'veterinarian'], default: 'pet-owner' },
  subscribed: { type: Date, default: Date.now },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// ============ EMAIL TEMPLATE ============
const getWelcomeEmail = (name) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, sans-serif; line-height: 1.6; margin: 0; padding: 0; background: #f5f5f5; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #1a1a1a 0%, #333 100%); color: white; padding: 40px 30px; text-align: center; }
    .content { padding: 30px; }
    .feature { margin: 12px 0; padding: 12px; background: #f9f9f9; border-radius: 8px; }
    .cta { display: inline-block; background: #000; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="header">
        <h1>🐾 Welcome to HausPet!</h1>
        <p>You're on the early access list</p>
      </div>
      <div class="content">
        <p>Hi ${name || 'there'}!</p>
        <p>Thanks for joining HausPet early access. You'll be among the first to experience real-time pet health monitoring.</p>
        
        <div class="feature">✓ <strong>24/7 Health Monitoring</strong> - Heart rate, temperature, activity</div>
        <div class="feature">✓ <strong>AI Health Insights</strong> - Powered by Dr. HausPet</div>
        <div class="feature">✓ <strong>Early Adopter Benefits</strong> - Special pricing & lifetime perks</div>
        
        <p style="text-align: center;">
          <a href="https://hauspet.app" class="cta">Learn More →</a>
        </p>
        
        <p>We'll notify you when we're ready to ship!</p>
        <p><strong>— The HausPet Team 🐾</strong></p>
      </div>
    </div>
    <div class="footer">© 2024 HausPet. All rights reserved.</div>
  </div>
</body>
</html>
`;

// ============ ROUTES ============

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: '✅ HausPet Backend running', 
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    email: resend ? 'Resend configured' : 'not configured'
  });
});

// GET subscribers
app.get('/api/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({});
    res.json({ total: subscribers.length, subscribers });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
});

// POST - Early Access Signup
app.post('/api/early-access', async (req, res) => {
  const { email, name, userType = 'pet-owner' } = req.body;
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Valid email required' });
  }
  
  try {
    // Check if already exists
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ success: false, error: 'Email already subscribed' });
    }
    
    // Save to database
    const subscriber = await Subscriber.create({ email, name, userType });
    
    // Send welcome email to user via Resend
    if (resend) {
      try {
        // Send welcome email to user
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'HausPet <onboarding@resend.dev>',
          to: email,
          subject: '🐾 Welcome to HausPet Early Access!',
          html: getWelcomeEmail(name),
        });
        console.log('📧 Welcome email sent to:', email);
        
        // Send notification to admin
        const adminEmail = process.env.ADMIN_EMAIL || 'bhaveshchaudhary@icloud.com';
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'HausPet <onboarding@resend.dev>',
          to: adminEmail,
          subject: '🎉 New Early Access Signup!',
          html: `
            <div style="font-family: -apple-system, sans-serif; padding: 20px;">
              <h2>New Early Access Signup!</h2>
              <p><strong>Name:</strong> ${name || 'Not provided'}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Type:</strong> ${userType}</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
              <hr>
              <p style="color: #666;">Total subscribers can be viewed at /api/subscribers</p>
            </div>
          `,
        });
        console.log('📧 Admin notification sent');
      } catch (emailError) {
        console.error('Email error:', emailError.message);
      }
    }
    
    return res.json({ success: true, message: "You're on the list!" });
    
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ success: false, error: 'Failed to process request' });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`\n🚀 HausPet Backend on port ${PORT}`);
  console.log(`📧 Email: ${resend ? 'Resend ✅' : 'Not configured ⚠️'}`);
  console.log(`📊 Database: ${mongoose.connection.readyState === 1 ? 'MongoDB ✅' : 'Connecting...'}\n`);
});
