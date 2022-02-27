// const ready = require('./utils/documentReady.js');

// ready(function(){
//   console.log('DOM героически построен!');
// });

 const $ = require('jquery');
 $( document ).ready(function() {


$('.dropdown').on('click', function () {
  
  if ($(this).hasClass("active")) {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
  $("#publication-input").val('');
  $("#autors-input").val('');
  $("#publication-close").removeClass('active');
  $("#autors-close").removeClass('active');
  var value = '';
  $("#publication-list li").filter(function() {
    let item = $(this).text().toLowerCase().indexOf(value) > -1;
    $(this).toggle(item);
  });
  $("#autors-list li").filter(function() {
    let item = $(this).text().toLowerCase().indexOf(value) > -1;
    $(this).toggle(item);
  });
  $("#publication-input").removeClass('active');
  $("#autors-input").removeClass('active');
} else {
 $(this).addClass('active');
  $(this).find('.dropdown-menu').slideDown(300); 
}
}).on('click','.search-input, .dropdown__close', function(e) { 
  e.stopPropagation();
});
$('.dropdown .dropdown-menu li').on('click', function () {
  var text = $(this).text();
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find("#publication-input").attr('placeholder' , text);
  $(this).parents('.dropdown').find("#autors-input").attr('placeholder' , text);
  
});
$('.dropdown--lab').on('click', function(){
  $('.card').css({'display':'block'});
  $("#autors-input.search-input--ru").attr('placeholder' , 'Поиск по авторам');
  $("#publication-input.search-input--ru").attr('placeholder' , 'Поиск по публикациям');
  $("#autors-input.search-input--en").attr('placeholder' , 'Enter an author');
  $("#publication-input.search-input--en").attr('placeholder' , 'Enter a title');
  $('.dropdown--publication, #publication-input,  #autors-input,#publication-close, #autors-close, .dropdown--autors').removeClass('active')
  $('.dropdown--publication .dropdown-menu , .dropdown--autors .dropdown-menu').slideUp(300);
})
$("#publication-input").on("click", function() {
  $('.card').css({'display':'block'});
  $('.dropdown').removeClass('active');
  $('.dropdown-menu').slideUp(300); 
  $("#autors-input").removeClass('active');
  $("#autors-close").removeClass('active');
  $('.lab').css({'display':'block'});
  $('.select-filter--ru').find('span').text('Смотреть все');
  $('.select-filter--en').find('span').text('View all');
  $("#autors-input.search-input--ru").attr('placeholder' , 'Поиск по авторам');
  $("#autors-input.search-input--en").attr('placeholder' , 'Enter an author');
  $(this).addClass('active');
  $(this).parents('.dropdown').addClass('active');
  $(this).parents('.dropdown').find('.dropdown-menu').slideDown(300); 
  var close = $('#publication-close');
  $(close).addClass('active');
  $(close).on('click', function(){
    $("#publication-input").removeClass('active');
    $("#publication-input").val('');
    $("#publication-input.search-input--ru").attr('placeholder' , 'Поиск по публикациям');
    $("#publication-input.search-input--en").attr('placeholder' , 'Enter a title');
    $(this).parents('.dropdown').find('.dropdown-menu').slideUp(300);
    var value = $("#publication-input").val().toLowerCase();
    $(this).removeClass('active');
    $("#publication-list li").filter(function() {
      let item = $(this).text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(item);
    });
  })
});
$("#autors-input").on("click", function() {
  $('.dropdown').removeClass('active');
  $('.dropdown-menu').slideUp(300); 
  $("#publication-input").removeClass('active');
  $("#publication-close").removeClass('active');
  $('.lab').css({'display':'block'});
  $("#publication-input.search-input--ru").attr('placeholder' , 'Поиск по публикациям');
  $("#publication-input.search-input--en").attr('placeholder' , 'Enter a title');
  $('.select-filter--ru').find('span').text('Смотреть все');
  $('.select-filter--en').find('span').text('View all');
  $(this).addClass('active');
  $(this).parents('.dropdown').addClass('active');
  $(this).parents('.dropdown').find('.dropdown-menu').slideDown(300); 
  var close = $('#autors-close');
  $(close).addClass('active');
  $(close).on('click', function(){
    $("#autors-input").removeClass('active');
    $("#autors-input").val('');
    $(this).parents('.dropdown').find('.dropdown-menu').slideUp(300);
    var value = $("#autors-input").val().toLowerCase();
    $(this).removeClass('active');
    $("#autors-list li").filter(function() {
      let item = $(this).text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(item);
    });
  })
});
$('.autor-select').on('click', function(){
  var div = $(this).attr('id');
  $('.card').css({'display':'none'})
$('.'+div).css({'display':'block'})
})
$('.autor-all').on('click', function(){
  $('.card').css({'display':'block'});
})

$("#publication-input").on("keyup", function() {
  var value = $(this).val().toLowerCase();
 $("#publication-list li").filter(function() {
   let item = $(this).text().toLowerCase().indexOf(value) > -1;
   $(this).toggle(item);
 });
});
$("#autors-input").on("keyup", function() {
  var value = $(this).val().toLowerCase();
 $("#autors-list li").filter(function() {
   let item = $(this).text().toLowerCase().indexOf(value) > -1;
   $(this).toggle(item);
 });
});

$(".main-nav__link").on('click', function(){
      var  Url = $(this).data("anchor"); 
      var  toUrl = Url.split(' ').join('_');
     $('.main-nav').removeClass('main-nav--open');
  $('.burger').removeClass('burger--close');
  
  setTimeout(function(){
    window.location.hash = toUrl; 
},100);
  
  

 });


// развернуть блок
$(".six-screen__readmore").on('click', function(){
  $(".six-screen__more").toggleClass("six-screen__more--open");
  var text = $(".six-screen__readmore").text();
  $(".six-screen__readmore--ru").text(
    text == "Свернуть" ? "Читать полностью" : "Свернуть");
  $(".six-screen__readmore--en").text(
    text == "Show less" ? "Read More" : "Show less");
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

  $('.servise-form__link--lab').on('click', function(){
    var link = $(this).attr('href')
    $('.lab').css({'display':'none'});
    $(link).css({'display':'block'});
    
  })
  $('.servise-form__link--all ').on('click', function(){
    $('.lab').css({'display':'block'});
  });

}); 


 // листалка авторов 
 if ($("#publication1").length){
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
	scrollPrev = 100;
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



document.addEventListener( 'DOMContentLoaded', function() {
  if(document.getElementById("partners__splide")) {
  var banner =  document.getElementById('partners__splide') 
  var splide = new Splide( banner, {
    type   : 'loop',
    perPage:6,
    perMove: 1,
    autoplay:false,
    pauseOnHover:true,
    pauseOnFocus: true,
    arrows: true,
    breakpoints: {
		640: {
			perPage: 2,
		},
  }
  }); 
  splide.mount();
  }
});

 
