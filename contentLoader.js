window.addEventListener('load', () => {
	if (window.fetch)	// fetch
	{
		if(document.location.hash != '')
		{
			fetch('https://gadax.github.io/fewAlgos/' + document.location.hash.replace('#', '')).then(function(response) {
				return response.text();

			}).then(function(body) {
				// retire les scripts du contenu visible
				document.getElementById('dynContent').innerHTML = body.replace(/<script[\S\s]*?<\/script>/g, '');

				// retire les eventuelles anciens scripts
				document.getElementById('staticScripts').innerHTML = '';

				// récupere tous les scripts
				for(let scriptText of body.matchAll(/<script[\S\s]*?<\/script>/g))
				{
					if(scriptText[0] != undefined)
					{
						let uniqueScript = document.createElement('script');
						uniqueScript.type = 'text/javascript';

						uniqueScript.textContent = scriptText[0].replace(/<script[\S\s]*?>/g, '').replace(/<\/script>/g, '');

						document.getElementById('staticScripts').appendChild(uniqueScript);
					}
				}
			});
		}

		for(ele of document.getElementsByTagName('a'))
		{
			ele.addEventListener('click', (e) => {
				e.preventDefault();
				e.stopPropagation();

				if(document.location.hash.replace('#', '') != e.target.getAttribute('href'))
				{
					document.location.hash = e.target.getAttribute('href');
					document.location.reload();
				}
			});
		}
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







