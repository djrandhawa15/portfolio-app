# Lab 5 - Deployment Guide

This guide will help you deploy your portfolio to Vercel with Auth0 integration and hero CRUD functionality.

## 🎯 What's Been Implemented

### 1. Hero CRUD System
- **Database**: Hero table in Neon with avatar (data URL), full name, short description, and long description
- **API Routes**:
  - `GET /api/hero` - Public endpoint to fetch hero data
  - `PUT /api/hero` - Protected endpoint to update hero (requires Auth0 login)
- **Components**:
  - `MyHeroSection` - Server component that displays hero on homepage
  - `HeroEditorForm` - Client component for editing hero in dashboard
- **Dashboard**: Protected page at `/dashboard` for editing hero content
- **Image Handling**: Avatars converted to data URLs (no external storage needed)

### 2. File Structure
```
portfolio-app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── hero/
│   │   │       └── route.js          # GET/PUT hero API
│   │   ├── dashboard/
│   │   │   └── page.jsx              # Protected dashboard
│   │   └── page.js                   # Homepage with hero
│   ├── components/
│   │   ├── hero-editor-form.jsx      # Hero editing form
│   │   └── my-hero-section.jsx       # Hero display component
│   └── lib/
│       ├── db.js                     # Hero DB helpers
│       └── auth0.js                  # Auth0 client
└── .env.local                        # Environment variables
```

## 📋 Pre-Deployment Checklist

### Local Testing
- [ ] Visit `http://localhost:3000` - Hero section displays with default/DB content
- [ ] Click login and authenticate with Auth0
- [ ] Visit `/dashboard` - Hero editor form loads with current data
- [ ] Upload an avatar image (< 1MB)
- [ ] Update full name, short description, and long description
- [ ] Click "Save Changes" - Success toast appears
- [ ] Return to homepage - Changes are reflected
- [ ] Test logout and verify dashboard redirects to login

## 🚀 Vercel Deployment Steps

### Step 1: Prepare Your Repository
1. Ensure all changes are committed:
   ```bash
   git add .
   git commit -m "Add Lab 5: Hero CRUD with Auth0"
   git push origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `portfolio-app` (if your Next.js app is in a subdirectory)
   - **Build Command**: `npm run build` (default)
   - **Install Command**: `npm install` (default)

### Step 3: Set Environment Variables in Vercel

Navigate to your project → Settings → Environment Variables and add:

```env
# Auth0 Configuration
AUTH0_SECRET=b3038d2283c54095f2d0e4ea87f5b9eab182532964ea10e8fbf0246951d799fd
AUTH0_BASE_URL=https://your-app.vercel.app
AUTH0_ISSUER_BASE_URL=https://dev-u3ix6pwyrh4bi1ez.us.auth0.com
AUTH0_CLIENT_ID=ryL4wAQMZ96tuKd4oabpe9hF3yqCkpPQ
AUTH0_CLIENT_SECRET=txJgZg4hiJOJIc6vvgPhl-YGOaCYZs9dailJPdbqw1g-Tnc1CfIjaQhkMOjF0s7g

# Neon Database
NEON_DB_URL=postgresql://neondb_owner:npg_jgchP3vnqI7S@ep-dawn-wind-adiuhdby-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

# Resend Email
RESEND_API_KEY=re_RKhup7xB_Q2FeFxGks9fp6c1VxGoAJDUH
RESEND_FROM=djrandhawa15@resend.dev
RESEND_TO=djrandhawa15@gmail.com

# Base URL
NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app
```

**IMPORTANT**: Replace `https://your-app.vercel.app` with your actual Vercel deployment URL!

### Step 4: Update Auth0 Application Settings

1. Go to your [Auth0 Dashboard](https://manage.auth0.com)
2. Navigate to Applications → Your Application
3. Update the following settings to include BOTH localhost and production URLs:

**Allowed Callback URLs**:
```
https://your-app.vercel.app/api/auth/callback,
http://localhost:3000/api/auth/callback
```

**Allowed Logout URLs**:
```
https://your-app.vercel.app,
http://localhost:3000
```

**Allowed Web Origins**:
```
https://your-app.vercel.app,
http://localhost:3000
```

**Allowed Login URLs** (if available):
```
https://your-app.vercel.app/api/auth/login,
http://localhost:3000/api/auth/login
```

4. Click "Save Changes"

### Step 5: Redeploy
After setting environment variables and updating Auth0:
1. Go to Vercel → Deployments
2. Click the three dots on the latest deployment → "Redeploy"
3. Check "Use existing Build Cache" (optional)
4. Click "Redeploy"

## ✅ Post-Deployment Testing

Visit your deployed Vercel URL and test:

1. **Homepage Hero**:
   - [ ] Hero section displays (with default content initially)

2. **Authentication Flow**:
   - [ ] Click a login button/link
   - [ ] Redirects to Auth0 login page
   - [ ] After login, redirects back to your app
   - [ ] User is authenticated

3. **Dashboard Access**:
   - [ ] Navigate to `/dashboard`
   - [ ] Hero editor form loads with current data
   - [ ] Upload an avatar (test with a small image < 1MB)
   - [ ] Fill in/update all fields
   - [ ] Click "Save Changes"
   - [ ] Success message appears

4. **Homepage Update**:
   - [ ] Navigate back to homepage
   - [ ] Hero section reflects your changes (avatar, name, descriptions)
   - [ ] Refresh page - changes persist

5. **Logout**:
   - [ ] Click logout
   - [ ] Visit `/dashboard` - redirects to login
   - [ ] Homepage hero still displays (GET is public)

## 🐛 Troubleshooting

### Issue: "401 Unauthorized" when saving hero
**Solution**:
- Verify you're logged in
- Check that `AUTH0_BASE_URL` in Vercel matches your deployment URL
- Ensure Auth0 callback URLs include your Vercel domain

### Issue: Auth0 redirect loop or "invalid callback"
**Solution**:
- Double-check Auth0 Application Settings include your Vercel URL
- Verify `AUTH0_ISSUER_BASE_URL` starts with `https://` and matches your Auth0 tenant
- Clear browser cookies and try again

### Issue: Homepage shows default hero content after saving
**Solution**:
- Check that `export const revalidate = 0;` is at the top of `src/app/page.js`
- Verify database connection by checking Vercel logs
- Test the API directly: `https://your-app.vercel.app/api/hero`

### Issue: Avatar upload fails
**Solution**:
- Ensure image is < 1MB
- Check that `image2uri` package is installed
- Verify file type is an image (jpg, png, gif, webp)

### Issue: Database errors
**Solution**:
- Verify `NEON_DB_URL` is correct in Vercel
- Check Neon dashboard - ensure database is active
- Run seed script locally first to ensure table structure is correct

## 📸 Screenshots for Submission

Take screenshots of:

1. **Dashboard while logged in** - showing hero editor form
2. **Hero editor before changes** - original content loaded
3. **Hero editor after filling** - avatar uploaded, fields filled
4. **Success message** - after clicking "Save Changes"
5. **Homepage with updated hero** - showing your changes reflected
6. **Vercel deployment** - successful deployment page
7. **Auth0 login flow** - login page on production
8. **Logged in state** - showing user is authenticated

## 🎉 Success Criteria

You've successfully completed Lab 5 when:

- ✅ `/api/hero` GET returns hero data (public)
- ✅ `/api/hero` PUT requires authentication and updates data
- ✅ `/dashboard` is protected and shows hero editor
- ✅ Hero editor loads existing data from database
- ✅ Avatar upload converts to data URL and saves
- ✅ Homepage hero displays database content
- ✅ Changes persist across page reloads
- ✅ Auth0 login/logout works on Vercel
- ✅ All environment variables configured in Vercel
- ✅ Auth0 callbacks include production URL

## 📚 Additional Resources

- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Auth0 Next.js SDK](https://auth0.com/docs/quickstart/webapp/nextjs)
- [Neon Postgres](https://neon.tech/docs/introduction)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**Note**: Keep your Auth0 credentials and database URLs secure. Never commit `.env.local` to git!
