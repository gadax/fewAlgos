/*
	Fonctions de conception de graphiques

*/

let height, width;

function grid(canvasCtx)	// affiche la grille en 50px par 50px
{
	canvasCtx.strokeStyle = 'rgb(150, 150, 150)';
	canvasCtx.lineWidth = 1;

	for(let i = 1; i <= height / 50; i++)	// vertical
	{
		canvasCtx.moveTo(0, 50 * i);
		canvasCtx.lineTo(width, 50 * i);
	}

	for(let i = 1; i <= width / 25; i++)	// horizontal
	{
		canvasCtx.moveTo(i * 50, 0);
		canvasCtx.lineTo(i * 50, height);
	}

	canvasCtx.stroke();
}

function scale(canvasCtx, rangeDataStart, rangeDataEnd, rangeTime)	// affiche les valeurs de l'échelle tout les 50px
{
	let rangeData = rangeDataEnd - rangeDataStart;

	canvasCtx.strokeStyle = 'rgb(150, 150, 150)';
	canvasCtx.lineWidth = 0.6;
	canvasCtx.font = "10px Verdana";

	canvasCtx.strokeText(String(Math.floor((rangeData / (height / 50) * (height / 50) + rangeDataStart) * 100) / 100), 2, 10);	// plage verticale
	for(let i = 0; i <= height / 50; i++)
	{
		canvasCtx.strokeText(String(Math.floor((rangeData / (height / 50) * ((height / 50) - i) + rangeDataStart) * 100) / 100), 2, i * 50 - 2);
	}
				
	for(let i = 1; i < width / 50; i++)  // range horizontale
	{
		canvasCtx.strokeText(String(Math.floor(((rangeTime / (width / 50)) * i) * 100) / 100), i * 50 + 2, height - 2);
	}
	canvasCtx.strokeText(String(Math.floor(rangeTime * 100) / 100), width - 14, height - 2);
}

function trace(canvasCtx, arrayOfData, rangeDataStart, rangeDataEnd, red, green, blue)	// trace le graphique en liant les points de valeurs dans arrayOfData
{
	let rangeData = rangeDataEnd - rangeDataStart;

	canvasCtx.strokeStyle = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
	canvasCtx.lineWidth = 3;
	canvasCtx.beginPath();
	canvasCtx.moveTo(0, (height - (arrayOfData[0] - rangeDataStart) * height / rangeData));	// début du graphique

	for(let i = 0; i < arrayOfData.length; i++)
	{
		canvasCtx.lineTo(i * (width / (arrayOfData.length - 1)), (height - (arrayOfData[i] - rangeDataStart) * height / rangeData));
	}

	canvasCtx.stroke();

	canvasCtx.lineTo(width, height);
	canvasCtx.lineTo(0, height);
	canvasCtx.moveTo(0, (height - (arrayOfData[0] - rangeDataStart) * height / rangeData));	// retour au début du graphique

	canvasCtx.fillStyle = 'rgba(' + red + ', ' + green + ', ' + blue + ', 0.5)';	// remplissage
	canvasCtx.fill();
}