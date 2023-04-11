'use strict';

document.addEventListener('click', (e) => {
	let handle;
	if (e.target.matches('.handle')) {
		handle = e.target;
	} else {
		handle = e.target.closest('.handle');
	}
	if (handle != null) {
		onHandleClick(handle);
	}
});

function onHandleClick(handle) {
	const slider = handle.closest('.container2').querySelector('.slider');
	const sliderIndex = parseInt(
		getComputedStyle(slider).getPropertyValue('--slider-index')
	);
	console.log(sliderIndex);
	if (handle.classList.contains('left-handle')) {
		slider.style.setProperty('--slider-index', sliderIndex - 1);
	}

	if (handle.classList.contains('right-handle')) {
		slider.style.setProperty('--slider-index', sliderIndex + 1);
	}
}

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', function () {
	headerEl.classList.toggle('nav-open');
});

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	grabCursor: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const isChromeForIOs145 = () => {
	const userAgent = window.navigator.userAgent;
	const isChromeForIOs = /CriOS/i.test(userAgent);
	if (isChromeForIOs) {
		const iOsMatch = userAgent.match(
			/(.+)(iPhone|iPad|iPod)(.+)OS[\s|\_](\d+)\_?(\d+)?[\_]?(\d+)?.+/i
		);
		if (iOsMatch && iOsMatch.length >= 6) {
			const iOsVersionMajor = parseInt(iOsMatch[4], 10);
			const iOsVersionMinor = parseInt(iOsMatch[5], 10);
			if (iOsVersionMajor >= 14 && iOsVersionMinor >= 5) {
				return true;
			}
		}
	}
	return false;
};
