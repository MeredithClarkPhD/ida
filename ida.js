$(document). ready(function(){

var quote1 = "“The way to right wrongs is to turn the light of truth upon them.”";

var quote2 = "“The people must know before they can act, and there is no educator to compare with the press.”";

$("img").click(function(){

	var currentQuote= $("h1").text();


if(currentQuote == quote1){
 $("h1").hide(1000)
 $("h1").text(quote2);
 $("h1").show(1000)
} 
if(currentQuote == quote2){
 $("h1").hide(1000)
 $("h1").text(quote1);
 $("h1").show(1000)
}


});








})