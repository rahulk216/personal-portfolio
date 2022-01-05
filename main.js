const menubtnhamburger = document.querySelector('.menu-btn-hamburger');
const menubtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');

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
