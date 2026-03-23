var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        start: "0% 95%",
        end: "80% 80%",
        scrub: true,
    }
});
tl.to("#img",{
    top:"43vw",
    left:"55vw",
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".links",
        start: "0% 95%",
        end: "80% 80%",
        scrub: true,
    }
});
tl.to("#img",{
    top:"70vw",
    left:"30vw",
})
var typed = new Typed('.multiple-text', {
        strings: ['<i>Frondend</i>','Frontend Developer.'],
        typeSpeed: 80,
        backSpeed:80,
        backDelay:1200,
        loop: true,
    });
var typed = new Typed('.text', {
        strings: ['<i>Project</i>','Click on the icone.'],
        typeSpeed: 80,
        backSpeed:80,
        backDelay:1200,
        loop: true,
    });