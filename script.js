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
     /* ==================================================
       3. HERO ANIMATION (HANDLED VIA PURE CSS FOR 100% STABILITY)
    ================================================== */
    // Complex external scripts removed to prevent layout breaks on slow networks.
    // Elite reveal animations are now running perfectly via pure CSS keyframes.
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
   /* ==================================================
       5. CONTACT FORM WHATSAPP SUBMISSION
    ================================================== */
    const contactForm = document.getElementById('consultation-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Default submission rokein taaki hum WhatsApp par bhej sakein
            
            // Form ki saari values nikalna
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const budget = document.getElementById('budget').value;
            const requirement = document.getElementById('requirement').value;
            
            // WhatsApp ke liye ek professional message format karna
            const whatsappMessage = `*New Property Consultation Request*%0A%0A` +
                                    `*Client Name:* ${encodeURIComponent(name)}%0A` +
                                    `*Phone:* ${encodeURIComponent(phone)}%0A` +
                                    `*Budget:* ${encodeURIComponent(budget)}%0A` +
                                    `*Requirement:* ${encodeURIComponent(requirement)}`;
            
            // Aapka WhatsApp link generate karna (+917011480922)
            const whatsappUrl = `https://wa.me/917011480922?text=${whatsappMessage}`;
            
            // Button par animation dikhana
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = "Opening WhatsApp...";
            
            setTimeout(() => {
                // Naye tab mein user ke WhatsApp par saari details ke sath chat open ho jayegi
                window.open(whatsappUrl, '_blank');
                
                btn.innerText = "Details Sent!";
                btn.style.backgroundColor = "#25D366";
                btn.style.borderColor = "#25D366";
                contactForm.reset();
                
                // Revert button after 3 seconds
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = "";
                    btn.style.borderColor = "";
                }, 3000);
            }, 1000);
        });
    }