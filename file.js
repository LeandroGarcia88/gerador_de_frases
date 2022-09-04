let text = document.getElementById("input-text");
let name = document.getElementById("input-name");
let output = document.getElementById("output");

		
function gerarFrase(){
	output.style.display = "block"
	output.innerHTML = "<q>" + text.value + "</q><br><br>" + "<em>" + name.value + "</em>";
	}