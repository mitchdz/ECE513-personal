submitButton = document.getElementById("submit");
submitButton.addEventListener("click", validateForm);


function validateForm() {
	let errorBorder = "2px solid red";
	let noerrBorder = "1px solid #aaa";

	let errorFound = false;
	let errorDiv = document.getElementById('formErrors');

	let errorHTML = "";

	errorHTML += "<ul class=\"error\">";

	/* make sure name is >= 1 character */
	let nameDiv = document.getElementById("fullName");
	let name = nameDiv.value;
	if (name.length < 1) {
		errorHTML += "<li>Missing full name.</li>";
		nameDiv.style.border = errorBorder;
		errorFound = true;
	} else nameDiv.style.border = noerrBorder;


	/* make sure email address was probided */
	let emailDiv = document.getElementById("email");
	let email = emailDiv.value;
	let re =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
	if (!re.test(email)) {
		errorHTML += "<li>Invalid or missing email address.</li>"
		emailDiv.style.border = errorBorder;
		errorFound = true;
	} else emailDiv.style.border = noerrBorder;

	/* check that password is between 10 and 20 characters */
	let passwordDiv = document.getElementById("password");
	let password = passwordDiv.value;
	if (password.length < 10 || password.length > 20) {
		errorHTML += "<li>Password must be between 10 and 20 characters.</li>";
		passwordDiv.style.border = errorBorder;
		errorFound = true;
	} else passwordDiv.style.border = noerrBorder;

	/* check password for one lowercase */
	re = /(?=.*[a-z])/;
	if (!re.test(password)) {
		errorHTML += "<li>Password must contain at least one lowercase character.</li>";
		passwordDiv.style.border = errorBorder;
		errorFound = true;
	}else passwordDiv.style.border = noerrBorder;

	/* check password for one uppercase */
	re = /(?=.*[A-Z])/;
	if (!re.test(password)) {
		errorHTML += "<li>Password must contain at least one uppercase character.</li>";
		passwordDiv.style.border = errorBorder;
		errorFound = true;
	}else passwordDiv.style.border = noerrBorder;	

	/* check password for at least one digit */
	re = /(?=.*\d)/;
	if (!re.test(password)) {
		errorHTML += "<li>Password must contain at least one digit.</li>";
		passwordDiv.style.border = errorBorder;
		errorFound = true;
	}else passwordDiv.style.border = noerrBorder;		



	/* make sure password and passwordConfirm match */
	let passwordConfirmDiv = document.getElementById("passwordConfirm");
	let passwordConfirm = passwordConfirmDiv.value;
	if (passwordConfirm != password) {
		errorHTML += "<li>Password and confirmation password don't match.</li>";
		passwordConfirmDiv.style.border = errorBorder;
		errorFound = true;
	} else passwordConfirmDiv.style.border = noerrBorder;



	errorHTML += "</ul>";
	errorDiv.innerHTML = errorHTML;
	if (errorFound) {
		errorDiv.style.display = 'block';
	}
	else {
		errorDiv.style.display = 'none';
	}
}


function displayErrors() {
	
}