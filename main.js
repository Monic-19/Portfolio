//starting image 

let simg = document.querySelector(".hero-right img");

    gsap.from(simg , {
        opacity: 0,
        x:299,
    })

//about me section

const $card = document.querySelector('.about-card');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
  
  $card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});

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


    let tl2 = gsap.from(".content h2,.skill h3, .skill li ,.skills-icon", {
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




