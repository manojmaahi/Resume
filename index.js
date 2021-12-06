$(document).ready(function(){

          $('.lens_effect').delay(4000).fadeOut();
          $('.centered').hide();
          setTimeout(function(){
            $('.centered').show();
            setTimeout(function(){$('.centered').remove();},1500);
          },2000);


});
