$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
})
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	})
	event.stopPropagation()
})
$("input[type='text'").keypress(function(event){
	if(event.which===13){
		var text = $(this).val()
		$(this).val("")
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+text+"</li")
	}
})
var n=true
$("h1").on("click", "#remove", function(){
	console.log("hi")
	$("input").fadeToggle()
	if(n==true){
	    $("#remove").removeClass("fa-times")
	    $("#remove").addClass("fa-plus")
	    n = false
	}
	else{
        $("#remove").removeClass("fa-plus")
	    $("#remove").addClass("fa-times")
	    n = true
	}
})