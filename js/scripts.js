
function Button(text) {
    this.text = text || 'Hello';
    this.create(); // do metody create odwołujesz się bezpośrednio poprzez this
}

Button.prototype.create = function() {
    var self = this;
    this.$element = $('<button>');
    this.$element.text(this.text);
    this.$element.click(function() {
        alert(self.text);
    });
    $('body').append(this.$element);
};


var btn1 = new Button('Hello!'); // nie możesz wywoływać klasy bezpośrednio wewnątrz samej siebie, doprowadziło by to do nieskończonej pętli
