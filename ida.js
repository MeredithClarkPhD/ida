$(document). ready(function(){

var quote1 = "“The way to right wrongs is to turn the light of truth upon them.”";

var quote2 = "”The people must know before they can act, and there is no educator to compare with the press.”";

$("img").click(function(){

	var currentQuote= $("h1").text();
	alert(currentQuote);

if(currentQuote == quote1){
//put the text of quote2 into the h1
 $("h1").text(quote2);
} else {
 //put the text of quote1 into the h1
 $("h1")text(quote1);
}


});








})