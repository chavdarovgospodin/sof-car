// Main Application Entry Point
(function ($) {
  'use strict';

  // Main App Class
  class MainApp {
    constructor() {
      this.$window = $(window);
      this.$body = $('body');
      this.components = {};
      this.init();
    }

    init() {
      // Remove preload class after page load
      this.$window.on('load', () => {
        setTimeout(() => {
          this.$body.removeClass('is-preload');
        }, 100);
      });

      // Initialize components
      this.initializeComponents();

      // Initialize scrolly
      this.initializeScrolly();
    }

    initializeComponents() {
      // Initialize Header Component
      if (typeof HeaderComponent !== 'undefined') {
        this.components.header = new HeaderComponent();
      }

      // Initialize Footer Component
      if (typeof FooterComponent !== 'undefined') {
        this.components.footer = new FooterComponent();
      }

      // Initialize Carousel Component (only on pages with carousel)
      if (
        typeof CarouselComponent !== 'undefined' &&
        document.getElementById('carouselExampleIndicators')
      ) {
        this.components.carousel = new CarouselComponent();
      }

      // Initialize Forms Component
      if (typeof FormsComponent !== 'undefined') {
        this.components.forms = new FormsComponent();
      }
    }

    initializeScrolly() {
      // Initialize scrolly for smooth scrolling
      if ($.fn.scrolly) {
        $('.scrolly').scrolly();
      }
    }
  }

  // Initialize main app when DOM is ready
  $(document).ready(() => {
    window.mainApp = new MainApp();
  });
})(jQuery);
