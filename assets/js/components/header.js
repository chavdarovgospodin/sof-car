// Header Component
class HeaderComponent {
  constructor() {
    this.header = document.getElementById('header');
    this.menu = document.getElementById('menu');
    this.body = document.body;
    this.init();
  }

  init() {
    this.setupMenu();
    this.setupScrollEffects();
    this.setupMobileNav();
  }

  setupMenu() {
    if (!this.menu) return;

    this.menu.wrapInner('<div class="inner"></div>');
    this.menu._locked = false;

    this.menu._lock = () => {
      if (this.menu._locked) return false;
      this.menu._locked = true;
      window.setTimeout(() => {
        this.menu._locked = false;
      }, 350);
      return true;
    };

    this.menu._show = () => {
      if (this.menu._lock()) {
        this.body.addClass('is-menu-visible');
      }
    };

    this.menu._hide = () => {
      if (this.menu._lock()) {
        this.body.removeClass('is-menu-visible');
      }
    };

    // Menu toggle
    $('.menu-toggle').on('click', (e) => {
      e.preventDefault();
      this.menu._show();
    });

    // Close menu on click outside
    $(document).on('click', (e) => {
      if (e.target.closest('#menu') || e.target.closest('.menu-toggle')) return;
      this.menu._hide();
    });

    // Close menu on escape key
    $(document).on('keydown', (e) => {
      if (e.keyCode === 27) this.menu._hide();
    });
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
