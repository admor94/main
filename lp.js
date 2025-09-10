/* ==================================================================================
  FILE: lp.js (Versi 2 - Perbaikan Logika Toggle)
  TUJUAN: Fungsionalitas untuk landing page, seperti menu mobile.
  IMPLEMENTASI: Unggah konten file ini ke https://admor94.github.io/main/lp.js
  ==================================================================================
*/

document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const body = document.body;

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function(event) {
      // Mencegah event klik menyebar ke elemen lain
      event.stopPropagation();
      
      // Toggle class 'active' pada tombol dan menu
      navbarToggler.classList.toggle('active');
      navbarCollapse.classList.toggle('active');
      
      // Mencegah body scroll saat menu mobile terbuka
      if (navbarCollapse.classList.contains('active')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });
  }
});

