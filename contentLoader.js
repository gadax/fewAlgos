window.addEventListener('load', () => {
	if (window.fetch)	// fetch
		{
			for(ele of document.getElementsByTagName('a'))
			{
				ele.addEventListener('click', (e) => {
					e.preventDefault();
					e.stopPropagation();
					fetch('https://gadax.github.io/fewAlgos/' + e.target.getAttribute('href')).then(function(response) {
						return response.text(); // .text()

					}).then(function(body) {
						document.getElementById('dynContent').innerHTML = body;
						//console.log('§' + body);
						//console.log(document.getElementById('dynContent'));
					});
				});
			}
			// document.getElementsByTagName('a').forEach((ele) => {
			// 	ele.addEventListener('click', (e) => {
			// 		e.preventDefault();
			// 		e.stopPropagation();
			// 		fetch('https://gadax.github.io/fewAlgos/' + e.target.getAttribute('href')).then(function(response) {
			// 			return response.body; // .text()

			// 		}).then(function(body) {
			// 			//document.getElementById('dynContent').innerHTML = body;
			// 			console.log('-' + body);
			// 		});
			// 	});
			// });

		}
	else	// XMLHttpRequest
	{
		// (function includeHTML()
		// {
		// 	var z, i, elmnt, file, xhttp;
		// 	z = document.getElementsByTagName('*');/*querySelector('*[include-html]');*/

		// 	for (i = 0; i < z.length; i++)
		// 	{
		// 		elmnt = z[i];
		// 		file = elmnt.getAttribute('include-html');

		// 		if (file)
		// 		{
		// 			xhttp = new XMLHttpRequest();
		// 			xhttp.onreadystatechange = function()
		// 			{
		// 				if (this.readyState == 4)
		// 				{
		// 					if (this.status == 200) elmnt.innerHTML = this.responseText;
		// 					if (this.status == 404) elmnt.innerHTML = 'Page not found.';

		// 					elmnt.removeAttribute('include-html');
		// 					includeHTML();
		// 				}
		// 			}			
		// 			xhttp.open('GET', file, true);
		// 			xhttp.send();
		// 			return;
		// 		}
		// 	}
		// })();
	}
});







