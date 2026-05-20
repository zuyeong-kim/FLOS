const heroSwiper = new Swiper(".heroSwiper", {

    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

const collectionSwiper = new Swiper(".collectionSwiper", {

    slidesPerView: "auto",

    spaceBetween: 32,

    grabCursor: true,

});