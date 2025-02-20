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

	let lastScrollTop = 0;

	function throttle(func, limit) {
		let inThrottle;
		return function () {
			const context = this;
			const args = arguments;
			if (!inThrottle) {
				func.apply(context, args);
				inThrottle = true;
				setTimeout(() => (inThrottle = false), limit);
			}
		};
	}

	window.addEventListener(
		'scroll',
		throttle(() => {
			const scrollTop = window.scrollY;
			console.log(scrollTop);

			if (scrollTop < lastScrollTop) {
				header.classList.remove('hide');
			} else {
				header.classList.add('hide');
			}

			lastScrollTop = scrollTop;
		}, 250)
	);
});
