// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { Resend } = require('resend');

// Load .env file only in development (Railway sets env vars directly)
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

// Debug: Log environment variables (without sensitive values)
console.log('🔧 Environment check:');
console.log('  - NODE_ENV:', process.env.NODE_ENV || 'not set');
console.log('  - MONGODB_URI:', process.env.MONGODB_URI ? '✅ Set' : '❌ Missing');
console.log('  - RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✅ Set' : '❌ Missing');
console.log('  - ADMIN_EMAIL:', process.env.ADMIN_EMAIL || 'not set');

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
let dbConnected = false;

if (mongoUri && mongoUri.startsWith('mongodb')) {
  console.log('🔄 Connecting to MongoDB...');
  mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  })
    .then(() => {
      console.log('✅ MongoDB connected');
      dbConnected = true;
    })
    .catch(err => {
      console.error('❌ MongoDB error:', err.message);
      console.log('⚠️ Running without database - emails will still work!');
    });
} else {
  console.log('⚠️ No MongoDB URI provided, running without database');
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

// ============ EMAIL TEMPLATES ============
const getWelcomeEmail = (name) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to HausPet</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #000000;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px;">
          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <span style="font-size: 40px;">🐾</span>
              <h1 style="color: #ffffff; margin: 10px 0 0 0; font-size: 28px; font-weight: 700;">HausPet</h1>
            </td>
          </tr>
          
          <!-- Main Card -->
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);">
                <tr>
                  <td style="padding: 50px 40px;">
                    <!-- Welcome Badge -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" style="padding-bottom: 30px;">
                          <span style="display: inline-block; background: rgba(74, 222, 128, 0.2); color: #4ade80; padding: 8px 20px; border-radius: 50px; font-size: 14px; font-weight: 600;">
                            ✓ You're on the Early Access List
                          </span>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Greeting -->
                    <h2 style="color: #ffffff; font-size: 32px; font-weight: 700; margin: 0 0 20px 0; text-align: center;">
                      Welcome${name ? ', ' + name : ''}! 🎉
                    </h2>
                    
                    <p style="color: rgba(255,255,255,0.8); font-size: 16px; line-height: 1.7; margin: 0 0 30px 0; text-align: center;">
                      Thank you for joining HausPet's early access program. You're now part of an exclusive group who will be the first to experience the future of pet health monitoring.
                    </p>
                    
                    <!-- What's Coming -->
                    <h3 style="color: #ffffff; font-size: 18px; font-weight: 600; margin: 30px 0 20px 0;">
                      What you'll get as an early adopter:
                    </h3>
                    
                    <!-- Features -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px; margin-bottom: 10px;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width: 40px; vertical-align: top;">
                                <span style="font-size: 24px;">💓</span>
                              </td>
                              <td>
                                <strong style="color: #ffffff; font-size: 15px;">24/7 Health Monitoring</strong>
                                <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 5px 0 0 0;">Real-time heart rate, temperature & activity tracking</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr><td style="height: 10px;"></td></tr>
                      <tr>
                        <td style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width: 40px; vertical-align: top;">
                                <span style="font-size: 24px;">🤖</span>
                              </td>
                              <td>
                                <strong style="color: #ffffff; font-size: 15px;">Dr. HausPet AI Assistant</strong>
                                <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 5px 0 0 0;">Get instant health insights powered by advanced AI</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr><td style="height: 10px;"></td></tr>
                      <tr>
                        <td style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width: 40px; vertical-align: top;">
                                <span style="font-size: 24px;">🏥</span>
                              </td>
                              <td>
                                <strong style="color: #ffffff; font-size: 15px;">Vet Integration</strong>
                                <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 5px 0 0 0;">Share health data directly with your veterinarian</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr><td style="height: 10px;"></td></tr>
                      <tr>
                        <td style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width: 40px; vertical-align: top;">
                                <span style="font-size: 24px;">🎁</span>
                              </td>
                              <td>
                                <strong style="color: #ffffff; font-size: 15px;">Early Adopter Benefits</strong>
                                <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 5px 0 0 0;">Exclusive pricing & lifetime perks for founding members</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- CTA Button -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" style="padding: 20px 0;">
                          <a href="https://helpmehauspet.net" style="display: inline-block; background: #ffffff; color: #000000; padding: 16px 40px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 16px;">
                            Visit HausPet →
                          </a>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- What's Next -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px;">
                      <tr>
                        <td>
                          <h3 style="color: #ffffff; font-size: 16px; font-weight: 600; margin: 0 0 15px 0;">What happens next?</h3>
                          <p style="color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.6; margin: 0;">
                            We're currently in clinical testing with veterinary partners across Europe. As an early access member, you'll be among the first to know when we're ready to ship. We'll send you updates on our progress and exclusive invites to beta testing.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 0; text-align: center;">
              <p style="color: rgba(255,255,255,0.4); font-size: 13px; margin: 0 0 10px 0;">
                Questions? Reply to this email or reach us at hello@helpmehauspet.net
              </p>
              <p style="color: rgba(255,255,255,0.3); font-size: 12px; margin: 0;">
                © 2024 HausPet. All rights reserved.<br>
                Keeping pets healthy, one heartbeat at a time.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// Admin notification email template
const getAdminNotificationEmail = (name, email, userType, totalSubscribers) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <tr>
      <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 25px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">🎉 New Early Access Signup!</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
              <strong style="color: #666; font-size: 13px;">NAME</strong><br>
              <span style="color: #000; font-size: 16px;">${name || 'Not provided'}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
              <strong style="color: #666; font-size: 13px;">EMAIL</strong><br>
              <a href="mailto:${email}" style="color: #10b981; font-size: 16px; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
              <strong style="color: #666; font-size: 13px;">TYPE</strong><br>
              <span style="color: #000; font-size: 16px;">${userType === 'veterinarian' ? '🩺 Veterinarian' : '🐕 Pet Owner'}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
              <strong style="color: #666; font-size: 13px;">SIGNED UP</strong><br>
              <span style="color: #000; font-size: 16px;">${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0;">
              <strong style="color: #666; font-size: 13px;">TOTAL SUBSCRIBERS</strong><br>
              <span style="color: #10b981; font-size: 24px; font-weight: 700;">${totalSubscribers}</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
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
    let totalSubscribers = 1;
    
    // Try to save to database if connected
    if (dbConnected && mongoose.connection.readyState === 1) {
      try {
        const existing = await Subscriber.findOne({ email });
        if (existing) {
          return res.status(409).json({ success: false, error: 'Email already subscribed' });
        }
        await Subscriber.create({ email, name, userType });
        totalSubscribers = await Subscriber.countDocuments();
        console.log('✅ Saved to database');
      } catch (dbError) {
        console.log('⚠️ Database save failed, continuing with email only');
      }
    }
    
    // Send emails via Resend (works even without database)
    if (resend) {
      try {
        // Send welcome email to user
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'HausPet <onboarding@resend.dev>',
          to: email,
          subject: '🎉 Welcome to HausPet Early Access!',
          html: getWelcomeEmail(name),
        });
        console.log('📧 Welcome email sent to:', email);
        
        // Send notification to admin
        const adminEmail = process.env.ADMIN_EMAIL || 'helpmehauspet@gmail.com';
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'HausPet <onboarding@resend.dev>',
          to: adminEmail,
          subject: `🎉 New Signup: ${email}`,
          html: getAdminNotificationEmail(name, email, userType, totalSubscribers),
        });
        console.log('📧 Admin notification sent to:', adminEmail);
      } catch (emailError) {
        console.error('Email error:', emailError.message);
        return res.status(500).json({ success: false, error: 'Failed to send email' });
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
