var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = prompt('Podaj imie');


	if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);}
else console.log('jest juz w tablicy');
	console.log(allNames);


	


