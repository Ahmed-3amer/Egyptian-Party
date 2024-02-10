/* side bar event */
$('.openIcon').click(function(){
    $('.openNav').css('left', '0');
})

$('#closeIcon').click(function(){
    $('.openNav').css('left', '-270px');
})


/* slide content event */
$('.slideContent h3').click(function(){
    $(this).next().slideToggle();
    $('.slideContent p').not($(this).next()).slideUp(); 
})


/* counter */
let countDownDate = new Date("Dec 31, 2024 20:00:00").getTime();

let x = setInterval(function(){
let now = new Date().getTime();
let remainTime = countDownDate - now;

var days = Math.floor(remainTime / (1000 * 60 * 60 * 24));
var hours = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((remainTime % (1000 * 60)) / 1000);

$('.daysCount').html(days + " " +"D")
$('.hoursCount').html(hours + " " +"h")
$('.minutesCount').html(minutes + " " +"m")
$('.secondsCount').html(seconds + " " +"s")

//this code below if i want to show EXPIRED and stop counter --

// if(remainTime < 0){
//     clearInterval(x);
//     $('.expired').html('EXPIRED')
// }

}, 1000)


/* contact */
$('textarea').keyup(function(){
    let myLength = $(this).val().length;
    $('.num').text(
        100 - myLength <= 0 ? "your available characters finished" : 100 - myLength 
    )
})

/* scroll */
$('.sectionLink').click(function(e){
let aHref = e.target.getAttribute('href');
let sectionTop = $(aHref).offset().top;
console.log(sectionTop)
$('body,html').animate({
    scrollTop:sectionTop
} , 2000)
// $('body').animate({scrollTop:sectionOffset}, 10000)
})

// $('.sectionLink').click(function(e){
//     let section = $(this).attr('href')
//     console.log(section);
// })