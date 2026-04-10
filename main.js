/* ================================================================
   RAREWARE STUDIO — Premium Global Scripts
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Loading sequence (fallback)
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1000);
    }

    /* Custom Cursor removed as per request to use standard mouse point. */    // 3. Mobile Menu Toggle
    window.toggleMenu = function() {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        if (hamburger && mobileMenu) {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        }
    };

    // 4. Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => revealObserver.observe(el));

    // 5. Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 6. 3D Card Tilt (Architects Section)
    const initTeamTilt = () => {
        const cards = document.querySelectorAll('.member-card');
        
        cards.forEach(card => {
            // Add Data Layer content if missing
            if (!card.querySelector('.data-layer')) {
                const dataLayer = document.createElement('div');
                dataLayer.className = 'data-layer';
                const stream = document.createElement('div');
                stream.className = 'data-stream';
                
                // Generate random "coding" strings
                let codeString = "";
                const chars = "ABCDEF0123456789<>[]{}/\\|*&^%$#@!+=-_";
                for (let i = 0; i < 400; i++) {
                    codeString += chars.charAt(Math.floor(Math.random() * chars.length));
                    if (i % 20 === 0) codeString += "\n";
                }
                stream.textContent = codeString + codeString; // Double for seamless loop
                dataLayer.appendChild(stream);
                card.appendChild(dataLayer);
            }

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `rotateX(0deg) rotateY(0deg)`;
            });
        });
    };
    initTeamTilt();
});
