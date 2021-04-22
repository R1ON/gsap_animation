import { gsap, TimelineMax , Power2} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './index.css';

gsap.registerPlugin(ScrollTrigger);

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.container',
    start: 'top top',
    end: 'bottom',
    scrub: 1,
    pin: true,
    markers: true,
  },
  repeat: 1
});

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.container',
    start: 'top top',
    end: 'bottom',
    scrub: 1,
    pin: true,
    markers: true,
  },
});

t1.fromTo('.test', {
  scale: 1.5
}, {
  scale: 5
})

t2.fromTo('.test', {
  y: -30,
  x: 0,
}, {
  x: 50,
  y: 0,
  rotation: 10,
  ease: Power2.easeInOut,
}).to('.test', {
  x: 0,
  y: -30,ease: Power2.easeInOut,
  rotation: 0,
}).to('.test', {
  x: -50,
  y: 0,ease: Power2.easeInOut,
  rotation: -10,
}).to('.test', {
  x: 0,
  y: -30,ease: Power2.easeInOut,
  rotation: 0,
});



