// const ready = require('./utils/documentReady.js');

// ready(function(){
//   console.log('DOM героически построен!');
// });

 const $ = require('jquery');
 $( document ).ready(function() {
    $(window).scroll(function(){
  if($(this).scrollTop()>=100){
     $('.first-screen__lines').addClass ('first-screen__lines--animate')
  }
});

$('.dropdown').on('click', function () {
  if ($(this).hasClass("active")) {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
  $("#publication-input").val('');
  $("#publication-close").removeClass('active');
  var value = '';
  $("#publication-list li").filter(function() {
    let item = $(this).text().toLowerCase().indexOf(value) > -1;
    $(this).toggle(item);
  });
  $("#publication-input").removeClass('active');
} else {
 $(this).addClass('active');
  $(this).find('.dropdown-menu').slideDown(300); 
}
}).on('click','.search-input, .dropdown__close', function(e) { 
  e.stopPropagation();
   
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());

});
$("#publication-input").on("click", function() {
  $(this).addClass('active');
  $(this).parents('.dropdown').find('.dropdown-menu').slideDown(300); 
  var close = $('#publication-close');
  $(close).addClass('active');
  $(close).on('click', function(){
    $("#publication-input").removeClass('active');
    $("#publication-input").val('');
    $(this).parents('.dropdown').find('.dropdown-menu').slideUp(300);
    var value = $("#publication-input").val().toLowerCase();
    $(this).removeClass('active');
    $("#publication-list li").filter(function() {
      let item = $(this).text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(item);
    });
  })
});

$("#publication-input").on("keyup", function() {
  var value = $(this).val().toLowerCase();
 $("#publication-list li").filter(function() {
   let item = $(this).text().toLowerCase().indexOf(value) > -1;
   $(this).toggle(item);
 });
});
 

// меняем класс у обертки  для курсора
if ($(".authors__wrap").length){
  $('.authors__wrap').on('mousemove', function() {
     var block = $(this); 
     if($(this).children('.authors__card').length > 4){
      $(this).addClass('authors__wrap--scroll')
     }
     if($('.authors__wrap').children('.authors__card').length == 1){
      $(this).parents('.authors').css({'overflow':'hidden'})
     }
  }); 
  }
}); 
 // листалка авторов 
 if ($(".authors__wrap").length){
  InitVars();
  InitMenu();
    $(window).on("load",function(){
        UpdateScroll();

    });

  }
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;


  

    function InitVars(){
        $MainMenu = $('.authors__wrap');
        $Speed = $Scroll = 0;
        $MainMenuWidth = $MainMenu.width();
        $MainMenuMaxScroll = $MainMenu[0].scrollWidth - $MainMenu.outerWidth();
        $FirstLaunch = true;
    }
    function InitMenu(){
        $MainMenu.on('mousemove', function(e) { var mouse_x = e.pageX - $MainMenu.offset().left; var mouseperc = 100 * mouse_x / $MainMenuWidth; $Speed = mouseperc - 50; }).on ( 'mouseleave', function() { $Speed = 0; });
    }
    function UpdateScroll() {
        if ($Speed !== 0) { 
            $Scroll += $Speed / 3;
            if ($Scroll < 0){ $Scroll = 0;}
            $MainMenu.scrollLeft($Scroll);
        }
        $MenuEvent = requestAnimationFrame(UpdateScroll);
    }
// header
var header = $('.page-header'),
	scrollPrev = 0;

  let menuElem = $('.page-header'), // Элемент который будет прилепать
  menuFixed = 300, // кол-во пикселей от границы, когда меню "прилипнет" к краю экрана.
  menuStatus = false; // Некая оптимизация.
$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
  if ( scrolled > 300 && scrolled < scrollPrev ) {
		header.addClass('fixed').css({'top':'0%'});
	}
  else if( scrolled > scrollPrev ) {
    header.css({'top':'-100%'});
   
  }
  else {
     header.removeAttr('style').removeClass('fixed'); 
  }
	scrollPrev = scrolled;
});;