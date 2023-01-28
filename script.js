
 //nav text animation
document.querySelectorAll(" #nav span").forEach(function(elm){
    var clutter="";


elm.textContent.split("").forEach(function(elem){
    clutter +=`<span>${elem}</span>`
})
elm.innerHTML = clutter;

})

document.querySelectorAll(" #nav span").forEach(function(allh1){
    gsap.to(allh1.children,{
        // scrollTrigger:{
        //     trigger:harh1,
        //     start:"top 50%",
        //     markers:true,
            
        // },
        y:-30,
        duration:1,
        stagger:.05,
        opacity:1,
        delay:2,
        ease:"Expo.easeInOut"
    })
})


//video cursor
document.addEventListener("mousemove", function(dets){
    // document.querySelector("#container").style.left = `${(dets.x*0.25)}px`
    // document.querySelector("#container").style.top = `${dets.y*0.25}px`
    document.querySelector("#container").style.transform = `translate(${(dets.x)*0.2}px, ${(dets.y)*0.2}px)`;

})


//circle rotate
document.querySelectorAll(".class").forEach(function(elem){
    elem.addEventListener("click",function(){
        this.style.transform = "rotateX(1440deg)";
    })
})

document.querySelectorAll(".class").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        // document.querySelector("#cursor").style.width="5px"
        // document.querySelector("#cursor").style.height="5px"
        gsap.to("#cursor",{
            scale:0.4
        })

    })
    elem.addEventListener("mouseleave",function(){
        // document.querySelector("#cursor").style.width="5px"
        // document.querySelector("#cursor").style.height="5px"
        gsap.to("#cursor",{
            scale:1
        })

    })
})


///cursor code
document.addEventListener("mousemove" ,function (dets){
    document.querySelector("#cursor").style.left=`${(dets.x)}px`
    document.querySelector("#cursor").style.top=`${(dets.y)}px`
})

//for toggle circle///
document.querySelector(".toggle").addEventListener("mouseenter",function(){
    document.querySelector("#cursor").style.backgroundColor="transparent";
    document.querySelector("#cursor").style.width="50px";
    document.querySelector("#cursor").style.height="50px";
    document.querySelector("#cursor").style.border="1px solid #fff";
    

})
document.querySelector(".toggle").addEventListener("mouseleave",function(){
    document.querySelector("#cursor").style.backgroundColor="#fff";
    document.querySelector("#cursor").style.width="20px";
    document.querySelector("#cursor").style.height="20px";
    document.querySelector("#cursor").style.border="none";
    

})

///toggle
var circle=document.querySelector("#circ");
var main=document.querySelector("#scrollpage")
var flag=0;
circle.addEventListener("click",function(){
    if(flag===0){
        // main.style.backgroundColor="black"
        circle.style.left="55%"
        document.documentElement.style.setProperty("--pri", "#000")
        document.documentElement.style.setProperty("--sec", "#fff")
        document.documentElement.style.setProperty("--shw", "#cccccc")
        flag=1;
    }
    else{
        // main.style.backgroundColor="white"
        circle.style.left="4%"
        document.documentElement.style.setProperty("--pri", "#fff")
        document.documentElement.style.setProperty("--sec", "#000")
        document.documentElement.style.setProperty("--shw", "#1f1f1f")
        flag=0;
    }

})
//random images
var images = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf17f2d6b85_Hero-Gif-22-p-800.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db1d1d2d6ba2_Hero-Gif-36.jpg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db13a32d6b88_Hero-Gif-33-p-1080.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db01f32d6b72_Hero-Gif-29.jpg"];
setInterval(function(){
    var random = Math.floor(Math.random()*4)
    document.querySelector("#page1 #one").src=images[random];
    console.log(random);
},4000) 

var arr = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db52a22d6b6e_Hero-Gif-15-p-1080.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db22722d6b81_Hero-Gif-24-p-1080.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db2bd12d6b83_Hero-Gif-25.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbbff42d6ba5_Hero-Gif-39.jpg"]
setTimeout(function(){
    setInterval(function(){
        // var random1 = Math.floor(Math.random()*4)
        document.querySelector("#page1 #two").src=arr[Math.floor(Math.random()*4)];
        // console.log(random1);
    },4000) 

},1000)
var arr1 = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db5b892d6b6a_Hero-Gif-6.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbbc112d6ba0_Hero-Gif-34-p-500.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db662c2d6b74_Hero-Gif-31.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db65f72d6b82_Hero-Gif-26-p-1080.jpeg"]
setTimeout(function(){
    setInterval(function(){
        // var random1 = Math.floor(Math.random()*4)
        document.querySelector("#page1 #three").src=arr1[Math.floor(Math.random()*4)];
        // console.log(random1);
    },4000) 

},2000)
var arr2 = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db65ff2d6b8e_WILBURTON-EXTERIOR-FINAL-p-500.jpeg", "https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db37082d6ba3_Hero-Gif-37.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbdfe62d6b76_Hero-Gif-8-p-500.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf6432d6b75_Hero-Gif-9-p-800.jpeg"]
setTimeout(function(){
    setInterval(function(){
        // var random1 = Math.floor(Math.random()*4)
        document.querySelector("#page1 #four").src=arr2[Math.floor(Math.random()*4)];
        // console.log(random1);
    },4000) 

},3000)

gsap.to("#circleline",{
    scrollTrigger:{
        trigger:"#page3",
        start:"top 100%", 
        end:"bottom 0%",
        scrub:2,
        // pin:true, 
        // markers:true
    },
    x:-600,
    ease: Linear,
    // duration:2
})
// #for loder
// var tl = gsap.timeline();
gsap.to("#loder",{
    height:"0%",
    duration:2,
    ease: "Expo.easeInOut"
})
gsap.from(" #page5-1  p",{
    scrollTrigger:{
        trigger:"#page5-1  p",
        start:"top 90%",
        // markers:true,
        scale:2
       
    },
    y:50,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:2
   

})

gsap.from(" #page5-1  h2",{
    scrollTrigger:{
        trigger:"#page5-1  h2",
        start:"top 90%",
        // markers:true
       
    },
    y:50,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:2


})



gsap.to("#page6",{
    scrollTrigger:{
        trigger:"#page6",
        start: "top 0%",
        scrub: 2,
        pin:true,
        // markers:true
    }
})
gsap.to(".same",{
    scrollTrigger:{
        trigger:"#page6",
        start: "top 0%",
        scrub: 2,
        pin:true
    },
    y:"-100%",
    stagger:0.5
})
document.querySelectorAll("#pagefix h1").forEach(function(elem){
    gsap.from(elem,{
        rotateX:"-92deg",
        skewX:"3deg",
        skewY:"-12deg",
        duration:2,
        delay:2,
        opacity:0


    })
   
})
gsap.from("#one",{
    duration:2,
    scale:0,
    opacity:0
},"-=2")
gsap.from("#two",{
    duration:2,
    scale:0,
    opacity:0
},"-=2")
gsap.from("#three",{
    duration:2,
    scale:0,
    opacity:0
},"-=2")
gsap.from("#four",{
    duration:2,
    scale:0, 
    opacity:0
},"-=2")


    gsap.from("#page3 h1",{
        scrollTrigger:{
            trigger:"#page3  h1",
            start:"top 50%",
            // markers:true



    },
    rotateX:"-92deg",
    skewX:"2deg",
    skewY:"-12deg",
    duration:1,
    // delay:2,
    opacity:0
})
gsap.to("#page4 h1:nth-child(2)",{
    scrollTrigger:{
        trigger:"#page4 h1",
        start:"top 70%",
        scrub:2,
        // markers:true
    },
    x:200,
    // rotateX:"-90deg",
    // skewX:"2deg",
    // skewY:"-30deg",
    // duration:2,
    // opacity:0



})
gsap.to("#page4 h1:nth-child(3)",{
    scrollTrigger:{
        trigger:"#page4 h1",
        start:"top 50%",
        scrub:2,
        // markers:true
    },
    x:-100
})
gsap.to("#page4 h1:nth-child(4)",{
    scrollTrigger:{
        trigger:"#page4 h1",
        start:"top 50%",
        scrub:2,
        // markers:true
    },
    x:250
})
gsap.from("#page5-2  h1",{
    scrollTrigger:{
        trigger:"#page5-2  h1",
        start:"top 100%",
        // markers:true
       
    },
    rotateX:"-92deg",
    skewX:"3deg",
    skewY:"-12deg",
    duration:2,
    // delay:2,
    opacity:0,
    stagger:0.5
    
})
gsap.from("#page5-2  h2",{
    scrollTrigger:{
        trigger:"#page5-2  h2",
        start:"top 100%",
        // markers:true
       
    },
    rotateX:"-92deg",
    skewX:"3deg",
    skewY:"-12deg",
    duration:2,
    // delay:2,
    opacity:0,
    stagger:0.5
    
})

gsap.to("#scroll-image #lineab1",{
    scrollTrigger:{
        trigger:"#scroll-image #lineab1",
        start:"top 100%",
        scrub:2,
        // markers:true
    },
    // x:200,
    left:"30%",

})
gsap.to("#scroll-image #lineab2",{
    scrollTrigger:{
        trigger:"#scroll-image #lineab2",
        start:"top 100%",
        scrub:2,
        // markers:true
    },
    left:"70%",

})
