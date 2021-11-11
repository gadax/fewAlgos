window.addEventListener('load', () => {
	if (window.fetch)	// fetch
	{
		// charge le contenu si un hash est présent
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
						// crée un nouvel élément Script 
						let uniqueScript = document.createElement('script');
						uniqueScript.type = 'text/javascript';

						// initialise les attributs du script
						for(let attributs of scriptText[0].match(/ \w+="[\S]+"/g))
						{
							uniqueScript[attributs.split('=')[0].substring(1)] = attributs.split('=')[1].replace(/"/g, '');
						}

						if(uniqueScript.type == 'text/javascript')
						{
							// initialise le contenu du nouvel élément Script et l'intègre au DOM
							uniqueScript.textContent = scriptText[0].replace(/<script[\S\s]*?>/g, '').replace(/<\/script>/g, '');
							document.getElementById('staticScripts').appendChild(uniqueScript);
						}
						else
						{
							// si le script n'est pas du javascript (GLSL) le colle comme du texte
							// afin d'éviter qu'il soit interpreté.
							document.getElementById('staticScripts').innerHTML += scriptText;
						}
					}
				}
			});
		}

		// clicker sur un lien modifie le hash (si différent) et recharge la page
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







