const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'fade',
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
});