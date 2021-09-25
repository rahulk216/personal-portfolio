const menubtnhamburger = document.querySelector('.menu-btn-hamburger');
const menubtn = document.querySelector('.menu-btn');
let menucheck = false;
menubtnhamburger.addEventListener('click', () => {
	if (menucheck === false) {
		menubtn.classList.add('open');
		menucheck = true;
	} else {
		menubtn.classList.remove('open');
		menucheck = false;
	}
});
