$(document).ready(function() {
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
    });

    $('.carousel').carousel({
        pause: "hover",
        interval: 5000
});
$('#myModal').modal();

$('.bienvenue').typer(['BIENVENUE AU CASR 3PM ACADEMY']);

// ASIDE CAROUSEL


// OWL
   $("#owl-demo").owlCarousel({
 
      autoPlay: 4000, //Set AutoPlay to 3 seconds
 
      items : 6,
       //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 5000,
 
    //Autoplay
    // autoPlay : false,
    stopOnHover : true,
 
  });

    jQuery("#gallery").unitegallery({
        //gallery width
        gallery_width: 1200,

        //     //gallery height
        gallery_height: 500,

        //     //gallery minimal width when resizing
        gallery_min_width: 400,

        //     //gallery minimal height when resizing
        gallery_min_height: 300,
        gallery_autoplay: true,
        gallery_play_interval: 5000

    });
    // VERTICAL TABS
     $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });

    $('#tabs').tabs().addClass('ui-tabs-vertical ui-helper-clearfix');

    $('#tabs2').tabs().addClass('ui-tabs-vertical ui-helper-clearfix');
    

});