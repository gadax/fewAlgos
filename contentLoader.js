if (window.fetch)	// fetch
{
	document.getElementsByTagName('a').forEach((ele) => {
		ele.addEventListener('click', (e) => {
			e.preventDefault();
			fetch('https://gadax.github.io/fewAlgos/' + e.target.getAttribute('href')).then(function(response) {
				return response.text();

			}).then(function(body) {
				document.getElementById('layout').innerHTML = body;
			});
		});
	});

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







