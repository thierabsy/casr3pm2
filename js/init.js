(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $('.carousel.carousel-slider').carousel({full_width: true});

     $('.slider').slider({full_width: true});

     $('.pgwSlider').pgwSlider({
    maxHeight : 400,
    intervalDuration : 4000
}
	);

    $('.modal').modal();

    $('.tooltipped').tooltip({delay: 50});

    $('ul.tabs').tabs();

    $("#gallery").unitegallery();	

 $("#light-slider").lightSlider({
                item:4,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });  
  });

    // OWL
   $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 6,
      // itemsDesktop : [1199,3],
      // itemsDesktopSmall : [979,3]
 
  }); // end of document ready
})(jQuery); // end of jQuery name space