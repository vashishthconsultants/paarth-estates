/* script.js */

document.addEventListener('DOMContentLoaded', () => {

    /* ==================================================
       1. STICKY NAVBAR
    ================================================== */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ==================================================
       2. MOBILE MENU TOGGLE
    ================================================== */
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });

    /* ==================================================
       3. PREMIUM CINEMATIC HERO ANIMATION (GSAP)
    ================================================== */
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline();

        // Ensure elements are initially visible for animation processing
        gsap.set(".hero-anim", { autoAlpha: 0, y: 30 });
        
        tl.to(".blueprint-line", {
            strokeDashoffset: 0,
            duration: 2.5,
            ease: "power2.inOut",
            stagger: 0.2
        })
        .to(".building-floor", {
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: "power1.inOut"
        }, "-=1")
        .to(".building-window", {
            opacity: 0.8,
            fill: "#D4AF37",
            duration: 0.8,
            stagger: 0.05,
            ease: "power1.inOut"
        }, "-=0.5")
        .to(".hero-svg-container", {
            scale: 1.05,
            duration: 5,
            ease: "power1.inOut"
        }, "-=3.5")
        .to(".hero-anim", {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=4");
    }

    /* ==================================================
       4. FAQ ACCORDION LOGIC
    ================================================== */
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Toggle current FAQ
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    /* ==================================================
       5. CONTACT FORM VISUAL SUBMISSION
    ================================================== */
    const contactForm = document.getElementById('consultation-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            // Visual feedback
            btn.innerText = "Processing...";
            btn.style.opacity = "0.8";
            
            setTimeout(() => {
                btn.innerText = "Request Received!";
                btn.style.backgroundColor = "#25D366";
                btn.style.borderColor = "#25D366";
                btn.style.opacity = "1";
                
                // Reset form visually
                contactForm.reset();
                
                // Revert button after 3 seconds
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = "";
                    btn.style.borderColor = "";
                }, 3000);
            }, 1500);
        });
    }
});