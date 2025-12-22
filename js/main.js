// Main JavaScript - Portfolio Ikra Dayandra Deswan
// Handles interactions, animations, language switching, and form submission

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // GLOBAL VARIABLES
    // ========================================
    let currentLang = 'en';
    
    // ========================================
    // NAVBAR FUNCTIONALITY
    // ========================================
    
    // Sticky navbar on scroll
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Update active navigation link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // ========================================
    // LANGUAGE SWITCHING
    // ========================================
    
    const langEnBtn = document.getElementById('lang-en');
    const langIdBtn = document.getElementById('lang-id');
    const mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');
    
    function switchLanguage(lang) {
        currentLang = lang;
        
        // Update button states (desktop)
        if (lang === 'en') {
            langEnBtn.classList.add('bg-primary', 'text-white');
            langEnBtn.classList.remove('text-gray-600', 'hover:text-primary');
            langIdBtn.classList.remove('bg-primary', 'text-white');
            langIdBtn.classList.add('text-gray-600', 'hover:text-primary');
        } else {
            langIdBtn.classList.add('bg-primary', 'text-white');
            langIdBtn.classList.remove('text-gray-600', 'hover:text-primary');
            langEnBtn.classList.remove('bg-primary', 'text-white');
            langEnBtn.classList.add('text-gray-600', 'hover:text-primary');
        }
        
        // Update button states (mobile)
        mobileLangBtns.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('bg-primary', 'text-white');
                btn.classList.remove('text-gray-600');
            } else {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('text-gray-600');
            }
        });
        
        // Update content
        updateAboutSection(lang);
        updateExperienceSection(lang);
    }
    
    // Language button event listeners
    if (langEnBtn) {
        langEnBtn.addEventListener('click', () => switchLanguage('en'));
    }
    if (langIdBtn) {
        langIdBtn.addEventListener('click', () => switchLanguage('id'));
    }
    mobileLangBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // ========================================
    // DYNAMIC CONTENT RENDERING
    // ========================================
    
    // Update About Section
    function updateAboutSection(lang) {
        const aboutText = document.getElementById('about-text');
        if (aboutText && portfolioData.about[lang]) {
            const paragraphs = portfolioData.about[lang].paragraphs;
            aboutText.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
        }
    }
    
    // Update Experience Section
    function updateExperienceSection(lang) {
        const container = document.getElementById('experience-container');
        if (!container || !portfolioData.experiences[lang]) return;
        
        const experiences = portfolioData.experiences[lang];
        
        container.innerHTML = experiences.map((exp, index) => `
            <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8 timeline-item reveal">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div class="flex-1">
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">${exp.position}</h3>
                        <div class="flex flex-wrap items-center gap-2 mb-2">
                            <p class="text-lg font-semibold text-primary">${exp.company}</p>
                            ${exp.program ? `<span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">${exp.program}</span>` : ''}
                            ${exp.current ? '<span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Current</span>' : ''}
                        </div>
                        <p class="text-gray-600 mb-1">${exp.duration}</p>
                        <p class="text-sm text-gray-500">${exp.location}</p>
                    </div>
                </div>
                
                <p class="text-gray-700 mb-4">${exp.description}</p>
                
                <div class="mb-4">
                    <h4 class="text-sm font-semibold text-gray-900 mb-3">Key Responsibilities & Achievements:</h4>
                    <ul class="space-y-2">
                        ${exp.responsibilities.map(resp => `
                            <li class="flex items-start text-gray-700">
                                <svg class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                                <span>${resp}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div>
                    <p class="text-sm font-semibold text-gray-900 mb-2">Technologies:</p>
                    <div class="flex flex-wrap gap-2">
                        ${exp.technologies.map(tech => `
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                
                ${exp.company === 'Ramuan Jkt' ? `
                    <div class="mt-4 pt-4 border-t border-gray-200">
                        <a href="ramuan sertif.pdf" target="_blank" class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                            View Certificate
                        </a>
                    </div>
                ` : ''}
            </div>
        `).join('');
        
        // Re-initialize reveal animation
        initRevealAnimation();
    }
    
    // Initialize content on page load
    updateExperienceSection('en');
    
    // ========================================
    // SCROLL REVEAL ANIMATION
    // ========================================
    
    function initRevealAnimation() {
        const reveals = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        reveals.forEach(reveal => {
            revealObserver.observe(reveal);
        });
    }
    
    initRevealAnimation();
    
    // ========================================
    // CONTACT FORM HANDLING
    // ========================================
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            
            // Simulate form submission (replace with actual backend call)
            setTimeout(() => {
                // Success
                showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                
                // In production, replace with actual API call:
                // fetch('/api/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formData)
                // })
                // .then(response => response.json())
                // .then(data => {
                //     showMessage('Thank you! I\'ll get back to you soon.', 'success');
                //     contactForm.reset();
                // })
                // .catch(error => {
                //     showMessage('Sorry, something went wrong. Please try again.', 'error');
                // })
                // .finally(() => {
                //     submitBtn.textContent = originalText;
                //     submitBtn.disabled = false;
                //     submitBtn.classList.remove('loading');
                // });
            }, 1500);
        });
    }
    
    // Show message (success or error)
    function showMessage(message, type) {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.success-message, .error-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
        messageDiv.textContent = message;
        
        // Insert after form
        contactForm.insertAdjacentElement('afterend', messageDiv);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
    
    // ========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ========================================
    
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-to-main';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation for mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                mobileMenu.classList.toggle('hidden');
            }
        });
    }
    
    // ========================================
    // PERFORMANCE OPTIMIZATION
    // ========================================
    
    // Lazy load images (if any are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ========================================
    // CONSOLE MESSAGE
    // ========================================
    
    console.log('%c👋 Hi there!', 'font-size: 24px; font-weight: bold; color: #2563eb;');
    console.log('%cLooking at the code? I appreciate your curiosity!', 'font-size: 14px; color: #64748b;');
    console.log('%cThis portfolio is built with vanilla HTML, CSS, and JavaScript.', 'font-size: 14px; color: #64748b;');
    console.log('%cFeel free to reach out: ikradayandra@gmail.com', 'font-size: 14px; color: #2563eb; font-weight: bold;');
    
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
