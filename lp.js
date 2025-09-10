document.addEventListener('DOMContentLoaded', function () {
  const landingContainer = document.getElementById('landingpage-container');
  if (landingContainer) {
    document.body.prepend(landingContainer);
    landingContainer.style.visibility = 'visible';
    document.body.classList.add('landing-page-active');
  }

  const navbar = document.getElementById('landing-navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
  });

  // Mobile menu toggle (bottom sheet)
  if (hamburgerBtn && mobileMenu) {
      hamburgerBtn.addEventListener('click', () => {
        const isOpen = hamburgerBtn.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.classList.toggle('mobile-menu-active', isOpen);
      });
  }

  // Smooth scroll + close menu
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      
      if (mobileMenu && mobileMenu.classList.contains('open')) {
          hamburgerBtn.classList.remove('open');
          mobileMenu.classList.remove('open');
          document.body.classList.remove('mobile-menu-active');
      }

      if (targetId && targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

