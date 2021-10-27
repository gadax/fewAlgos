window.addEventListener('load', () => {
	if (window.fetch)	// fetch
	{
		for(ele of document.getElementsByTagName('a'))
		{
			ele.addEventListener('click', (e) => {
				e.preventDefault();
				e.stopPropagation();
				fetch('https://gadax.github.io/fewAlgos/' + e.target.getAttribute('href')).then(function(response) {
						return response.text();

					}).then(function(body) {

						//console.log([...body.matchAll(/<script[\S\s]*<\/script>/g)]);

						for(let scriptText of body.matchAll(/<script[\S\s]*<\/script>/g))
						{
							if(scriptText[0] != undefined)
							{
								let uniqueScript = document.createElement('script');
								uniqueScript.type = 'text/javascript';
								//console.log(scriptText[0].replace(/(<([^>]+)>)/gi, ''));
								//uniqueScript.textContent = 'console.log(\'hello\')';
								/* enleve les balises */
								uniqueScript.textContent = String(scriptText[0].replace(/(<([^>]+)>)/gi, ''));
								console.log(uniqueScript.textContent);
								document.body.appendChild(uniqueScript);
								//console.log(document.querySelector('body'));
							}
						}

						body = body.replace(/<script[\S\s]*<\/script>/g, '');
						// console.log(body);
						document.getElementById('dynContent').innerHTML = body; // externaliser script
					});
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







