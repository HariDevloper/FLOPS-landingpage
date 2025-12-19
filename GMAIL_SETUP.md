# FLOPS Technologies - Gmail Setup Guide

## 📧 Setting Up Gmail for Contact Form

To enable the contact form to send emails, you need to configure Gmail App Password:

### Step 1: Enable 2-Step Verification
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "2-Step Verification"
3. Follow the prompts to enable it (if not already enabled)

### Step 2: Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" from the first dropdown
3. Select "Other (Custom name)" from the second dropdown
4. Enter "FLOPS Technologies Website" as the name
5. Click "Generate"
6. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

### Step 3: Create .env.local File
1. In your project root (`c:\Users\MAHESH DAVID\Music\primespark`), create a file named `.env.local`
2. Add the following content:

```
GMAIL_USER=primespark.pvt@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password-here
```

3. Replace `your-16-character-app-password-here` with the password you copied in Step 2
4. **Important:** Remove all spaces from the app password

### Step 4: Restart Dev Server
After creating the `.env.local` file:
1. Stop the dev server (Ctrl+C in terminal)
2. Run `npm run dev` again
3. The contact form will now send emails!

## 📝 Contact Information
- **Email:** primespark.pvt@gmail.com
- **Phone:** +91 6385420576
- **Company:** FLOPS Technologies

## ✅ What Happens When Form is Submitted?
1. Customer fills out the contact form
2. Email is sent to: `primespark.pvt@gmail.com` with their details
3. Auto-reply is sent to the customer confirming receipt
4. Success message is shown on the website

## 🔒 Security Notes
- Never commit `.env.local` to Git (it's already in .gitignore)
- App passwords are safer than using your main Gmail password
- You can revoke app passwords anytime from your Google Account

## 🎨 Branding Updates Completed
✅ Company name changed to FLOPS Technologies
✅ Logo updated
✅ Email: primespark.pvt@gmail.com
✅ Phone: +91 6385420576
✅ All pages and components updated
