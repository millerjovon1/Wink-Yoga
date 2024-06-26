document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenuContainer = document.querySelector('.nav-menu-container');

  if (navToggle && navMenuContainer) {
      navToggle.addEventListener('click', () => {
          navMenuContainer.classList.toggle('active');
      });

      // Close menu when clicking outside of it
      document.addEventListener('click', (event) => {
          if (!navMenuContainer.contains(event.target) && !navToggle.contains(event.target)) {
              navMenuContainer.classList.remove('active');
          }
      });
  }
});
