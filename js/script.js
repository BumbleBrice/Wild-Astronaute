"use strict"

function removeActive(){
	 $('ul.nav > li').removeClass('active');
}

function collapseNavbar(){
	if($(".navbar").offset().top > 50)
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	else
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

$('ul.nav > li').click(function (e) {
    event.defaultPrevented;
    $('ul.nav > li').removeClass('active');
    $(this).addClass('active');
});

//***********************************************
//Partie pour Smooth scroll en jQuery sans plugin
//***********************************************
//Exemple : http://www.design-fluide.com/17-11-2013/un-defilement-anime-smooth-scroll-en-jquery-sans-plugin/
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
//<script>
	$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});
//</script>
//*********************************************************
//Fin de la partie pour Smooth scroll en jQuery sans plugin
//*********************************************************
