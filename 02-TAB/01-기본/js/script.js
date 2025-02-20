document.addEventListener('DOMContentLoaded', function () {
	const tabMenus = document.querySelectorAll('.tab-menu');
	const tabContents = document.querySelectorAll('.tab-content');

	// console.log(tabMenus, tabContents);

	function openTab(index) {
		tabMenus.forEach((tabMenu) => {
			tabMenu.classList.remove('on');
		});

		tabContents.forEach((tabContent) => {
			tabContent.classList.remove('active');
		});

		tabMenus[index].classList.add('on');
		tabContents[index].classList.add('active');
	}

	tabMenus.forEach((tabMenu, index) => {
		tabMenu.addEventListener('click', () => {
			openTab(index);
		});
	});

	openTab(0);

	let idx = 0;
	setInterval(() => {
		idx++;
		idx = idx % tabMenus.length;
		openTab(idx);
	}, 1000);
});
