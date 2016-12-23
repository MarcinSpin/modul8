$(function(){ 
	var carouselList = $("#carousel");
	setInterval(function(){
		carouselList.find('ul').animate({'marginLeft':-400}, 500, function() {
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},3000);
});
