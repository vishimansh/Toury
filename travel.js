
gsap.from("#navp1 h4,#navp2 h4,#navp3 button,#navp3 i",{

y:200,
opacity:0,
duration:0.4,
delay:0.4,
stagger:0.3
})
gsap.from("#page1 h1,#page1 p,#div button",{

    y:200,
    opacity:0,
    duration:0.6,
    delay:1,
    stagger:0.4   
})
gsap.from("#page2 h2",{
x:-50,
opacity:0,
delay:0.3,
duration:0.8,
scrollTrigger:{
trigger:"#page2 h2",
scroller:"body",

start:"top 60%"
}

})
    gsap.from("#images",{
        x:500,
        opacity:0,
        delay:0.5,
        duration:1.2,
        scrollTrigger:{
            trigger:"#page2 h2",
            scroller:"body",
           
            start:"top 60%"}
        })
gsap.from("#mini1 h4,#mini2 h4,#mini3 h4,#mini4 h4,#mini5 h4,#mini6 h4",{
y:50,
opacity:0,
delay:0.5,
duration:1.5,
scrollTrigger:{
    trigger:"#page2 h2",
    scroller:"body",
   
    start:"top 20%"}
})  
gsap.from("#mini1 h3,#mini2 h3,#mini3 h3,#mini4 h3,#mini5 h3,#mini6 h3",{
    y:50,
    opacity:0,
    delay:0.5,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
    
        start:"top 20%"}
    
    }) 
    gsap.from("#page3 h2",{
    y:50,
    opacity:0,
    duration:0.6,
    delay:0.25,
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller:"body",
        
        start:"top 20%"
    }})
   gsap.from("#bada1,#bada2,#bada3",{
    y:50,
    opacity:0,
    duration:0.6,
    delay:0.25,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#bada1,#bada2,#bada3",
        scroller:"body",
        
        start:"top 60%"
    }
   })
   gsap.from("#about1,#about2,#video",{
    y:50,
    opacity:0,
    duration:0.6,
    delay:0.25,
    scrollTrigger:{
        trigger:"#about1,#about2,#video",
        scroller:"body",
        
        start:"top 65%"
    }})
    gsap.from("#five1",{
        x:-100,
        opacity:0,
        duration:0.6,
        delay:0.25,
        scrollTrigger:{
            trigger:"#five1",
            scroller:"body",
            
            start:"top 65%"
        }})
        gsap.from("#five2",{
            x:300,
            opacity:0,
            duration:0.7,
            delay:0.35,
            scrollTrigger:{
                trigger:"#five2",
                scroller:"body",
                start:"top 50%"
            }})
            gsap.from("#indo1,#indo2,#indo3",{
                y:100,
                opacity:0,
                duration:0.7,
                delay:0.35,
                stagger:0.3,
                scrollTrigger:{
                    trigger:"#indo1,#indo2,#indo3",
                    scroller:"body",

                    start:"top 70%"
                }})
                gsap.from("#maalik",{
                    y:100,
                    opacity:0,
                    duration:0.7,
                    delay:0.35,
                    stagger:0.3,
                    scrollTrigger:{
                        trigger:"#maalik",
                        scroller:"body",
    
                        start:"top 60%"
                    }})