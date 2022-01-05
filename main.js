const menubtnhamburger = document.querySelector('.menu-hamburger');
const menubtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
const closeBtn = document.querySelector('.hamburger i');

let menucheck = false;
menubtnhamburger.addEventListener('click', () => {
	if (menucheck === false) {
		menubtn.classList.add('open');
		navList.classList.add('active');
		menucheck = true;
	} else {
		menubtn.classList.remove('open');
		navList.classList.remove('active');
		menucheck = false;
	}
});

closeBtn.addEventListener('click', () => {
	if (menucheck === true) {
		navList.classList.remove('active');
		menucheck = false;
	}
});
