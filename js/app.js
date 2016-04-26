
$(document).ready(function(){
      $(window).foundation();
   });

   $(document).ready(function(){
         $(window).stellar();
      });


/*---- Background Video
---*/

  $(document).ready(function () {

    $('#video-wrap').vide({
      'mp4': 'video/invention',
      'webm': 'video/invention',
      'ogv': 'video/invention',
      'poster': 'video/invention',
    });
 });

/*----STICKY----*/

$(document).ready(function(){
  $(window).scroll(function() {
  if ($(this).scrollTop() > 1){
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });

  $(window).scroll(function() {
  if ($(this).scrollTop() > 1){
      $('.brand-logo').addClass("opacity");
    }
    else{
      $('.brand-logo').removeClass("opacity");
    }
  });
});

/*-----SMOOTH SCROLL----*/
// $(document).ready(function(){
//   jQuery(function($) {
//           // from http://imakewebthings.com/jquery-waypoints/
//
//           // Wicked credit to
//   	// http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
//   	var scrollElement = 'html, body';
//   	$('html, body').each(function () {
//   		var initScrollTop = $(this).attr('scrollTop');
//   		$(this).attr('scrollTop', initScrollTop + 1);
//   		if ($(this).attr('scrollTop') == initScrollTop + 1) {
//   			scrollElement = this.nodeName.toLowerCase();
//   			$(this).attr('scrollTop', initScrollTop);
//   			return false;
//   		}
//   	});
// });
//
// 	// Smooth scrolling for internal links
//   $(document).ready(function(){
//   	$("a[href^='#']").click(function(event) {
//   		event.preventDefault();
//
//   		var $this = $(this),
//   		target = this.hash,
//   		$target = $(target);
//
//   		$(scrollElement).stop().animate({
//   			'scrollTop': $target.offset().top
//   		}, 800, 'swing', function() {
//   			window.location.hash = target;
//   		});
//
//   	});
//
//   });
// });

/*------
| Stop Stellar Parallax when Mobile
-------*/

$(document).ready(function(){
      if ($(window).width() < 1200) {
		   scrollme.init_if = function() { return(false)};
		   $(window).stellar().stop;
          console.log('falso!');
		}
		else {
		   scrollme.init_if = function() { return(true)};
		   $(window).stellar();
          console.log('truee!');
		}

});
