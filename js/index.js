// particlesJS();
// particlesJS.load('particles-js', 'js/particlesjs-config.json');

jQuery(document).ready(function ($) {
    $(window).load(function () {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
    });
});

$(".custom-nav a").click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});
$(window).scroll(function () {
    var scrollPos = $(document).scrollTop();
    $('.custom-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= 400 + scrollPos && refElement.position().top + 400 + refElement.height() > scrollPos) {
            $('.custom-nav a').removeClass("active"); //added to remove active class from all a elements
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
})

$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        document.getElementById('nav').style.background = 'rgba(7,7,7,.6)';;


    }
    else {
        document.getElementById('nav').style.background = 'transparent';
    }
});

$('#B').hide();
$('#C').hide();

//problem content carousel
var letterArr = ['#A','#B','#C'];
var counter = 0;
setInterval(function(){
    // console.log(letterArr[counter])
    // console.log(counter)
    $(letterArr[counter]).hide();
    if (counter == 2){
        $(letterArr[0]).show();
    }else{
        $(letterArr[counter + 1]).show();
    }
    if (counter < 2) {
        counter +=  1;
    }else{
        counter = 0;
    }
}, 7000);