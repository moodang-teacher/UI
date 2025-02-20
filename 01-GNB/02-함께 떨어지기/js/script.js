document.addEventListener('DOMContentLoaded', () => {
	const menus = document.querySelectorAll('.gnb > li');
	const header = document.querySelector('header');

	menus.forEach((menu) => {
		menu.addEventListener('mouseenter', () => {
			header.classList.add('active');
			menu.classList.add('on');
		});
		menu.addEventListener('mouseleave', () => {
			header.classList.remove('active');
			menu.classList.remove('on');
		});
	});
});
