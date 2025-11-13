  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
         1399: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
      },
    });

const navbarToggler = document.querySelector(".navbar-toggler");
console.log(navbarToggler);
let open = false;
navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("active");
});