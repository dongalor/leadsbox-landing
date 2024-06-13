(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // slider
    $(".banner__slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
    });

    // header burger menu
    let headerOverlay = document.getElementById("overlay");
    headerOverlay.addEventListener("click", showNavMenu);

    let burger = document.getElementsByClassName("header__burger-icon")[0];
    burger.addEventListener("click", showNavMenu);
    function showNavMenu() {
      let menu = burger.classList;
      let idx = [...menu].findIndex((item) => item === "open");
      let opened = idx !== -1;
      let showClass = "open";

      if (opened) {
        menu.remove(showClass);
        headerOverlay.classList.remove("show");
      } else {
        menu.add(showClass);
        headerOverlay.classList.add("show");
      }
    }

    //  ------------------------- modal -------------------------
    // show modal
    let modalBtn = document.getElementById("modalBtn");
    // let modalBtn1 = document.getElementById("modalBtn1");
    let modalBtn2 = document.getElementById("modalBtn2");
    modalBtn.addEventListener("click", showModal);
    // modalBtn1.addEventListener("click", showModal);
    // modalBtn2.addEventListener("click", showModal);

    function showModal(e) {
      e.preventDefault();
      let modal = document.getElementById("modal");
      let idx = [...modal.classList].findIndex((item) => item === "hide");
      let hidden = idx !== -1;
      let className = "hide";

      if (hidden) {
        modal.classList.remove(className);
      }
    }

    // hide modal
    let modalCloseBtn = document.getElementById("modalCloseBtn");
    let modalCloseOverlay = document.getElementById("modalCloseOverlay");
    modalCloseBtn.addEventListener("click", hideModal);
    modalCloseOverlay.addEventListener("click", hideModal);
    function hideModal() {
      let modal = document.getElementById("modal");
      let className = "hide";
      modal.classList.add(className);
    }
  });
})();
