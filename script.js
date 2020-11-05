"use strict"

document.addEventListener("DOMContentLoaded", function () {
	if (document.body.clientWidth < 992 && document.body.clientWidth > 767) document.querySelector(".about-us").firstElementChild.classList.remove("container");
	if (document.body.clientWidth < 600) document.querySelector(".header-body__logo").firstElementChild.innerHTML = "MC";

	document.querySelector(".header-body__burger").addEventListener("click", function () {
		document.querySelector(".header-body__burger").classList.toggle("active");
		document.querySelector(".burger-menu").classList.toggle("active");
	});

	let slides_count = Math.floor(document.querySelector(".swiper-clients").clientWidth / 200);
	var Swiper1 = new Swiper('.swiper-clients', {
		loop: true,
		slidesPerView: slides_count,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
});