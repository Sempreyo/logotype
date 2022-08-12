$(window).on('load', function () {
	var menu = $('.menu');
	var burger = $('.header__burger');
	var menuItem = $('.menu__item li > span');

	/* Header */
	burger.click(function () {
		if (!menu.hasClass('open')) {
			menu.addClass('open');
			burger.addClass('active');
			$('body').addClass('body-scroll-lock');
		} else {
			menu.removeClass('open');
			burger.removeClass('active');
			$('body').removeClass('body-scroll-lock');
		}
	});

	/* Show menu item */
	if (window.matchMedia('(max-width: 1079px)').matches) {
		menuItem.click(function () {
			$(this).next().slideToggle(300);
		});
	}

	/* Floated menu */
	var previousTop = 0;
	var lengthScrolled = 0;
	$(window).on('scroll', function () {
		if (window.matchMedia('(min-width: 1080px)').matches) {
			var currentTop = $(window).scrollTop();
			scroll = $(window).scrollTop();

			if (currentTop < lengthScrolled) {
				if (previousTop - currentTop > 200){
					menu.css('transform', 'translateY(0)');
					previousTop = currentTop;
				}
			} else {
				if (currentTop - previousTop > 200){
					menu.css('transform', 'translateY(-100%)');
					previousTop = currentTop;
				}
			}
			lengthScrolled = currentTop;
		}
	});

	/* WOW */
	new WOW().init();
});