$( () => {

	// On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 150 ? $('.header').addClass('header-scroll') : $('.header').removeClass('header-scroll');
		windowTop > 150 ? $('.header-container').addClass('header-container-scroll') : $('.header-container').removeClass('header-container-scroll');
        windowTop > 150 ? $('#top-second').addClass('top-second-open') : $('#top-second').removeClass('top-second-open');
	});
	
	//Click Logo To Scroll To Top
	$('#hero, #top-second').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},100);
	});
	
	$('.nav a[href^="#"]').click(function () {
		//Сохраняем значение атрибута href в переменной:
		var offset = $('.nav').innerHeight();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - offset//можно вычесть высоту меню
		}, 500);
		$('.nav a[href^="#"]').removeClass('active');
		$(this).addClass('active');
		return false;
	});

    // mobile menu
    $('.menu-button').click(function(){
        $('.nav').addClass('is-active');
        $('.menu-close').addClass('is-active');
        $('body').css('overflow','hidden');
    });
    $('.menu-close').click(function(){
        $('.nav').removeClass('is-active');
        $('.menu-close').removeClass('is-active');
        $('body').css('overflow','auto');
    });

    const menu = document.querySelector('.nav');
    const linksClose = document.querySelectorAll('.link');
    linksClose.forEach(linkClose => {
        linkClose.addEventListener('click', () => {
            menu.classList.remove('is-active');
        });
    });

    $('.variable-width').slick({
        arrows: true,
        dots: false,
        // centerMode: true,
        focusOnSelect: true,
        variableWidth: true
      });

    // fancybox customisation
    $('[data-fancybox]').fancybox({
        buttons: [
        // "zoom",
        "close",
    ],
      protect: true,
      preventCaptionOverlap: true,  
    });
});
