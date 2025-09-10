document.addEventListener('DOMContentLoaded', function() {

  const landingContainer = document.getElementById('landingpage-container');
  
  // --- [REVISI KUNCI] Pindahkan kontainer dan aktifkan mode landing page ---
  if (landingContainer) {
    // Pindahkan kontainer ke body agar tidak terpengaruh CSS template
    document.body.appendChild(landingContainer);
    // Tambahkan class ke body untuk mengaktifkan CSS khusus landing page
    document.body.classList.add('landing-page-active');
    // Tampilkan kontainer setelah dipindahkan
    landingContainer.style.visibility = 'visible';
  } else {
    console.error('Elemen #landingpage-container tidak ditemukan!');
    return; // Hentikan eksekusi jika kontainer utama tidak ada
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
      hamburgerBtn.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      
      // Toggle display style (lebih baik menggunakan class)
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.style.display = 'block';
      } else {
        mobileMenu.style.display = 'none';
      }
    });
  }

  // --- Fungsi untuk Smooth Scrolling ---
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Cek jika link adalah anchor link
      if (targetId && targetId.startsWith('#')) {
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
      }
    });
  });

});
