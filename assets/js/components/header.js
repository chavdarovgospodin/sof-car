// Header Component
class HeaderComponent {
  constructor() {
    this.header = document.getElementById('header');
    this.init();
  }

  init() {
    this.setupScrollEffects();
    this.setupMobileNav();
  }

  setupScrollEffects() {
    if (!this.header) return;

    const headerScrolled = () => {
      if (window.scrollY > 100) {
        this.header.classList.add('header-scrolled');
      } else {
        this.header.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('load', headerScrolled);
    window.addEventListener('scroll', headerScrolled);
  }

  setupMobileNav() {
    // Mobile navigation dropdowns
    $(document).on('click', '.navbar .dropdown > a', function (e) {
      if (
        document.getElementById('navbar')?.classList.contains('navbar-mobile')
      ) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('dropdown-active');
      }
    });
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HeaderComponent;
}
