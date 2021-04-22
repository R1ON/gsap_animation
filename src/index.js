import { gsap, TimelineMax , Power2} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './index.css';

gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.all-scene',
    start: 'top top',
    end: 'bottom',
    scrub: true,
    pin: true,
  },
});

t1.set('.first-part', {
  y: '-200%'
}).set('.left', {
  x: '-100%'
})
.to('.first-part', {
  y: '0',
  duration: 1
}).to('.left', {
  x: '100%',
}, '-=1')

const t2 = gsap.timeline({
  repeat: -1,
});

t2.to('.oblaka', {

  x: 25,
  ease: Power2.easeInOut
  })
  .to('.oblaka', {
    x: 0,
    ease: Power2.easeInOut
  })
  .to('.oblaka', {
  x: -25,
  ease: Power2.easeInOut
})
  .to('.oblaka', {
  x: 0,
  ease: Power2.easeInOut
})
  // .to('.oblaka', {
  //   x: 90,
  //   ease: Power2.easeInOut
  // })
  // .to('.oblaka', {
  //   x: -30,
  //   ease: Power2.easeInOut
  // })

const scrollHandler = () => {
  if (window.scrollY > 100) {
    document.body.className = 'body-background-bottom';
  }
  else {
    document.body.className = 'body-background-top';
  }
};

document.addEventListener('scroll', scrollHandler);


