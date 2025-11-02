var tl =gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 90%",
    end:"70% 50%",
    scrub:true,
    // markers:true,
}})

tl.to("#fanta",{
    top:"120%",
    left:"8%"
},'orange')
tl.to("#cut-orange",{
    top:"155%",
    left:"20%"
},'orange')
tl.to("#orange",{
    width:"20vw",
    top:"162%",
    left:"75%"
},'orange')
tl.to("#leaf",{
    rotate:"150deg",
    top:"115%",
    left:"83%"
},'orange')
tl.to("#leaf4",{
    rotate:"60deg",
    top:"158%",
    left:"3%"
},'orange')
tl.to("#leaf2",{
    rotate:"7deg",
    top:"140%",
    left:"25%"
},'orange')


var tl2 =gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 90%",
    end:"20% 30%",
    scrub:true,
    // markers:true,
}})

tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-100%",
    top:"85%"
},'ca')
tl2.from("#sprite",{
    rotate:"-90deg",
    left:"-100%",
    top:"90%"
},'ca')

tl2.from(".lemon2",{
    rotate:"-90deg",
    right:"-100%",
    top:"85%"
},'ca')

tl2.from("#coca-cola",{
    rotate:"90deg",
    right:"-100%",
    top:"90%"
},'ca')

tl2.to("#cut-orange",{
    width:"36vw",
    top:"187%",
    left:"33%"
},'ca')

tl2.to("#fanta",{
    width:"31vw",
    left:"35%",
    top:"213%",
    height:"59vh"
},'ca')