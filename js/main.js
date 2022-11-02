(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});



	$("div.features-post").hover(
    function() {
        $(this).find("div.content-hide").slideToggle("medium");
    },
    function() {
        $(this).find("div.content-hide").slideToggle("medium");
    }
 );


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
    
    

    $( "#tabs" ).tabs();

$(".content ").slice(0, 3).show()
	 $(".box-btn").on("click", function(){
		  $(".content:hidden").slice(0, 3).slideDown()
		  if ($(".content:hidden").length = 0) {
			$(".box-btn").fadeOut('slow') 
		  }
	 })

            // Add Class
    $(".add-class").click(function(){
        $(".class-here").addClass("active");
    });
    $(".add-class2").click(function(){
        $(".class-here").toggleClass("active");
    });

    $(".add-cl").click(function(){
        $(".class-here").addClass("active");
    });
    $(".add-cl").click(function(){
        $(".class-here").toggleClass("active");
    });
})(jQuery);