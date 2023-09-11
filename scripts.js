
ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".container"
  });

  gsap.from(".text-section > *", {x: 500, duration: 1.5, opacity: 0, scale: 0.5, stagger: 0.2});

gsap.from(".business-content > *", {
    x: -200, 
    duration: 1.5, 
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".orange",
} 
  });

    // Animation for the red panel (background colour change)
    gsap.from(".charity", {
        x: 200,
        duration: 1,
        scrollTrigger: {
            trigger: "#charity",
        }
    });

    // Animation for the blue yoyo panel (yoyo effect)
    gsap.from(".contact", {
        x: -500,
        duration: 1,
        scrollTrigger: {
            trigger: ".yoyo",
            // scrub: true
        }
    });

var container = document.querySelector('.container');
var scrollbarWidth = container.offsetWidth - container.clientWidth;
var header = document.querySelector('header');
header.style.right = scrollbarWidth + 'px';

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const container = document.querySelector('.container');
    let clicked = false;

    function updateActiveLink() {
        if (clicked) return; // If a link was clicked, don't update on scroll

        let currentActiveId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - container.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (container.scrollTop + container.clientHeight / 2 >= sectionTop && container.scrollTop + container.clientHeight / 2 <= sectionBottom) {
                currentActiveId = section.id;
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href').substring(1) === currentActiveId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Hover effect for the underline
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            if (!clicked) {
                navLinks.forEach(l => l.classList.remove('active', 'hovered'));
                this.classList.add('hovered');
            }
        });

        link.addEventListener('mouseout', function() {
            this.classList.remove('hovered');
            if (!clicked) {
                updateActiveLink();
            }
        });

        link.addEventListener('click', function(event) {
            event.preventDefault();
            clicked = true;
            navLinks.forEach(l => l.classList.remove('active', 'hovered'));
            this.classList.add('active');
            const target = this.getAttribute('href');
            container.scrollTo({
                top: document.querySelector(target).offsetTop - container.offsetTop,
                behavior: 'smooth'
            });
            // Reset clicked after a delay to allow scroll event to update the active link
            setTimeout(() => {
                clicked = false;
            }, 500);
        });
    });

    container.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Call once on page load to set the initial state
});




const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    hamburger.addEventListener('click', function() {
        if (mobileNav.style.display === 'block') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'block';
        }
    });

    // Close the mobile menu when a menu item is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.style.display = 'none';
        });
    });


    const sectionsToAnimate = ["#business .black-overlay", "#charity .black-overlay", "#contact .black-overlay"];

    sectionsToAnimate.forEach(selector => {
      gsap.fromTo(selector, 
        { y: "0%", opacity: 1 }, // starting state (at the bottom with full opacity)
        {
          y: "-100%", // ending state (moved up out of view)
          opacity: 0, // fade out
          scrollTrigger: {
            trigger: selector,
            start: "top bottom", // starts when the top of the overlay reaches the bottom of the viewport
            end: "top top", // ends when the top of the section reaches the top of the viewport
            scrub: true
          }
        }
      );
    });

  
    let linkedIn = document.querySelector('.linkedin');
    let linkedHover = document.querySelector('.linkedin-hover');
    linkedHover.addEventListener('mouseover', () => {
        linkedIn.classList.add('linkedin-rotate');

    });
    linkedHover.addEventListener('mouseleave', () => {
        linkedIn.classList.remove('linkedin-rotate');

    });