document.querySelectorAll('li[id="displaySub"]').forEach((ele) => {
	ele.addEventListener('click', (e) => {
		e.target.querySelectorAll('li > a').forEach((ele) => {
			if (ele.style.display != 'block') ele.style.display = 'block';
			else ele.style.display = 'none';
		});
	});
});