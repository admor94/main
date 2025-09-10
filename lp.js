/*
  ===================================================================
  KODE JAVASCRIPT UNTUK HALAMAN STATIS BLOGGER
  Tempel kode ini di dalam tag <script>...</script> setelah CSS.
  ===================================================================
*/
document.addEventListener('DOMContentLoaded', function() {
    
    // Fungsionalitas untuk Navbar saat scroll
    const navbar = document.querySelector('#landingpage-edukrein .navbar-landing');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Fungsionalitas untuk Accordion FAQ
    const landingPageWrapper = document.querySelector('#landingpage-edukrein .lp-digital-product');
    if (landingPageWrapper) {
        const faqItems = landingPageWrapper.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Tutup semua item FAQ lainnya
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                // Buka item yang diklik jika sebelumnya tidak aktif
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
    
    // Menampilkan halaman setelah semua siap untuk menghindari FOUC (Flash of Unstyled Content)
    const landingPageContainer = document.getElementById('landingpage-edukrein');
    if (landingPageContainer) {
        landingPageContainer.style.visibility = 'visible';
    }
});

