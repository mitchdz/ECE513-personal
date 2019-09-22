
//f17 Exam1

//1.6
var f17ex1String = "F16EX1-"
var salesTaxRates = {
	85721: 8.6,
	85739: 6.7,
	85749: 61
};

console.log(f17ex1String + "1.6:" + JSON.stringify(salesTaxRates));

// 1.7
var salesTaxRates = {85721: 8.6,85749: 6.1,85739: 6.7,85749: 6.1};
for (var x in salesTaxRates) {console.log(f17ex1String + "1.7: " + x);}

// 1.8
var totalSum = "10";totalSum = totalSum * "2";totalSum = totalSum + "5";
console.dir(totalSum);

// 2.3
var intList = [1, 2, 3, 4];
var userScoresList = "";
for (var int in intList) {
	userScoresList += intList[int] + ",";
}
userScoresList = userScoresList.slice(0, -1);
console.log(userScoresList);

document.querySelectorAll("button")[0].addEventListener("click", calculate);
document.getElementById("userInput").addEventListener("change", validateInput);

function calculate() {
	console.log("woo");
}

function validateInput() {
	let input = document.getElementById("userInput").value;
	if (!(input > 21 && input < 65)) {
		let calcOtputDiv = document.getElementById("calcOutput");
		calcOtputDiv.innerHTML = '<span class="Error">Error: Invalid input.</span>';
	}
}


// FALL 2018

//1.7
var bookDetails = "";
var book = {title: "Hunt for Red October",author: "Tom Clancy",year: 1984,pages: 387};for(var i in book) { bookDetails += i + " ";}console.log(bookDetails);

let numDivs = document.getElementsByTagName("div").length;
console.log("F18EX1-1.8: " + numDivs);

//1.10
var Q1_10re = /^\w\w*-\d\d?/; 

var strings = ["xy-33a","1af-33a",".get-1","a-1"];
for (var string in strings) {
	if (Q1_10re.test(strings[string]))
		console.log("F18EX1-1.10: " + strings[string]);
}

//2.3
let userInputID = document.getElementById("userInput");
userInputID.style.display = "none";

//2.4
var mpgHistory = [ 33.2, 24.5, 27.4, 19.0 ];var avgMpg = 0.0;

for (var mpg in mpgHistory) {
	avgMpg +=mpgHistory[mpg];
}
avgMpg = avgMpg/mpgHistory.length;
console.log(avgMpg);