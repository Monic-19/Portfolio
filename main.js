// Skills Section
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".skills",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true,
        // markers :true,

    }
});

tl3
    .to(".top", {
        top: "-50%"
    }, 'a')

    .to(".bottom", {
        bottom: "-50%",
    }, 'a')

    .to(".top h1", {
        top: "80%"
    }, 'a')

    .to(".bottom h1", {
        bottom: "-18%",
        color: "white",
    }, 'a')

    .to(".bottom", {
        height: "0"
    })

    .to(".swiper", {
        delay : .5,
        zIndex: "1",
    },'a')

    //cube


var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,

    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

    // pagination: {
    //     el: ".swiper-pagination",
    // },
});

    // let tl2 = gsap.from(".content h5,.content h2, .content h3", {
    //     opacity: 0,
    //     stagger: 1,
    //     x: -100,
    //     scrollTrigger: {
    //         trigger: ".content",
    //         scroller: 'body',
    //         // markers: true,
    //         start: "65% 50%",
    //         toggleActions: "restart none none reverse"
    //     }
    // })


    //about

 