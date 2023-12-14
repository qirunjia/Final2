var redSlider = document.getElementById("redSlider");
var greenSlider = document.getElementById("greenSlider");
var blueSlider = document.getElementById("blueSlider");
var div = document.getElementById("giftBg");


redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

function updateColor() {
	var redValue = redSlider.value;
	var greenValue = greenSlider.value;
	var blueValue = blueSlider.value;

	div.style.backgroundColor =
		"rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}

var imgElements = document.querySelectorAll(".col-img img");
var ribbonsElements = document.querySelectorAll(".ribbons img");
var decElements = document.querySelectorAll(".dec img");
var giftCapElement = document.querySelector(".gift-bg img");

imgElements.forEach(function (imgElement) {
	imgElement.addEventListener("click", function () {
		imgElements.forEach(function (img) {
			img.classList.remove("border-ac");
		});

		var imagePath = imgElement.getAttribute("src");

		giftCapElement.setAttribute("src", imagePath);

		imgElement.classList.add("border-ac");
	});
});

ribbonsElements.forEach(function (imgElement) {
	imgElement.addEventListener("click", function () {
		ribbonsElements.forEach(function (img) {
			img.classList.remove("border-ac");
		});

		imgElement.classList.add("border-ac");
	});
});
decElements.forEach(function (imgElement) {
	imgElement.addEventListener("click", function () {
		decElements.forEach(function (img) {
			img.classList.remove("border-ac");
		});

		imgElement.classList.add("border-ac");
	});
});
