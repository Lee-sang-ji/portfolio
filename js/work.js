// 1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// 01 splitting
$(function(){
    Splitting();
})

// 02 scrolla
$(function() {
    $('.animate').scrolla({
       mobile: true,
       once: false 
    });    
       }); 



// clonecoding 가로스크롤
$(function(){
    gsap.registerPlugin(ScrollTrigger);

        //01. x축 스크롤
        let list = gsap.utils.toArray('.clonecoding .list li')
        let listA = gsap.utils.toArray('.clonecoding .list li.a')
        let listB = gsap.utils.toArray('.clonecoding .list li.b')
       
          // 02.scrollTween
          let scrollTween = gsap.to(list, {
            xPercent: -100 * (list.length -1),
            ease: 'none',
            scrollTrigger: {
                trigger:'.clonecoding',
                pin: true,
                scrub:1,
                start: 'center 30%',
                end:'200%', //숫자가 커질수록 속도 느려짐
                // markers:true

            }
        });

        // 03.box 흔들리는 효과
        gsap.to(listA, {
            y:-70,
            rotation:-2,
            scrollTrigger:{
                trigger:'.clonecoding',
                spin: true,
                scrub:1,
                end:'200%'
            }
        });
        gsap.to(listB, {
            y:120,
            rotation:2,
            scrollTrigger:{
                trigger:'.clonecoding',
                spin: true,
                scrub:1,
                end:'200%'
            }
        });
        
});

// contact scroll down
$(function(){
    $('.scroll').on('click', function(){
        var scrollBtn = $('#contact').offset().top; //scroll의 끝나는 지점으로 scroll바 이동
        $('html, body').animate({scrollTop: (scrollBtn)},1000);
    })
});