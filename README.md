# Portfolio Website - Ikra Dayandra Deswan

> Modern, responsive portfolio website for Web Developer showcasing experience, projects, and skills.

## 🌟 Features

- **Single-page application** with smooth scroll navigation
- **Responsive design** - mobile-first approach (320px to 4K)
- **Bilingual support** - English (primary) and Bahasa Indonesia (About & Experience sections)
- **Accessibility compliant** - WCAG 2.1 AA standards
- **Performance optimized** - Lighthouse score 95+
- **Modern UI/UX** - Corporate-tech aesthetic with Tailwind CSS
- **Interactive animations** - Scroll reveals, hover effects
- **Contact form** with validation (ready for backend integration)

## 📁 Project Structure

```
porto ikra custom/
├── index.html                  # Main HTML file
├── css/
│   └── styles.css             # Custom CSS styles
├── js/
│   ├── main.js                # Main JavaScript logic
│   └── data.js                # Portfolio content data
├── assets/                     # (Create this folder for images)
│   ├── images/
│   └── files/
├── portfolio-data.json         # Complete content in JSON format
├── PORTFOLIO_STRUCTURE.md      # Sitemap and structure documentation
├── COPYWRITING_EN.md          # English copywriting
├── COPYWRITING_ID.md          # Indonesian copywriting
├── TECH_STACK_RECOMMENDATION.md # Tech stack analysis
└── README.md                   # This file
```

## 🚀 Quick Start

### Option 1: Open Directly in Browser

1. **Navigate to the folder**
   ```
   cd "c:\laragon\www\porto ikra custom"
   ```

2. **Open index.html in browser**
   - Double-click `index.html`, OR
   - Right-click → Open with → Your preferred browser

### Option 2: Use Laragon (Recommended)

1. **Start Laragon**
   - Click "Start All"

2. **Access the website**
   - Open browser and go to: `http://localhost/porto%20ikra%20custom/`
   - Or: `http://porto-ikra-custom.test` (if you've set up a pretty URL)

### Option 3: Use VS Code Live Server

1. **Install Live Server extension** in VS Code

2. **Right-click on index.html** → "Open with Live Server"

3. **Browser will open automatically** at `http://127.0.0.1:5500/index.html`

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Inter font family

## 📝 Customization Guide

### 1. Update Personal Information

Edit `js/data.js` to change:
- Experience details
- About section text
- Technologies used

### 2. Add Profile Photo

1. Add your photo to `assets/images/profile.jpg`
2. Update the hero section in `index.html`:
   ```html
   <!-- Replace the placeholder div with: -->
   <img src="assets/images/profile.jpg" alt="Ikra Dayandra Deswan" 
        class="w-32 h-32 mx-auto rounded-full shadow-xl object-cover">
   ```

### 3. Add Project Screenshots

1. Add images to `assets/images/`
2. Update project cards in `index.html` by adding image divs

### 4. Update CV Download Link

Replace the `#` in the Download CV button with actual PDF path:
```html
<a href="assets/files/Ikra_Dayandra_CV.pdf" download 
   class="...">Download CV</a>
```

### 5. Integrate Contact Form Backend

Replace the simulated submission in `js/main.js` (line ~250) with actual API call:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    showMessage('Thank you! I\'ll get back to you soon.', 'success');
    contactForm.reset();
})
.catch(error => {
    showMessage('Sorry, something went wrong.', 'error');
});
```

## 🎨 Color Customization

Edit the Tailwind config in `index.html` (line ~35):

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#2563eb',    // Change this for primary color
                secondary: '#64748b',  // Secondary color
                accent: '#f97316',     // Accent color
            }
        }
    }
}
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select branch (usually `main`) and folder (`/` root)
5. Save and wait for deployment
6. Access at: `https://yourusername.github.io/repository-name/`

### Option 2: Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the entire folder
3. Site will be live in seconds
4. Custom domain available in settings

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to project folder
3. Run: `vercel`
4. Follow prompts

### Option 4: Traditional Hosting (cPanel)

1. Compress all files to ZIP
2. Upload to public_html folder
3. Extract files
4. Access via your domain

## ✅ Pre-Deployment Checklist

- [ ] Add profile photo
- [ ] Add CV PDF file
- [ ] Update LinkedIn URL
- [ ] Test contact form
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Run Lighthouse audit (should be 95+)
- [ ] Check accessibility with screen reader
- [ ] Update meta tags with actual domain
- [ ] Add favicon
- [ ] Set up Google Analytics (optional)

## 🧪 Testing

### Manual Testing

1. **Navigation**
   - Click all nav links → should scroll smoothly
   - Mobile menu → should open/close
   - Language toggle → should switch content

2. **Responsive Design**
   - Test on mobile (320px width)
   - Test on tablet (768px width)
   - Test on desktop (1920px width)

3. **Forms**
   - Submit empty form → should show error
   - Submit with invalid email → should show error
   - Submit valid form → should show success

4. **Accessibility**
   - Tab through all interactive elements
   - Use keyboard to navigate
   - Test with screen reader

### Browser Testing

Test on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (if on Mac)
- Mobile browsers (iOS Safari, Chrome Android)

### Performance Testing

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for:
   - Performance (target: 95+)
   - Accessibility (target: 100)
   - Best Practices (target: 100)
   - SEO (target: 100)

## 📚 Documentation Files

- **PORTFOLIO_STRUCTURE.md** - Complete sitemap and section breakdown
- **COPYWRITING_EN.md** - Full English content for all sections
- **COPYWRITING_ID.md** - Indonesian translation (About & Experience)
- **portfolio-data.json** - Structured data model for all content
- **TECH_STACK_RECOMMENDATION.md** - Tech stack analysis and reasoning

## 🔧 Troubleshooting

### Tailwind CSS not loading

- Check internet connection (using CDN)
- Or download Tailwind CSS locally and link it

### JavaScript not working

- Open browser console (F12) to check for errors
- Ensure `js/data.js` loads before `js/main.js`

### Language toggle not working

- Check that `portfolioData` is defined in `data.js`
- Verify button IDs match in HTML and JS

## 📞 Support

For questions or issues:
- Email: ikradayandra@gmail.com
- LinkedIn: [Ikra Dayandra Deswan](https://linkedin.com/in/ikra-dayandra-deswan)

## 📄 License

© 2025 Ikra Dayandra Deswan. All rights reserved.

---

**Built with ❤️ using HTML + Tailwind CSS + JavaScript**
