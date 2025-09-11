/* ===============================================================
  KODE JAVASCRIPT LANDING PAGE (REVISI)
  =============================================================== */
document.addEventListener('DOMContentLoaded', function() {

  document.body.classList.add('landing-page-active');

  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

  if (navToggle) {
    navToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      navMenu.classList.add('show-menu');
      document.body.classList.add('mobile-menu-active');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      document.body.classList.remove('mobile-menu-active');
    });
  }
  
  const navLinks = document.querySelectorAll('.lp-nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (navMenu.classList.contains('show-menu')) {
              navMenu.classList.remove('show-menu');
              document.body.classList.remove('mobile-menu-active');
          }
      });
  });

  document.addEventListener('click', (event) => {
      const isClickInsideMenu = navMenu.contains(event.target);
      const isClickOnToggle = navToggle && navToggle.contains(event.target);
      if (navMenu && navMenu.classList.contains('show-menu') && !isClickInsideMenu && !isClickOnToggle) {
          navMenu.classList.remove('show-menu');
          document.body.classList.remove('mobile-menu-active');
      }
  });

  function scrollHeader() {
    const header = document.getElementById('lp-header');
    if (!header) return;
    const container = document.getElementById('landingpage-container');
    if (!container) return;
    if (container.scrollTop >= 50) {
      header.classList.add('lp-header-scrolled');
    } else {
      header.classList.remove('lp-header-scrolled');
    }
  }
  const container = document.getElementById('landingpage-container');
  if (container) {
    container.addEventListener('scroll', scrollHeader);
  }

  const internalLinks = document.querySelectorAll('.lp-nav-link[href^="#"], .lp-button-hero[href^="#"], .lp-button-outline[href^="#"], .lp-button-primary[href^="#"]');
  internalLinks.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector('#landingpage-container ' + targetId);
          const container = document.getElementById('landingpage-container');
          if (targetElement && container) {
              const headerOffset = 80; 
              const elementPosition = targetElement.offsetTop;
              const offsetPosition = elementPosition - headerOffset;
              container.scrollTo({
                   top: offsetPosition,
                   behavior: "smooth"
              });
          }
      });
  });

});
