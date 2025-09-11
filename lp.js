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
        openMenu();
      });
  }
  if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
  }

  // Menutup menu saat mengklik di luar area menu
  if (mobileMenu) {
      mobileMenu.addEventListener('click', function(event) {
          // Hanya tutup jika yang diklik adalah latar belakang overlay, bukan kontennya
          if (event.target === mobileMenu) {
              closeMenu();
          }
      });
  }

  // Smooth scroll + close menu saat link di klik
  document.querySelectorAll('#landingpage-container a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      
      // Selalu tutup menu saat link di klik
      closeMenu();

      // Lakukan smooth scroll jika target ada di halaman
      if (targetId && targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        
        // Timeout kecil untuk memastikan menu mulai menutup sebelum scroll
        setTimeout(() => {
          document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }, 300); // Waktu disesuaikan dengan transisi menu
      }
    });
  });
});

