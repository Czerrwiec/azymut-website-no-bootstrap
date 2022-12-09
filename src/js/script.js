let hamburger;
let stick;
let footerYear;
let mobileNav;
let mobileLinkBox;
let navigation;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
	handleCurrentYear();
};

const prepareDOMElements = () => {
	hamburger = document.querySelector('.hamburger-container');
	stick = document.querySelector('.stick');
	footerYear = document.querySelector('.footer-year');
	mobileNav = document.querySelector('.mobile-nav');
	mobileLinkBox = document.querySelector('.mobile-link-box');
	navigation = document.querySelector('.navbar');
};

const prepareDOMEvents = () => {
	hamburger.addEventListener('click', handleMobileNav);
	window.addEventListener('scroll', addShadow);
};

const handleMobileNav = () => {
	if (stick.classList.contains('trigger')) {
		mobileNav.style.transform = 'translateY(-105%)';
		mobileNav.style.opacity = '0';
		mobileLinkBox.style.opacity = '0';
		stick.classList.remove('trigger');
	} else {
		stick.classList.add('trigger');
		mobileNav.style.transform = 'translateY(0%)';
		mobileNav.style.opacity = '1';
		mobileLinkBox.style.opacity = '1';
	}
};

const addShadow = () => {
	let number = 280;

	if (window.matchMedia('(max-width: 700px)')) {
		number = 200;
	}
	if (window.scrollY >= number) {
		navigation.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
	} else {
		navigation.style.backgroundColor = '';
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

document.addEventListener('DOMContentLoaded', main);
