# 🚀 HOSTINGER DEPLOYMENT GUIDE — RAREWARE STUDIO

## 📋 OVERVIEW

This guide will help you deploy RareWare Studio to Hostinger with your own domain.

**Project:** RareWare Studio Digital Flagship  
**Type:** Static HTML/CSS/JS Website  
**Size:** ~250KB (excluding images)  
**Requirements:** Basic web hosting (no server-side code needed)

---

## 🎯 DEPLOYMENT STEPS

### **STEP 1: Prepare Files for Upload**

**Files to Upload (from `rareware_studio_digital_flagship/`):**

```
✅ index.html
✅ services.html
✅ work.html
✅ about.html
✅ contact.html
✅ process.html
✅ team.html
✅ crypto.html
✅ lumina.html
✅ case-study.html
✅ rarekits-case-study.html
✅ styles.css
✅ main.js
✅ favicon.svg
✅ robots.txt
✅ sitemap.xml
```

**DO NOT Upload:**
- ❌ `.git/` folder
- ❌ `.vercel/` folder
- ❌ `.gitignore`
- ❌ `code.html` (prototype file)
- ❌ Any documentation files (.md)

---

### **STEP 2: Connect to Hostinger**

#### **Option A: File Manager (Easy)**
1. Log in to Hostinger control panel (hPanel)
2. Go to **Files → File Manager**
3. Navigate to `public_html/` directory
4. Delete default files (index.html, etc.)
5. Upload all files from the list above

#### **Option B: FTP (Recommended)**
1. Get FTP credentials from Hostinger:
   - Go to **Files → FTP Accounts**
   - Note: Hostname, Username, Password, Port (21)

2. Use FTP client (FileZilla recommended):
   - Download FileZilla: https://filezilla-project.org/
   - Connect using credentials
   - Navigate to `public_html/`
   - Upload all files

#### **Option C: Git Deployment (Advanced)**
1. In Hostinger hPanel, go to **Advanced → Git**
2. Click **Create Repository**
3. Enter GitHub URL: `https://github.com/arz282-ctrl/RareWare-STUDIO.git`
4. Branch: `flagship-vanilla`
5. Deploy path: `public_html/`
6. Click **Create**

---

### **STEP 3: Configure Domain**

#### **If Domain is Already on Hostinger:**
1. Go to **Domains** in hPanel
2. Click **Manage** next to your domain
3. Point to `public_html/` directory
4. Wait 5-10 minutes for propagation

#### **If Domain is External (e.g., GoDaddy, Namecheap):**
1. Get Hostinger nameservers:
   - Go to **Domains → Nameservers**
   - Note: `ns1.dns-parking.com` and `ns2.dns-parking.com`

2. Update nameservers at your domain registrar:
   - Log in to domain registrar
   - Find DNS/Nameserver settings
   - Replace with Hostinger nameservers
   - Save changes

3. Wait 24-48 hours for full propagation

---

### **STEP 4: SSL Certificate (HTTPS)**

1. In Hostinger hPanel, go to **Security → SSL**
2. Select your domain
3. Click **Install SSL** (free Let's Encrypt)
4. Wait 5-10 minutes for activation
5. Enable **Force HTTPS** redirect

---

### **STEP 5: Update URLs in Code**

After domain is connected, update these files:

#### **1. robots.txt**
```txt
Sitemap: https://yourdomain.com/sitemap.xml
```

#### **2. sitemap.xml**
Replace all instances of `https://rarewarestudio.space/` with `https://yourdomain.com/`

#### **3. All HTML files**
Update Open Graph URLs:
```html
<meta property="og:url" content="https://yourdomain.com/" />
<meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
```

---

### **STEP 6: Test Deployment**

**Checklist:**
- [ ] Visit `https://yourdomain.com` — Homepage loads
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Verify particle canvas animation works
- [ ] Test contact form (if applicable)
- [ ] Check SSL certificate (green padlock)
- [ ] Test page load speed (should be <2s)

**Tools:**
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- SSL Checker: https://www.sslshopper.com/ssl-checker.html

---

### **STEP 7: Submit to Search Engines**

#### **Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add property: `https://yourdomain.com`
3. Verify ownership (HTML file upload or DNS)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

#### **Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Add site: `https://yourdomain.com`
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

---

## 🔧 HOSTINGER-SPECIFIC OPTIMIZATIONS

### **1. Enable Caching**
```
# Add to .htaccess file in public_html/
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### **2. Enable Gzip Compression**
```
# Add to .htaccess
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

### **3. Set Custom Error Pages**
Create `404.html` in `public_html/`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 — Page Not Found</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 2rem;">
    <div>
      <h1 style="font-size: 8rem; margin: 0;">404</h1>
      <p style="font-size: 1.5rem; margin: 1rem 0;">Page Not Found</p>
      <a href="/" style="color: #2DD4BF;">Return Home</a>
    </div>
  </div>
</body>
</html>
```

Then add to `.htaccess`:
```
ErrorDocument 404 /404.html
```

---

## 📊 PERFORMANCE CHECKLIST

After deployment, verify:

- [ ] **Load Time:** <2 seconds (use GTmetrix)
- [ ] **Mobile Score:** 90+ (use PageSpeed Insights)
- [ ] **SSL:** A+ rating (use SSL Labs)
- [ ] **Uptime:** 99.9% (monitor with UptimeRobot)
- [ ] **Backup:** Weekly backups enabled in Hostinger

---

## 🚨 TROUBLESHOOTING

### **Issue: Site not loading**
- Check DNS propagation: https://dnschecker.org/
- Verify files are in `public_html/` not a subfolder
- Check file permissions (644 for files, 755 for folders)

### **Issue: CSS/JS not loading**
- Check file paths are relative (not absolute)
- Verify files uploaded correctly
- Clear browser cache (Ctrl+Shift+R)

### **Issue: Particle canvas not working**
- Check browser console for JavaScript errors
- Verify `main.js` uploaded correctly
- Test in different browsers

### **Issue: Images not loading**
- All images use external URLs (Unsplash, Google)
- Check internet connection
- Verify URLs are HTTPS (not HTTP)

---

## 📈 POST-DEPLOYMENT TASKS

### **Week 1:**
- [ ] Monitor uptime and performance
- [ ] Check Google Search Console for indexing
- [ ] Test all forms and interactive elements
- [ ] Set up Google Analytics (optional)

### **Month 1:**
- [ ] Review search rankings
- [ ] Analyze traffic sources
- [ ] Update content if needed
- [ ] Build backlinks

### **Ongoing:**
- [ ] Monthly backups
- [ ] Security updates
- [ ] Content updates
- [ ] Performance monitoring

---

## 🎯 HOSTINGER HOSTING PLANS

**Recommended Plan:** Premium or Business

| Feature | Premium | Business |
|---------|---------|----------|
| Websites | 100 | 100 |
| Storage | 100 GB | 200 GB |
| Bandwidth | Unlimited | Unlimited |
| Free SSL | ✅ Yes | ✅ Yes |
| Free Domain | ✅ Yes | ✅ Yes |
| Email | 100 accounts | Unlimited |
| Price | ~$2.99/mo | ~$3.99/mo |

**Why Premium/Business?**
- Free SSL certificate
- Better performance
- More storage for future projects
- Email accounts included

---

## 📞 SUPPORT

**Hostinger Support:**
- Live Chat: 24/7 available in hPanel
- Email: support@hostinger.com
- Knowledge Base: https://support.hostinger.com/

**RareWare Studio Issues:**
- Check documentation files in project root
- Review browser console for errors
- Test in incognito mode

---

## ✅ FINAL CHECKLIST

Before going live:

- [ ] All files uploaded to `public_html/`
- [ ] Domain connected and SSL enabled
- [ ] URLs updated in code (robots.txt, sitemap.xml, HTML)
- [ ] All pages tested and working
- [ ] Mobile responsive verified
- [ ] Sitemap submitted to Google/Bing
- [ ] Analytics set up (optional)
- [ ] Backup configured
- [ ] Performance tested (<2s load)
- [ ] 404 page created

---

## 🎉 YOU'RE LIVE!

Once deployed, your site will be accessible at:
**https://yourdomain.com**

Share it on:
- LinkedIn
- Twitter
- Portfolio platforms
- Client emails

---

**Deployment Guide Created:** April 20, 2025  
**Version:** 1.0  
**Next Update:** After first deployment
