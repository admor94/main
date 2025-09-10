/* ==================================================================================
  FILE: lp.js
  TUJUAN: Fungsionalitas untuk landing page, seperti menu mobile.
  IMPLEMENTASI: Unggah konten file ini ke https://admor94.github.io/main/lp.js
  ==================================================================================
*/

document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      // Toggle class 'active' untuk menampilkan atau menyembunyikan menu
      navbarCollapse.classList.toggle('active');
    });
  }
});

