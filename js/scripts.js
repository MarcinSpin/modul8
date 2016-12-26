$('body').append(this.$element);

function Button(text) {
    this.text = text || 'Hello';
    var btn1 = new Button('Hello!');
btn1.create(); 
}
Button.prototype = {
        create: function() {
            var self = this;
            this.$element = $('<button>');
            this.$element.text(this.text);
            this.$element.click(function() {
                alert(self.text);
            });
        }

    }


