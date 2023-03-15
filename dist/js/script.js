// navbar fixed
window.onscroll = function () {
	const header = document.querySelector('header');
	const fixnav = header.offsetTop;
	const toTop = document.querySelector('#to-top');

	if (window.pageYOffset > fixnav) {
		header.classList.add('navbar-fixed');
		toTop.classList.remove('hidden');
		toTop.classList.add('flex');
	} else {
		header.classList.remove('navbar-fixed');
		toTop.classList.remove('flex');
		toTop.classList.add('hidden');
	}
};

// ini hamburger
const hamburger = document.querySelector('#hamburger');

const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('hamburger-active');
	navMenu.classList.toggle('hidden');
});

// click outside hamburger or nav item
window.addEventListener('click', function (event) {
	if (event.target !== hamburger && event.target !== navMenu) {
		hamburger.classList.remove('hamburger-active');
		navMenu.classList.add('hidden');
	}
});

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
	if (darkToggle.checked) {
		html.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
		html.classList.remove('dark');
		localStorage.theme = 'light';
	}
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	darkToggle.checked = true;
} else {
	darkToggle.checked = false;
}
