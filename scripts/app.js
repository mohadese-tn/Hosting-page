// -----select Elements
let $ =document;
let icon=$.querySelector(".menu-icon");
let menu=$.querySelector('.main-menu');
let content=$.querySelector('.header-content');
let customscroll=$.querySelector('#scroll');

// -----responsive nav menu------
icon.addEventListener('click',function(){

    if (icon.classList.contains('fa-bars')){
        menu.style.left=0;
        icon.classList='fa fa-times menu-icon';
        content.style.filter='blur(7px)';

    }else{
        icon.classList='fa fa-bars menu-icon';
        menu.style.left= "-250px";
        content.style.filter='blur(0)';
    }
})
// -----custom scroll------
window.addEventListener('scroll',()=>{
    let scrollTop=window.scrollY;
    let documentHeight= document.body.clientHeight;
    let windowHeight=window.innerHeight;
    let scrollpercent=scrollTop/(documentHeight-windowHeight );
    let scrollpercentrounded=Math.floor(scrollpercent*100);
    customscroll.style.width=`${scrollpercentrounded}%`
})





