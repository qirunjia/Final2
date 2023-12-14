function req() {
	var url =
		"http://api.currencylayer.com/live?access_key=6a72fa7698f043b5046c5ffbc023150a&currencies=CAD,CNY,EUR,GBP,HKD,JPY";
	var currencyDataElement = document.getElementById("currencyData");

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			var currencyData = data.quotes;

			for (var key in currencyData) {
				var currency = key.substring(3); // 去掉前面的"USD"
				var rate = currencyData[key];

				var span = document.createElement("span");
				span.textContent = currency + ": " + rate;

				currencyDataElement.appendChild(span);
			}
		})
		.catch((error) => console.log(error));
}
req();
