function Telefon(marka, cena, kolor, wyswietlacz) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor; 
	this.wyswietlacz = wyswietlacz;
}

Telefon.prototype.printInfo = function() {
		console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', cena to ' + this.cena + ' a wielkosc wyswietlacza to' + this.wyswietlacz +' cali.');
}

var iPhone6S = new Telefon('Apple', 2250, 'srebrny', 5);

iPhone6S.printInfo();


