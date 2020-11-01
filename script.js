"use strict"

document.addEventListener("DOMContentLoaded", function () {
	if (document.body.clientWidth < 992 && document.body.clientWidth > 767) document.querySelector(".about-us").firstElementChild.classList.remove("container");
	if (document.body.clientWidth < 600) document.querySelector(".header-body__logo").firstElementChild.innerHTML = "MC";

	document.querySelector(".header-body__burger").addEventListener("click", function () {
		document.querySelector(".header-body__burger").classList.toggle("active");
		document.querySelector(".burger-menu").classList.toggle("active");
	})
});