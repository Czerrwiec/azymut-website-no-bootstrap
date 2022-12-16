let hamburger;
let stick;
let footerYear;
let mobileNav;
let mobileLinkBox;
let navigation;
let slider;
let prevBtn;
let nextBtn;
let listOfSelectors;
let selectorParent;
let index = 0;

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
	slider = document.querySelector('.slider');
	prevBtn = document.querySelector('.prev');
	nextBtn = document.querySelector('.next');
	listOfSelectors = document.querySelectorAll('.list li');
	selectorParent = document.querySelector('.list');
};

const prepareDOMEvents = () => {
	hamburger.addEventListener('click', handleMobileNav);
	window.addEventListener('scroll', addShadow);
	nextBtn.addEventListener('click', nextImg);
	prevBtn.addEventListener('click', prevImg);
	listOfSelectors.forEach((item, i) => {
		item.addEventListener('click', () => {
			index = i;
			cleanUpAndTranslate();
			item.classList.add('selected');
		});
	});
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

const prevImg = () => {
	index = index > 0 ? index - 1 : 0;
	cleanUpAndTranslate();
	selectorParent.children[index].classList.add('selected');
};

const nextImg = () => {
	index = index < 5 ? index + 1 : 5;
	cleanUpAndTranslate();
	selectorParent.children[index].classList.add('selected');
};

const cleanUpAndTranslate = () => {
	listOfSelectors.forEach((x) => {
		x.classList.remove('selected');
	});
	slider.style.transform = `translate(${index * -16.666667}%)`;
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

document.addEventListener('DOMContentLoaded', main);
