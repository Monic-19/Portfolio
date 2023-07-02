//starting image 

let simg = document.querySelector(".hero-right img");

    gsap.from(simg , {
        opacity: 0,
        x:299,
    })

//about me section

let a1= gsap.from(".about-left" ,{
    opacity :0,
    x:-600,
    duration :1,
    scrollTrigger:{
        // markers:true,
        trigger: ".about-left",
        scroller : "body",
        start : "25% 50%",
        toggleActions: "restart none none reverse"
    }
})

let a2= gsap.from(".about-right" ,{
    opacity :0,
    x:600,
    duration :1,
    scrollTrigger:{
        // markers:true,
        trigger: ".about-right",
        scroller : "body",
        start : "25% 50%",
        toggleActions: "restart none none reverse"
    }
})

// Skills Section
var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".skills",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true,
        // markers :true,

    }
});

tl1
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
        delay : "2",
        zIndex: "1",
    },'a')


    let tl2 = gsap.from(".content h2,.skill h3, .skill li", {
        opacity: 0,
        stagger: .31,
        x: -100,
        scrollTrigger: {
            trigger: ".content",
            scroller: 'body',
            // markers: true,
            start: "85% 50%",
            toggleActions: "restart none none reverse"
        }
    })


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



//contact

let c1= gsap.from(".contact , .footer-icons " ,{
    opacity :0,
    duration :2,
    stagger:1,
    scrollTrigger:{
        // markers:true,
        trigger: ".contact ,.footer-icons",
        scroller : "body",
        start : "15% 50%",
        toggleActions: "restart none none reverse"
    }
})


