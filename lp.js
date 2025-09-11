/* ===============================================================
  KODE JAVASCRIPT LANDING PAGE
  - Buat file baru bernama lp.js di repositori GitHub Anda.
  - Salin semua kode di bawah ini dan tempelkan ke file lp.js.
  - URL file ini akan menjadi: https://admor94.github.io/main/lp.js
  ===============================================================
*/

document.addEventListener('DOMContentLoaded', function() {

  // ===== LANGKAH KRUSIAL: MENGAKTIFKAN MODE LANDING PAGE =====
  // Menambahkan class ke <body>. Class ini akan memicu aturan
  // di lp.css untuk membuat landing page menutupi layar.
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
      const isClickInsideMenu = navMenu.contains(event.target);
      const isClickOnToggle = navToggle && navToggle.contains(event.target);
      
      if (navMenu && navMenu.classList.contains('show-menu') && !isClickInsideMenu && !isClickOnToggle) {
          navMenu.classList.remove('show-menu');
          document.body.classList.remove('mobile-menu-active');
      }
  });


  /*==================== GANTI BACKGROUND HEADER SAAT SCROLL ====================*/
  function scrollHeader() {
    const header = document.getElementById('lp-header');
    if( !header ) return;
    // Kita targetkan scroll di dalam container landing page, bukan window
    const container = document.getElementById('landingpage-container');
    if (!container) return;

    if (container.scrollTop >= 50) {
      header.classList.add('lp-header-scrolled');
    } else {
      header.classList.remove('lp-header-scrolled');
    }
  }
  // Event listener sekarang dipasang di container landing page
  const container = document.getElementById('landingpage-container');
  if (container) {
    container.addEventListener('scroll', scrollHeader);
  }
  
  /*==================== SMOOTH SCROLL UNTUK NAV-LINK ====================*/
    const internalLinks = document.querySelectorAll('.lp-nav-link[href^="#"], .lp-button-hero[href^="#"]');
    
    internalLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // Pastikan kita mencari elemen di dalam landing page container
            const targetElement = document.querySelector('#landingpage-container ' + targetId);
            const container = document.getElementById('landingpage-container');

            if (targetElement && container) {
                const headerOffset = 80; 
                // Kalkulasi posisi scroll relatif terhadap container
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

