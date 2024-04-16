var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px"
    crsr.style.top= dets.y+"px"
    blur.style.left= dets.x-150+"px"
    blur.style.top= dets.y-150+"px"
})

gsap.to(".nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"70px",
    scrollTrigger:{
        trigger:".nav",
        scroll:"body", 
        start:"top -10%", 
        end:"top -11%",
        scrub:2
    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2

    }
})