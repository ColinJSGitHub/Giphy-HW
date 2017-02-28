	var topics = ["dog", "cat", "badger", "dolphin", "shark", "penguin", "monkey"]

	for (var i = 0; i < topics.length; i++) {

		var animalbutton = $("<button>"+topics[i]+"</button>");
		animalbutton.attr("type", "button");
		animalbutton.attr("class", "btn btn-primary btn-med");
		animalbutton.attr("bo
		

		$("body").append(animalbutton);