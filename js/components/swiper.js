$(window).load(function(){
    // Swiper Clients
    var swiper = new Swiper('.swiper-clients', {
        slidesPerView: 6,
        spaceBetween: 50,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 5,
                spaceBetween: 50
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        }
    });

    // Swiper Clients
    var swiper = new Swiper('.swiper-testimonials', {
        speed: 1000,
        autoplay: 10000,
        slidesPerView: 1,
        loop: true,
    });
});