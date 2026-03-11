# Client Site Starter Template

## How to Use This Template for a New Client

### Step 1: Copy the Template
```bash
# Create a new folder for the client (use their business name, lowercase, hyphens)
cp -r client-starter-template lows-custom-stainless
cd lows-custom-stainless
```

### Step 2: Edit the Config File
Open `src/config/site.ts` and fill in the client's info:
- Company name, tagline, description
- Contact info (email, phone, address)
- Social media links
- Brand colors (primary, secondary, accent)
- Services list
- About section (story, mission, stats)
- Hero headline and CTA text
- Testimonials

**This one file controls 90% of the site content.**

### Step 3: Add Client Images
- Put their logo at `/public/images/logo.png`
- Put gallery photos in `/public/images/gallery/`
- Put an Open Graph image at `/public/images/og-image.jpg` (1200x630px)

### Step 4: Install and Run
```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Step 5: Customize Further (if needed)
- **Different pages?** Add/remove folders in `src/app/`
- **Contact form emails?** Install Resend (`npm install resend`), add API key to `.env.local`, uncomment code in `src/app/api/contact/route.ts`
- **Database?** Add Convex if the client needs it (`npx convex init`)
- **Animations?** Add Motion (`npm install motion`)

### Step 6: Deploy
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial site for [Client Name]"
# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/client-repo.git
git push -u origin main

# Deploy to Vercel
# Connect the GitHub repo in Vercel dashboard
# Add any env variables (RESEND_API_KEY, etc.)
# Set the client's custom domain
```

## File Structure
```
src/
  config/
    site.ts          <-- THE MAIN FILE - all client branding here
  components/
    Header.tsx       <-- Responsive nav (reads from site config)
    Footer.tsx       <-- Footer with contact + social + "Powered by Media4U"
    Icons.tsx        <-- SVG icons (no external dependencies)
  app/
    page.tsx         <-- Home page (hero, services, stats, testimonials, CTA)
    layout.tsx       <-- Root layout (header + footer wrapping all pages)
    globals.css      <-- Tailwind + brand color CSS variables
    services/
      page.tsx       <-- Services page
    about/
      page.tsx       <-- About page with founder section
    contact/
      page.tsx       <-- Contact form
    gallery/
      page.tsx       <-- Photo gallery with category filter + lightbox
    api/
      contact/
        route.ts     <-- Contact form backend (email via Resend)
  public/
    images/          <-- Client images go here
```

## Adding Features (When a Client Needs More)

### Email (Resend)
```bash
npm install resend
```
Add `RESEND_API_KEY=re_xxxxx` to `.env.local`

### Database (Convex)
```bash
npx convex init
npm install convex
```

### Animations (Motion)
```bash
npm install motion
```

### Blog
Copy the blog pattern from Media4U or add a simple markdown blog.

### Booking/Appointments
Add Calendly embed or build with Convex.
