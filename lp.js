/* ===============================================================
  KODE JAVASCRIPT LANDING PAGE
  - Buat file baru bernama lp.js di repositori GitHub Anda.
  - Salin semua kode di bawah ini dan tempelkan ke file lp.js.
  - URL file ini akan menjadi: https://admor94.github.io/main/lp.js
  ===============================================================
*/

document.addEventListener('DOMContentLoaded', function() {

  // ===== LANGKAH KRUSIAL: MENGAKTIFKAN MODE LANDING PAGE =====
  // Menambahkan class ke <body> untuk mengisolasi style landing page
  // dari tema utama Blogger.
  document.body.classList.add('landing-page-active');

  /*==================== MENU MOBILE ====================*/
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

  /* Tampilkan Menu */
  if (navToggle) {
    navToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      navMenu.classList.add('show-menu');
      document.body.classList.add('mobile-menu-active');
    });
  }

  /* Sembunyikan Menu dengan Tombol Close */
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      document.body.classList.remove('mobile-menu-active');
    });
  }
  
  /* Sembunyikan menu saat link diklik */
  const navLinks = document.querySelectorAll('.lp-nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (navMenu.classList.contains('show-menu')) {
              navMenu.classList.remove('show-menu');
              document.body.classList.remove('mobile-menu-active');
          }
      });
  });

  /* Sembunyikan menu saat klik di luar area menu */
  document.addEventListener('click', (event) => {
      if (navMenu.classList.contains('show-menu') && !navMenu.contains(event.target) && event.target !== navToggle) {
          navMenu.classList.remove('show-menu');
          document.body.classList.remove('mobile-menu-active');
      }
  });


  /*==================== GANTI BACKGROUND HEADER SAAT SCROLL ====================*/
  function scrollHeader() {
    const header = document.getElementById('lp-header');
    if (this.scrollY >= 50) {
      header.classList.add('lp-header-scrolled');
    } else {
      header.classList.remove('lp-header-scrolled');
    }
  }
  window.addEventListener('scroll', scrollHeader);
  
  /*==================== SMOOTH SCROLL UNTUK NAV-LINK ====================*/
    const internalLinks = document.querySelectorAll('.lp-nav-link[href^="#"], .lp-button-hero[href^="#"]');
    
    internalLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});

