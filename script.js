"use strict"

document.addEventListener("DOMContentLoaded", function () {
	if (document.body.clientWidth < 992 && document.body.clientWidth > 767) document.querySelector(".about-us").firstElementChild.classList.remove("container");
	if (document.body.clientWidth < 600) document.querySelector(".header-body__logo").firstElementChild.innerHTML = "MC";

	document.querySelector(".header-body__burger").addEventListener("click", function () {
		document.querySelector(".header-body__burger").classList.toggle("active");
		document.querySelector(".burger-menu").classList.toggle("active");
	});

	// clients slider
	let slides_count_swiper1 = Math.floor(document.querySelector(".swiper-clients").clientWidth / 230);
	var Swiper1 = new Swiper('.swiper-container.swiper-clients', {
		loop: true,
		slidesPerView: slides_count_swiper1,
		navigation: {
			nextEl: '.swiper-button-next.swiper-clients__arrow-r',
			prevEl: '.swiper-button-prev.swiper-clients__arrow-l',
		},
	});

	//our-works slider
	let slides_count_swiper2 = Math.floor(document.querySelector(".swiper-work").clientWidth / 350);
	var Swiper2 = new Swiper('.swiper-container.swiper-work', {
		loop: true,
		slidesPerView: slides_count_swiper2,
		navigation: {
			nextEl: '.swiper-button-next.swiper-work__arrow-r',
			prevEl: '.swiper-button-prev.swiper-work__arrow-l',
		},
	});

});