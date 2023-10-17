// 1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// contact scroll down
$(function(){
    $('.scroll').on('click', function(){
        var scrollBtn = $('#contact').offset().top; //scroll의 끝나는 지점으로 scroll바 이동
        $('html, body').animate({scrollTop: (scrollBtn)},700);
    })
});

// splitting
$(function(){
    Splitting();
})

// scrolla
$(function() {
    $('.animate').scrolla({
       mobile: true,
       once: false 
    });    
       }); 



$(function(){
// section_siteIntro
gsap.registerPlugin(ScrollTrigger);
        

// 01. siteIntro
gsap.timeline({
    scrollTrigger: {
        trigger:'.siteIntro .imgBox',
        start:'60% 50%',
        end: '150%',
        scrub:1,
        pin:true,
        // markers: true
    }
})

.fromTo('.siteIntro .imgBox img', {transform:'rotateY(-40deg) rotateX(50deg)', width:'50%', opacity:'0.2'},
{transform: 'rotateY(0deg) rotateX(0deg)', width:'100%', opacity:'1'},0)


 // 01. circle
 gsap.timeline({
    scrollTrigger:{
        trigger:'.bg',
        start:'0% 50%',
        end:'30% 0%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.circle', {'width':'0','height':'0','top':'0%','duration':'10','ease':'elastic'},{'width':'2500px','height':'1000px','top':'5%','duration':'10','ease':'none'},0)


});

// ideasketch simplyScroll
$(function() {
    $("#scroller").simplyScroll();
    $("#scroller2").simplyScroll({direction:'backwards'});
});
    

