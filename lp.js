/*
  ===================================================================
  KERANGKA JAVASCRIPT - Simpan file ini sebagai lp.js dan unggah ke GitHub.
  ===================================================================
*/
document.addEventListener('DOMContentLoaded', function() {
    
    const landingPageContainer = document.getElementById('landingpage-edukrein');
    if (!landingPageContainer) return;

    // --- Fungsionalitas Navbar saat di-scroll ---
    const navbar = landingPageContainer.querySelector('.navbar-landing');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // --- Fungsionalitas untuk Accordion FAQ ---
    const faqItems = landingPageContainer.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Tutup semua item FAQ lain
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                // Buka item yang diklik jika sebelumnya tidak aktif
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

});

