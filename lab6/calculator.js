// vulnerability properties
var vulnproperties = [
    "AV",
    "AC",
    "PR",
    "UI",
    "scope",
    "conf",
    "integ",
    "avail",
    "health",
    "sens"
];

// vulnerability properties
var selectedValues = {
	"value": {
	    "AV":"",
	    "AC":"",
	    "PR":"",
	    "UI":"",
	    "scope":"",
	    "conf":"",
	    "integ":"",
	    "avail":"",
	    "health":"",
	    "sens":"",
	}
};

// add event listener to each button once page is loaded
document.addEventListener("DOMContentLoaded", (event) => {
	var buttons = document.getElementsByTagName('input');
	for (i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("change", updateScore);
	}
});


function calculateScore() {
	var buttons = document.getElementsByTagName('input');
	for (i = 0; i < buttons.length; i++) {
		if (buttons[i].checked) {
			let property = buttons[i].name;
			let value = buttons[i].value;
			selectedValues.value[property] = value
		}
	}

	let status = 0, base = 0, confidentiality = 0, integrity = 0, availability = 0;
	let vector = 0, complexity = 0, required = 0, interaction = 0, exploitability = 0;
	let baseConf = 0 , baseInt = 0, baseAvail = 0;



	status = selectedValues.value["scope"] == "scope_U" ? 1.0 : 1.08;
	complexity = selectedValues.value["AC"] == "AC_L" ? 0.77 : 0.44;
	interaction = selectedValues.value["UI"] == "UI_N" ? 0.85 : 0.62;


	//baseConf
	var conf = selectedValues.value["conf"];
	var sens = selectedValues.value["sens"];
	if (sens == "sens_N") {
	    if (conf == "conf_N") baseConf = 0;
	    if (conf == "conf_L") baseConf = 0.22;
	    if (conf == "conf_H") baseConf = 0.56;
	}
	else if (sens == "sens_L") {
	    if (conf == "conf_N") baseConf = 0;
	    if (conf == "conf_L") baseConf = 0.65;
	    if (conf == "conf_H") baseConf = 0.75;
	}
	else { //sens_H
	    if (conf == "conf_N") baseConf = 0;
	    if (conf == "conf_L") baseConf = 0.85;
	    if (conf == "conf_H") baseConf = 0.95;
	}

	//baseInt
	var hi = selectedValues.value["health"];
	var int = selectedValues.value["integ"];
	switch(hi) {
	  case "health_N":
	    if (int == "integ_N") baseInt = 0;
	    if (int == "integ_L") baseInt = 0.22;
	    if (int == "integ_H") baseInt = 0.56;
	    break;
	  case "health_L":
	    if (int == "integ_N") baseInt = 0.55;
	    if (int == "integ_L") baseInt = 0.60;
	    if (int == "integ_H") baseInt = 0.75;
	    break;
	  case "health_H":
	    if (int == "integ_N") baseInt = 0.85;
	    if (int == "integ_L") baseInt = 0.90;
	    if (int == "integ_H") baseInt = 0.95;
	  	break;
	} 

	//baseAvail
	var avail = selectedValues.value["avail"];
	switch(hi) {
	  case "health_N":
	    if (avail == "avail_N") baseAvail = 0;
	    if (avail == "avail_L") baseAvail = 0.22;
	    if (avail == "avail_H") baseAvail = 0.56;
	    break;
	  case "health_L":
	    if (avail == "avail_N") baseAvail = 0.55;
	    if (avail == "avail_L") baseAvail = 0.60;
	    if (avail == "avail_H") baseAvail = 0.65;
	    break;
	  case "health_H":
	    if (avail == "avail_N") baseAvail = 0.85;
	    if (avail == "avail_L") baseAvail = 0.90;
	    if (avail == "avail_H") baseAvail = 0.95;
	  	break;
	} 	

	var Avector = selectedValues.value["AV"];
	if (Avector == "AV_N") vector = 0.85;
	if (Avector == "AV_A") vector = 0.62;
	if (Avector == "AV_L") vector = 0.55;
	if (Avector == "AV_P") vector = 0.20;

	var priv = selectedValues.value["PR"];
	if (priv == "PR_N") required = 0.85;
	if (priv == "PR_L") required = 0.62;
	if (priv == "PR_H") required = 0.27;

	exploitability = vector * complexity * required * interaction;
	base = baseConf + baseInt + baseAvail;
	let score = status * ((3.326258289 * base) + (1.1 * exploitability));
	if (base == 0) score = 0; // set score to 0 if base is 0.
	if (score > 10)
		return 10;
	if (score < 0)
		return 0;
	return score;
}

function updateScore() {
	var flag = true;
	for(index in vulnproperties) {
		let property = vulnproperties[index];
		let queryString = 'input[name="' + property + '"]:checked';
		if(document.querySelector(queryString) == null) {
		    flag = false;
		}
	}
	if (!flag) return; // flag will be set to false if property not set.
	document.getElementById("warning").style.display = "none";
	let result = calculateScore();

	result = (Math.ceil(result * 10) / 10).toFixed(1);
	document.getElementById("score").innerHTML = result;

}