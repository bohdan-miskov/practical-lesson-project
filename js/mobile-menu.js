(() => {
  const refs = {
    // Додати атрибут data-mobileMenu-open на кнопку відкриття
    openMobileMenuBtn: document.querySelector("[data-mobileMenu-open]"),
    // Додати атрибут data-mobileMenu-close на кнопку закриття
    closeMobileMenuBtn: document.querySelector("[data-mobileMenu-close]"),

    mobileMenuLinks: document.querySelectorAll(".mobile-menu-nav-link"),

    mobileMenuBtns: document.querySelectorAll(".mobile-menu-btn-sign"),
    // Додати атрибут data-mobileMenu на бекдроп
    mobileMenu: document.querySelector("[data-mobileMenu]"),
  };

  refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);

  refs.mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", toggleMobileMenu);
  });

  refs.mobileMenuBtns.forEach((btn) => {
    btn.addEventListener("click", toggleMobileMenu);
  });

  function toggleMobileMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.mobileMenu.classList.toggle("is-open");
  }
})();
