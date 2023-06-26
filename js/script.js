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

  //count 
  var element = $('.count');
  $counter = 0;
  $(window).scroll(function(){
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = element.offset().top;

    if (scroll > offset && $counter == 0) {

      $('.count').each(function(){
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: 1000,
          easing: 'swing', 
          step:function(now){
            $(this).text(Math.ceil(now));
          }
        });
      });
      $counter = 1;
    }
  })

  // mobile menu
  $('.menu-button').click(function(){
      $('.nav').addClass('is-active');
      $('.menu-close').addClass('is-active');
  });
  $('.menu-close').click(function(){
      $('.nav').removeClass('is-active');
      $('.menu-close').removeClass('is-active');
  });

  // links smouth
  const menu = document.querySelector('.nav');
  const linksClose = document.querySelectorAll('.link');
  linksClose.forEach(linkClose => {
      linkClose.addEventListener('click', () => {
          menu.classList.remove('is-active');
      });
  });


  $('.variable-width').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
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


  $("document").ready(function(){
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
  });
  
  $(".tab-slider--nav li").click(function() {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
    if($(this).attr("rel") == "tab2"){
      $('.tab-slider--tabs').addClass('slide');
    }else{
      $('.tab-slider--tabs').removeClass('slide');
    }
    $(".tab-slider--nav li").removeClass("activetab");
    $(this).addClass("activetab");
  });


});
