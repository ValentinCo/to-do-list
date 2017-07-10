alert('Bienvenue');

// TOGGLE ENTRE HIDE AND SHOW EN CLIK SUR LE MEME BOUTON
// $("#aFaire").click(function() {
// 	$("#doneShow").toggle("slow")
// });

$(".aFaire").click(function() {
	$(".doneShow").toggle();


});


$(".fini").click(function(){
	$(".toDoShow").toggle();
})

$(".tout").click(function(){
	$(".doneShow, .toDoShow").show();
});