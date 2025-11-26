# HausPet Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Frontend) + Railway (Backend) - Recommended

#### Frontend (Vercel - Free)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Add environment variable:
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```
7. Deploy!

#### Backend (Railway - Free $5/month credit)
1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select the `backend` folder
4. Add environment variables:
   ```
   PORT=3001
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://...
   SENDGRID_API_KEY=SG.xxx
   SENDGRID_FROM_EMAIL=hello@hauspet.app
   ADMIN_EMAIL=your@email.com
   FRONTEND_URL=https://hauspet.vercel.app
   ```
5. Deploy!

---

### Option 2: Render (Full Stack - Free)

#### Backend
1. Go to [render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repo
4. Root Directory: `backend`
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Add environment variables (same as above)

#### Frontend
1. New → Static Site
2. Build Command: `npm run build`
3. Publish Directory: `dist`

---

## Database Setup (MongoDB Atlas)

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create free account → Create Cluster (M0 Free)
3. Database Access → Add Database User
   - Username: `hauspet_admin`
   - Password: (generate secure password)
4. Network Access → Add IP Address → `0.0.0.0/0` (Allow from anywhere)
5. Connect → Drivers → Copy connection string
6. Replace `<password>` with your password

Example:
```
mongodb+srv://hauspet_admin:YOUR_PASSWORD@cluster0.abc123.mongodb.net/hauspet?retryWrites=true&w=majority
```

---

## Email Setup (SendGrid)

1. Go to [sendgrid.com](https://sendgrid.com) → Create free account
2. Settings → API Keys → Create API Key (Full Access)
3. Copy the key (starts with `SG.`)
4. Settings → Sender Authentication:
   - Option A: Single Sender Verification (quick)
   - Option B: Domain Authentication (professional)

### Domain Authentication (Recommended)
1. Settings → Sender Authentication → Authenticate Your Domain
2. Add DNS records to your domain:
   - CNAME records for email authentication
   - This allows sending from `@hauspet.app`

---

## Domain Setup

### Option A: Custom Domain (Recommended)
1. Buy domain from Namecheap/Cloudflare (~$10-15/year)
2. In Vercel: Settings → Domains → Add `hauspet.app`
3. Add DNS records as instructed

### Option B: Free Subdomain
- Vercel: `hauspet.vercel.app` (automatic)
- Netlify: `hauspet.netlify.app`

---

## Environment Variables Summary

### Frontend (.env.production)
```env
VITE_API_URL=https://api.hauspet.app
VITE_GEMINI_API_KEY=your_gemini_key
```

### Backend (.env)
```env
PORT=3001
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
SENDGRID_API_KEY=SG.xxx
SENDGRID_FROM_EMAIL=hello@hauspet.app
ADMIN_EMAIL=your@email.com
FRONTEND_URL=https://hauspet.app
```

---

## Post-Deployment Checklist

- [ ] Test early access signup form
- [ ] Verify emails are being sent
- [ ] Check MongoDB is storing subscribers
- [ ] Test AI chat functionality
- [ ] Verify all images load correctly
- [ ] Test on mobile devices
- [ ] Set up Google Analytics (optional)
- [ ] Submit to Google Search Console

---

## Quick Commands

```bash
# Build frontend
npm run build

# Test backend locally
cd backend && npm run dev

# Check production build
npm run preview
```
