document.addEventListener('DOMContentLoaded', () => {
	const menus = document.querySelectorAll('.gnb > li');

	console.log(menus);

	menus.forEach((menu, index) => {
		menu.addEventListener('mouseenter', () => {
			menu.classList.add('on');
		});
		menu.addEventListener('mouseleave', () => {
			menu.classList.remove('on');
		});
	});
});
