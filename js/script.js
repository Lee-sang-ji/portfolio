// 스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
}); 

// contact scroll down
$(function(){
    $('.scroll').on('click', function(){
        var scrollBtn = $('#contact').offset().top; //scroll의 끝나는 지점으로 scroll바 이동
        $('html, body').animate({scrollTop: (scrollBtn)},1000);
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

      
// section_intro 
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger:{
            trigger:'.intro',
            start:'top',
            end:'bottom top',
            scrub:1,
            pin:true,
            // markers:true
        }
    })
    
    .to('.intro .flow-container', {'opacity':'1','ease':'none','duration':'10'},5)
    .to('.intro .videoWrap video', {'scale':'0.7','ease':'none','duration':'15','opacity':'0.3'},5)

});


//section_slogan mask text
$(function(){
     
     const container = document.querySelector('.container')

     document.body.addEventListener('mousemove', e => {
         const x = e.clientX;
         const y = e.clientY;

         gsap.to(container, {
             y: y
         });
         gsap.to('.mask', {
             y: -y

          })

       })
});

// section_strength svgAni
// svg path길이 구하기
$(function(){
    $('.svgAni').find('path').each(function(i, path){
        var length = path.getTotalLength();
        // alert(length);  
    });
});

$(function(){

    //.works .clonecoding h3 animation
    gsap.timeline({
        scrollTrigger:{
            trigger:'.works .clonecoding',
            start:'0% 100%',
            end:'0% 30%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.works .clonecoding > .txtBox', {x:'-100%'}, {x:'0%', ease:'none', duration:'5'},0)

    //.clonecoding .workList animation
    gsap.timeline({
        scrollTrigger:{
            trigger:'.works .clonecoding .workList',
            start:'0% 50%',
            end:'0% 100%',
            scrub:1,
            // markers:true
        }
    })
    .to('.works .clonecoding > .txtBox', {position:'fixed', left:'0', top:'0', ease:'none', duration:5},0)
    .to('.works .clonecoding', {marginTop:'300px', position:'relative', zIndex:'10', duration:'1'},0)


    gsap.timeline({
        scrollTrigger:{
            trigger:'.works .clonecoding .workList',
            start:'80% 50%',
            end:'80% 0%',
            scrub:1,
            // markers:true
        }
    })
    .to('.works .clonecoding > .txtBox', {x:'-100%', ease:'none', duration:'5'},0)

});


// ncs 가로스크롤
$(function(){
    gsap.registerPlugin(ScrollTrigger);

        //01. x축 스크롤
        let list = gsap.utils.toArray('.ncs .list li')
        let listA = gsap.utils.toArray('.ncs .list li.a')
        let listB = gsap.utils.toArray('.ncs .list li.b')
       
          // 02.scrollTween
          let scrollTween = gsap.to(list, {
            xPercent: -100 * (list.length -1),
            ease: 'none',
            scrollTrigger: {
                trigger:'.ncs',
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
                trigger:'.ncs',
                spin: true,
                scrub:1,
                end:'200%'
            }
        });
        gsap.to(listB, {
            y:-30,
            rotation:10,
            scrollTrigger:{
                trigger:'.ncs',
                spin: true,
                scrub:1,
                end:'200%'
            }
        });
        
});

/* $(function () {

	'use strict';

	// Lenis 부드러운 스크롤 초기화
	const lenis = new Lenis({
		duration: 1.4 // 스크롤 지속 시간 설정 (초 단위)
	})

	// Lenis 스크롤 이벤트 리스너 등록
	lenis.on('scroll', (e) => {
		console.log(e) // 스크롤 이벤트 발생 시 로그 출력
	})

	// requestAnimationFrame을 사용하여 애니메이션 업데이트
	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)

	document.addEventListener('keydown', function(e) {
		if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
			e.preventDefault();
		}
	});
});
 */





