function button_action()
{
	let title_content = document.getElementById('title_note').value;
	let note_content = document.getElementById('yournote').value;
	let colour_content = document.getElementById('colours').value;
	let add_button = document.getElementById('add_note_btn');
	
	rxjs.fromEvent(add_button, 'click')
		.subscribe(() => add_note_function()
	);
	
	const node = document.createElement("div");
	
	node.style.backgroundColor = colour_content;

	var input = document.createElement("input");
	input.type = "button";
	input.className = "button";
	input.value = "Edit Note";
	
	rxjs.fromEvent(input, 'click')
	  .subscribe(() => edit_note_function()
	);
	
	function edit_note_function()
	{
		var title = window.prompt("Enter new title : ");
			
		var content = window.prompt("Enter new content : ");
		
		node.innerHTML = title + "<br><br><br>" + content;
		node.appendChild(document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ));
		node.appendChild(input);
		node.appendChild(input_2);
			
	}
	
	var input_2 = document.createElement("input");
	input_2.type = "button";
	input_2.className = "button";
	input_2.value = "Delete Note";
	rxjs.fromEvent(input_2, 'click')
	  .subscribe(() => delete_note_function()
	);
	
	function delete_note_function()
	{
		node.remove();
	}
	
	function add_note_function()
	{
		node.innerHTML = title_content + "<br><br><br>" + note_content;
		node.appendChild(document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ));
		node.appendChild(input);
		node.appendChild(input_2);

	}
	document.getElementById("DisplayNote").appendChild(node);
	
}
