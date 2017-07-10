
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



