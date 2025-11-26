# HausPet Backend API

Complete backend for HausPet landing page with email functionality.

## Features

- ✅ Early access signup with email notifications
- ✅ Pet owner and veterinarian user types
- ✅ SendGrid email integration
- ✅ MongoDB database (with in-memory fallback)
- ✅ CORS enabled for frontend
- ✅ Professional email templates

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and update:

```env
# MongoDB Atlas (free tier)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hauspet

# SendGrid (free tier: 100 emails/day)
# Get your API key from https://sendgrid.com
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=hello@hauspet.app
ADMIN_EMAIL=admin@hauspet.app

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### 3. Get SendGrid API Key

1. Go to https://sendgrid.com
2. Sign up for free account (100 emails/day)
3. Navigate to Settings → API Keys
4. Create new API Key
5. Copy and paste in `.env` file

### 4. Setup MongoDB (Optional)

1. Go to https://mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

**Note:** If MongoDB is not configured, the backend will use in-memory storage for demo purposes.

## Run

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

Server will run on http://localhost:3001

## API Endpoints

### Health Check
```
GET /api/health
```

### Early Access Signup
```
POST /api/early-access
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "John Doe",
  "petName": "Buddy",
  "userType": "pet-owner" // or "veterinarian"
}
```

### Get All Subscribers (Admin)
```
GET /api/subscribers
```

## Email Templates

- **Pet Owner Welcome Email** - Teal gradient, early access details
- **Veterinarian Welcome Email** - Blue gradient, vet network benefits
- **Admin Notification** - New signup alerts

## Deployment

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

3. Add environment variables in Vercel dashboard

### Environment Variables in Vercel
- `MONGODB_URI`
- `SENDGRID_API_KEY`
- `SENDGRID_FROM_EMAIL`
- `ADMIN_EMAIL`
- `JWT_SECRET`
- `FRONTEND_URL`

## Testing

Test the API:
```bash
curl http://localhost:3001/api/health
```

Test email signup:
```bash
curl -X POST http://localhost:3001/api/early-access \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User","userType":"pet-owner"}'
```

## Status

✅ Backend ready for production
✅ Email templates designed
✅ MongoDB integration
✅ SendGrid integration
✅ CORS configured
✅ Error handling
✅ In-memory fallback for demo
