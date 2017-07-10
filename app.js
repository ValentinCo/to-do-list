alert('Bienvenue');

// // TOGGLE ENTRE HIDE AND SHOW EN CLIK SUR LE MEME BOUTON
// // $("#aFaire").click(function() {
// // 	$("#doneShow").toggle("slow")
// // });

// $(".aFaire").click(function() {
// 	$(".doneShow").toggle();


// });


// $(".fini").click(function(){
// 	$(".toDoShow").toggle();
// })

// $(".tout").click(function(){
// 	$(".doneShow, .toDoShow").show();
// });

// // $(".envoi").change(function(){
// // $(".tache1").val($("#ajoutTache"));
// //     });




// $("#envoi").click(function(){
// 	var attr = $("#ajoutTache").val();


// 	$("#tache1").html($(attr));
// });




//     


var toDo = ["ticket1", "ticket2"]
var done = ["ticket3"]
$("#toDo").html(toDo)

$("#envoi").click(function(){
	var attr = $("#ajoutTache").val();
	toDo.push(attr);
	$("#toDo").html(toDo);

})
$("#fini").click(function(){
console.log(toDo)})
