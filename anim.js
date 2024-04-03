gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.text-fill-animation .elementor-widget-container > div > div');

splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars,words' });

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: '.text-clip-path-animation',
            endTrigger: char,
            start: 'bottom center',
            end: 'bottom-=30% center',
            scrub: true,
            //                 markers: true,
        },
        opacity: 0.2,
        stagger: 0.1
    })
})

gsap.set('.image-scale-animation', { scale: 0.5, opacity: 0 });

gsap.timeline({
    id: 'block-yellow',
    scrollTrigger: {
        trigger: '.section-one-animation',
        endTrigger: '.image-scale-animation',
        start: "top top+=125px", // Adjust these values as needed
        end: "bottom top+=125px",
        scrub: true,
        pin: '.section-one-animation',
        markers: true,
    }
}).to('.image-scale-animation', {
    scale: 1,
    opacity: 1,
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

console.log('anim working');