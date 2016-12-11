
function rysujchoinke(poziom) {
	var star = '';
	
	for(var n=1; n<=poziom; n++) {
		for (var s = 0; s<poziom-n; s++) {star += ' ';}
		for (var m = 0; m <n*2-1 ; m++) {star += '*';}
		
	star += "\n" 
	}

return star;
}

console.log(rysujchoinke(10));
