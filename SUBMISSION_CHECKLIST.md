# Lab 5 Submission Checklist

## 📋 Required for Submission

### 1. GitHub Repository Link
- [ ] Ensure all code is committed and pushed to GitHub
- [ ] Repository URL: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`

### 2. Required Screenshots

#### A. Dashboard (Logged In)
**What to capture:**
- [ ] Navigate to `/dashboard` while logged in
- [ ] Screenshot showing:
  - Dashboard title
  - Welcome message with your email/name
  - Hero Editor form visible
  - All form fields (Avatar upload, Full Name, Short Description, Long Description)

**File name suggestion:** `01-dashboard-logged-in.png`

---

#### B. Hero Editor - Before Modifications
**What to capture:**
- [ ] Hero editor form with current/default data loaded
- [ ] Show all fields populated with existing data
- [ ] Avatar preview (if any)

**File name suggestion:** `02-hero-editor-before.png`

---

#### C. Hero Editor - Making Changes
**What to capture:**
- [ ] Screenshot while editing fields
- [ ] Show modified text in the form fields
- [ ] If uploading avatar: show file selected or preview updated

**File name suggestion:** `03-hero-editor-editing.png`

---

#### D. Hero Editor - Avatar Upload Preview
**What to capture:**
- [ ] Upload an avatar image (profile picture)
- [ ] Screenshot showing the avatar preview after selecting a file
- [ ] Show the file input with file selected

**File name suggestion:** `04-avatar-upload-preview.png`

---

#### E. Hero Editor - After Saving (Success)
**What to capture:**
- [ ] Click "Save Changes" button
- [ ] Screenshot showing:
  - Success toast notification ("Hero section updated successfully!")
  - Updated form with saved data

**File name suggestion:** `05-hero-editor-saved.png`

---

#### F. Homepage - Updated Hero Content
**What to capture:**
- [ ] Navigate back to homepage (`/`)
- [ ] Screenshot showing:
  - Updated hero section with your name
  - Your avatar (if uploaded)
  - Your short description
  - Your long description
  - All changes reflected from the dashboard

**File name suggestion:** `06-homepage-updated-hero.png`

---

#### G. Vercel Deployment - Deployed Portfolio
**What to capture:**
- [ ] Screenshot of your Vercel deployment dashboard
- [ ] Show:
  - Deployment status (successful)
  - Production URL
  - Latest deployment timestamp
- OR screenshot of your live portfolio homepage with the Vercel URL visible in the browser

**File name suggestion:** `07-vercel-deployment.png`

---

#### H. Production Login Flow (on Vercel)
**What to capture - Multiple Screenshots:**

1. **Step 1: Login Page/Button**
   - [ ] Production URL homepage
   - [ ] Show login button or link
   - **File:** `08a-prod-login-button.png`

2. **Step 2: Auth0 Login Screen**
   - [ ] After clicking login, Auth0 page appears
   - [ ] Show Auth0 login form with your tenant domain visible
   - **File:** `08b-auth0-login-screen.png`

3. **Step 3: After Login - Authenticated State**
   - [ ] Screenshot showing you're logged in on production
   - [ ] User navigation showing your email/name
   - [ ] Dashboard accessible
   - **File:** `08c-prod-logged-in.png`

4. **Step 4: Dashboard Works on Production**
   - [ ] Screenshot of `/dashboard` on production URL
   - [ ] Hero editor visible and functional
   - **File:** `08d-prod-dashboard.png`

---

## 🧪 Testing Checklist (Do This Before Screenshots)

### Local Testing
- [ ] Homepage loads with updated hero content
- [ ] `/api/hero` GET returns your data
- [ ] Login works (redirects to Auth0 and back)
- [ ] `/dashboard` loads for authenticated users
- [ ] Hero editor loads existing data
- [ ] Avatar upload works (preview shows)
- [ ] Saving hero updates the database
- [ ] Homepage reflects changes after save
- [ ] Logout works

### Vercel Deployment Testing
- [ ] Pushed all code to GitHub
- [ ] Created Vercel project
- [ ] Set all environment variables in Vercel:
  - `AUTH0_SECRET`
  - `AUTH0_BASE_URL` (your Vercel URL)
  - `AUTH0_ISSUER_BASE_URL`
  - `AUTH0_CLIENT_ID`
  - `AUTH0_CLIENT_SECRET`
  - `AUTH0_DOMAIN`
  - `APP_BASE_URL`
  - `NEON_DB_URL`
  - `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO`
  - `NEXT_PUBLIC_BASE_URL`
- [ ] Updated Auth0 Application Settings with Vercel URLs:
  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - Allowed Login URLs
- [ ] Redeployed after setting env vars
- [ ] Production login works
- [ ] Production dashboard works
- [ ] Hero CRUD works on production

---

## 📝 Step-by-Step Screenshot Guide

### For Dashboard Screenshots:

1. **Start fresh:** Clear browser cache or use incognito
2. **Login:** Go to `http://localhost:3000/api/auth/login`
3. **Navigate to dashboard:** `http://localhost:3000/dashboard`
4. **Take screenshot 1:** Dashboard with hero editor visible
5. **Note current data:** Take screenshot of form with existing data
6. **Make changes:**
   - Update Full Name to "Dilraj Randhawa" (if not already)
   - Update Short Description
   - Update Long Description
   - Upload an avatar image
7. **Take screenshot 2:** Form with your changes (before saving)
8. **Take screenshot 3:** Avatar preview after upload
9. **Click Save Changes**
10. **Take screenshot 4:** Success message and updated form
11. **Navigate to homepage:** `http://localhost:3000`
12. **Take screenshot 5:** Homepage with all your changes visible

### For Production Screenshots:

1. **Deploy to Vercel** (see DEPLOYMENT.md)
2. **Visit your production URL:** `https://your-app.vercel.app`
3. **Take screenshot:** Homepage on production
4. **Click login**
5. **Take screenshot:** Auth0 login page
6. **Login with your account**
7. **Take screenshot:** Logged in state (show user nav)
8. **Visit dashboard:** `https://your-app.vercel.app/dashboard`
9. **Take screenshot:** Dashboard working on production
10. **Vercel dashboard screenshot:** Show successful deployment

---

## 📦 Submission Package

Create a folder with:
```
lab5-submission/
├── README.md (with GitHub link)
├── screenshots/
│   ├── 01-dashboard-logged-in.png
│   ├── 02-hero-editor-before.png
│   ├── 03-hero-editor-editing.png
│   ├── 04-avatar-upload-preview.png
│   ├── 05-hero-editor-saved.png
│   ├── 06-homepage-updated-hero.png
│   ├── 07-vercel-deployment.png
│   ├── 08a-prod-login-button.png
│   ├── 08b-auth0-login-screen.png
│   ├── 08c-prod-logged-in.png
│   └── 08d-prod-dashboard.png
└── notes.txt (optional - any notes for the instructor)
```

---

## ✅ Final Checklist

- [ ] All code committed and pushed to GitHub
- [ ] GitHub repository link ready
- [ ] All required screenshots captured
- [ ] Screenshots are clear and readable
- [ ] Production deployment successful
- [ ] Auth0 login works on production
- [ ] Hero CRUD works on production
- [ ] All screenshots organized in a folder
- [ ] Submission ready to upload

---

## 🚀 Quick Links

- **Local Dev:** http://localhost:3000
- **Local Dashboard:** http://localhost:3000/dashboard
- **Local Login:** http://localhost:3000/api/auth/login
- **Production:** https://your-app.vercel.app (replace with your URL)
- **GitHub Repo:** (your repository URL)
- **Vercel Project:** (your Vercel dashboard URL)

---

## 💡 Tips

1. **Use browser dev tools** to capture full page screenshots
2. **Highlight important areas** with arrows or boxes (optional)
3. **Include browser URL bar** in screenshots to show which page you're on
4. **Clear, high-resolution** screenshots are easier to grade
5. **Test everything twice** - once locally, once on production
6. **Keep Auth0 callback URLs updated** for both localhost and production

---

Good luck with your submission! 🎉
