// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR ACTIVE LINK =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#00ff88';
        } else {
            link.style.color = '#e0e0e0';
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.experience-card, .project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== FLOATING ANIMATION FOR HERO SECTION =====
const heroSection = document.querySelector('.hero');
if (heroSection) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;
        
        const securityIcon = document.querySelector('.security-icon');
        if (securityIcon) {
            securityIcon.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
}

// ===== TYPING EFFECT FOR HERO TITLE =====
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let index = 0;
    const typeSpeed = 50;
    
    function typeCharacter() {
        if (index < originalText.length) {
            heroTitle.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeCharacter, typeSpeed);
        }
    }
    
    // Start typing after page load
    window.addEventListener('load', () => {
        setTimeout(typeCharacter, 300);
    });
}

// ===== PARTICLE EFFECT ON BUTTON HOVER =====
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const particle = document.createElement('span');
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.position = 'absolute';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.backgroundColor = '#00ff88';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.animation = 'particleFloat 0.6s ease-out forwards';
        
        this.style.position = 'relative';
        this.appendChild(particle);
        
        setTimeout(() => particle.remove(), 600);
    });
});

// Add particle animation to styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        from {
            opacity: 1;
            transform: translate(0, 0);
        }
        to {
            opacity: 0;
            transform: translate(${Math.random() * 100 - 50}px, -50px);
        }
    }
`;
document.head.appendChild(style);

// ===== SKILLS COUNTER ANIMATION =====
const skillTags = document.querySelectorAll('.skill-tag');
let skillCountAnimated = false;

const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillCountAnimated) {
            skillCountAnimated = true;
            animateSkillTags();
        }
    });
}, { threshold: 0.5 });

function animateSkillTags() {
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.animation = 'skillAppear 0.4s ease-out forwards';
        }, index * 30);
    });
}

const skillSection = document.querySelector('.skills');
if (skillSection) {
    skillObserver.observe(skillSection);
}

// Add skill animation to styles
const skillStyle = document.createElement('style');
skillStyle.textContent = `
    @keyframes skillAppear {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(skillStyle);

// ===== STAT COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
    }, 16);
}

const statCards = document.querySelectorAll('.stat-card h3');
let statsAnimated = false;

const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            statCards.forEach(card => {
                const number = parseInt(card.textContent);
                if (!isNaN(number)) {
                    animateCounter(card, number);
                }
            });
        }
    });
}, { threshold: 0.5 });

document.querySelector('.about-stats') && statsObserver.observe(document.querySelector('.about-stats'));

// ===== DYNAMIC YEAR IN FOOTER =====
const footerText = document.querySelector('.footer p');
if (footerText) {
    const year = new Date().getFullYear();
    footerText.textContent = `© ${year} nullnothingnhm | Cybersecurity Professional`;
}

// ===== GLITCH EFFECT ON HOVER =====
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('mouseenter', function() {
        this.style.textShadow = `
            2px 0 #00ff88,
            -2px 0 #00d9ff,
            0 2px #ff0055
        `;
        setTimeout(() => {
            this.style.textShadow = 'none';
        }, 100);
    });
});

console.log('🛡️ Portfolio loaded successfully!');
console.log('💻 Welcome to the cybersecurity portfolio of nullnothingnhm');