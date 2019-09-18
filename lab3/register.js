submitButton = document.getElementById("submit");
submitButton.addEventListener(onclick, validateForm);

function validateForm() {
	var password = document.getElementById("password").value;

	if (password.length < 10 || password.length > 20) {

	}

}


function displayErrors() {
	
}