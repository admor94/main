document.addEventListener('DOMContentLoaded', function() {

  const landingContainer = document.getElementById('landingpage-container');
  
  // --- [REVISI KUNCI] Pindahkan kontainer dan aktifkan mode landing page ---
  if (landingContainer) {
    document.body.appendChild(landingContainer);
    document.body.classList.add('landing-page-active');
    landingContainer.style.visibility = 'visible';
  } else {
    console.error('Elemen #landingpage-container tidak ditemukan!');
    return; 
  }

  // --- Fungsi untuk Navbar Scroll ---
  const navbar = document.getElementById('landing-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // --- Fungsi untuk Mobile Menu Toggle ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpened = hamburgerBtn.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      
      if (isOpened) {
        mobileMenu.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Mencegah scroll body saat menu terbuka
      } else {
        mobileMenu.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // --- Fungsi untuk Smooth Scrolling & Menutup Menu Mobile ---
  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId && targetId.length > 1) { // Pastikan bukan hanya '#'
        e.preventDefault();
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }

      // Menutup mobile menu jika terbuka setelah link diklik
      if (mobileMenu && mobileMenu.classList.contains('open')) {
         hamburgerBtn.classList.remove('open');
         mobileMenu.classList.remove('open');
         mobileMenu.style.display = 'none';
         document.body.style.overflow = '';
      }
    });
  });

});

