$(function(){

    $(".nav, .footer__nav, .header__btn-box, .footer__arrow-box").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.nav-btn').click(function(){
    $(this).toggleClass('open');
  });

  $('.nav-btn').on('click', function(){
    $('.nav__list').toggleClass('nav__list--active');
  })

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 544,
            settings: {
              slidesToShow: 1,
              centerMode: true
            }
          },
          {
            breakpoint: 440,
            settings: {
              slidesToShow: 1,
              }
          },
        ]
      });
})