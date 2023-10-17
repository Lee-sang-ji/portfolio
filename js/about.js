// 1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// 02 splitting
$(function(){
    Splitting();
})

// 03 scrolla
$(function() {
    $('.animate').scrolla({
       mobile: true,
       once: false 
    });    
       }); 

// fix
/* $(window).on('scroll resize', function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    // alert(scrollPos); alert은 경고창으로 변수의 값을 확인할 때 사용

    fixHeader();
    fixList();       //함수는 자율적으로 변경 가능
    fix();

    function fix(){
        if(scrollPos > 1250){$('.rightBox ').addClass('on');}
        else {$('.rightBox ').removeClass('on');}
        if(scrollPos > 2700){$('.rightBox').removeClass('on');}
    }
})
*/

// contact scroll down
$(function(){
    $('.scroll').on('click', function(){
        var scrollBtn = $('#contact').offset().top; //scroll의 끝나는 지점으로 scroll바 이동
        $('html, body').animate({scrollTop: (scrollBtn)},1000);
    })
});






$(function(){
    gsap.registerPlugin(ScrollTrigger);

        // imgBox
        let upBox = document.querySelectorAll('.upBox')

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger:'.visual2',
                pin:true,
                scrub:3,
                start:'top top',
                end:'+=350%', //시작부분에서 400%까지 스크롤 한 후 종료 (조절해가며 사용)
                // markers:true
            }
        })
        tl.from(upBox,{'y':'300%','duration':'3', 'ease':'none','stagger':'4'})
        tl.to(upBox), {'y':'0'}

       

});

// section_interesting 가로스크롤
$(function(){
    gsap.registerPlugin(ScrollTrigger);

        //01. x축 스크롤
        let list = gsap.utils.toArray('.interesting .list li')
        let listA = gsap.utils.toArray('.interesting .list li.a')
        let listB = gsap.utils.toArray('.interesting .list li.b')
       
          // 02.scrollTween
          let scrollTween = gsap.to(list, {
            xPercent: -100 * (list.length -1),
            ease: 'none',
            scrollTrigger: {
                trigger:'.interesting',
                pin: true,
                scrub:1,
                start: 'center center',
                end:'200%', //숫자가 커질수록 속도 느려짐
                // markers:true

            }
        });

        // 03.box 흔들리는 효과
        gsap.to(listA, {
            y:30,
            rotation:-10,
            scrollTrigger:{
                trigger:'.interesting',
                spin: true,
                scrub:1,
                end:'200%'
            }
        });
        gsap.to(listB, {
            y:-30,
            rotation:10,
            scrollTrigger:{
                trigger:'.interesting',
                spin: true,
                scrub:1,
                end:'200%'
            }
        });
    });

