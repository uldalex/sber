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

 });


