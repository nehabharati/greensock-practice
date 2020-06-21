const tl=gsap.timeline({
    ease:"none",
    scrollTrigger:{
        trigger:'.bcg-parallax',
        start:'top bottom',
        scrub:true
    }
})

tl.add(gsap.from('.content-wrapper', {duration:1,autoAlpha:0}))
tl.add(gsap.from('.bcg', {duration:1,y:'-30%'}))

gsap.registerPlugin(ScrollTrigger) 

function init(){
    gsap.to(".let", {duration: 3,x:-500,opacity:0,ease:'power.in'})
    gsap.to(".trek", {duration: 3,x:500,opacity:0,ease:'power.in'})
    gsap.fromTo(".himalayas", {duration: 3,y:0,opacity:0,ease:'power.out'},{duration: 3,y:-130,opacity:1,delay:2,ease:'power.out'})

    gsap.fromTo(['.column img','.column p'],{delay:1,opacity:0,ease:'power.in'},{delay:1,opacity:1,ease:'power.in'})

    gsap.fromTo(['.column1 img','.column1 p'],{opacity:0, scrollTrigger:{
        trigger:".column",
        start:"top top"
    }},
    {opacity:1, scrollTrigger:{
        trigger:".column",
        start:"top top"
    }}
    )
} 

window.addEventListener('load',function(){
    init()
})