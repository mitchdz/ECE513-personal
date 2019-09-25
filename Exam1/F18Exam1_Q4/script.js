var inputElements = document.getElementsByTagName("input");
for (var i = 0; i < inputElements.length; i++) {
	inputElements[i].addEventListener("change", addNumbers);
}

function addNumbers() {
	IntegerCalc = document.getElementById("integerCalc");
	let A = 0, B = 0, result = 0;
	if (IntegerCalc.checked) {
		A = parseInt(document.getElementById("inputA").value);
		B = parseInt(document.getElementById("inputB").value);
		result = A + B;
	}
	else {
		A = parseFloat(document.getElementById("inputA").value);
		B = parseFloat(document.getElementById("inputB").value);
		result = (A + B).toFixed(4);
	}
	let calcResult = document.getElementById("calcOutput");
	calcOutput.innerHTML = result;
}