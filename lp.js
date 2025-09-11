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
  const closeBtn = document.getElementById('mobile-menu-close-btn');

  // Fungsi untuk membuka menu
  const openMenu = () => {
    if (mobileMenu) mobileMenu.classList.add('open');
    document.body.classList.add('mobile-menu-active');
  };
  
  // Fungsi untuk menutup menu
  const closeMenu = () => {
    if (mobileMenu) mobileMenu.classList.remove('open');
    document.body.classList.remove('mobile-menu-active');
  };

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
  });

  // Event listener untuk tombol hamburger dan close
  if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileMenu.classList.contains('open');
        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      });
  }
  if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
  }

  // Menutup menu saat mengklik di luar area menu (area semi-transparan)
  // Ini lebih efektif untuk overlay daripada bottom-sheet
  if (mobileMenu) {
      document.addEventListener('click', function(event) {
          if (mobileMenu.classList.contains('open')) {
              const isClickInsideMenuContent = event.target.closest('.mobile-menu > *');
              if (!isClickInsideMenuContent && !hamburgerBtn.contains(event.target)) {
                  closeMenu();
              }
          }
      });
  }


  // Smooth scroll + close menu saat link di klik
  document.querySelectorAll('#landingpage-container a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      
      closeMenu();

      if (targetId && targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        setTimeout(() => {
          document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }, 300); 
      }
    });
  });
});

