# Lab 5 - Quick Reference Card

## 🚀 Local Development

```bash
# Start development server
npm run dev

# Access locally
http://localhost:3000
```

## 🔗 Important URLs

### Local
- **Homepage**: `http://localhost:3000`
- **Dashboard**: `http://localhost:3000/dashboard`
- **Hero API**: `http://localhost:3000/api/hero`
- **Login**: `http://localhost:3000/api/auth/login`
- **Logout**: `http://localhost:3000/api/auth/logout`

### Production (replace with your Vercel URL)
- **Homepage**: `https://your-app.vercel.app`
- **Dashboard**: `https://your-app.vercel.app/dashboard`
- **Hero API**: `https://your-app.vercel.app/api/hero`
- **Login**: `https://your-app.vercel.app/api/auth/login`
- **Logout**: `https://your-app.vercel.app/api/auth/logout`

## 📝 Environment Variables (for Vercel)

```env
# Auth0 (IMPORTANT: Update AUTH0_BASE_URL to your Vercel URL!)
AUTH0_SECRET=b3038d2283c54095f2d0e4ea87f5b9eab182532964ea10e8fbf0246951d799fd
AUTH0_BASE_URL=https://your-app.vercel.app
AUTH0_ISSUER_BASE_URL=https://dev-u3ix6pwyrh4bi1ez.us.auth0.com
AUTH0_CLIENT_ID=ryL4wAQMZ96tuKd4oabpe9hF3yqCkpPQ
AUTH0_CLIENT_SECRET=txJgZg4hiJOJIc6vvgPhl-YGOaCYZs9dailJPdbqw1g-Tnc1CfIjaQhkMOjF0s7g

# Database
NEON_DB_URL=postgresql://neondb_owner:npg_jgchP3vnqI7S@ep-dawn-wind-adiuhdby-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

# Email
RESEND_API_KEY=re_RKhup7xB_Q2FeFxGks9fp6c1VxGoAJDUH
RESEND_FROM=djrandhawa15@resend.dev
RESEND_TO=djrandhawa15@gmail.com

# Public
NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app
```

## 🔐 Auth0 Settings (Update in Auth0 Dashboard)

### Allowed Callback URLs
```
https://your-app.vercel.app/api/auth/callback,
http://localhost:3000/api/auth/callback
```

### Allowed Logout URLs
```
https://your-app.vercel.app,
http://localhost:3000
```

### Allowed Web Origins
```
https://your-app.vercel.app,
http://localhost:3000
```

### Allowed Login URLs
```
https://your-app.vercel.app/api/auth/login,
http://localhost:3000/api/auth/login
```

## ✅ Testing Flow

1. **Login** → Navigate to `/api/auth/login`
2. **Dashboard** → Go to `/dashboard` (after login)
3. **Edit Hero** → Upload avatar, fill fields, click "Save Changes"
4. **View Changes** → Go to homepage, see updated hero
5. **Verify Persistence** → Refresh page, changes remain
6. **Logout** → Navigate to `/api/auth/logout`

## 🎯 API Endpoints

### GET /api/hero
- **Method**: GET
- **Auth**: Public (no auth required)
- **Returns**: Current hero data
- **Example**:
  ```bash
  curl http://localhost:3000/api/hero
  ```

### PUT /api/hero
- **Method**: PUT
- **Auth**: Required (Auth0 session)
- **Body**: FormData with:
  - `avatarFile` (optional): Image file
  - `avatar`: Current avatar data URL
  - `fullName`: String (2-200 chars)
  - `shortDescription`: String (2-120 chars)
  - `longDescription`: String (10-5000 chars)
- **Returns**: Updated hero data

## 🐛 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| 401 on PUT | Verify logged in, check AUTH0_BASE_URL matches deployment |
| Auth0 redirect loop | Update Auth0 callback URLs to include Vercel domain |
| Homepage shows defaults | Check `revalidate = 0` in page.js, test API directly |
| Avatar won't upload | Ensure image < 1MB, check file type is image/* |
| Database errors | Verify NEON_DB_URL, check Neon dashboard |

## 📦 Key Files

```
src/
├── app/
│   ├── api/hero/route.js       # Hero API (GET/PUT)
│   ├── dashboard/page.jsx      # Protected dashboard
│   └── page.js                 # Homepage (with hero)
├── components/
│   ├── hero-editor-form.jsx    # Hero editor UI
│   └── my-hero-section.jsx     # Hero display
└── lib/
    ├── db.js                   # Hero DB functions
    └── auth0.js                # Auth0 client
```

## 🎓 Remember

- **Auth0 Base URL**: Must match your deployment (localhost OR Vercel)
- **Avatar Size**: Maximum 1MB
- **Short Description**: Maximum 120 characters
- **Data URLs**: No external storage - images stored as base64
- **Revalidation**: Homepage set to `revalidate = 0` for fresh data

## 📸 Screenshot Checklist

- [ ] Dashboard while logged in
- [ ] Hero editor before changes
- [ ] Hero editor with data filled
- [ ] Success message after save
- [ ] Homepage with updated hero
- [ ] Vercel deployment page
- [ ] Auth0 login on production
- [ ] Logged in user state

---

**Need more help?** See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.
