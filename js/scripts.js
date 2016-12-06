

function getTriangleArea(a, h) {
	if (a>0 && h>0) {
		return (a*h/2);
	} else   {
		console.log('bledne dane');
	}
}

var a = prompt('Podaj zmienna a');
var h = prompt('Podaj zmienna h');

console.log( getTriangleArea(a,h) )

