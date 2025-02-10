const displayInput = document.getElementById("display");
const displayHasil = document.getElementById("hasil");
const displayCara = document.getElementById("cara");
const labelInput = document.getElementById("input");
const labelHasil = document.getElementById("output");

let celciusToFahrenheit = true;

function konversi() {
	const inputValue = parseFloat(displayInput.value);
	if (isNaN(inputValue)) {
		displayHasil.value = "Masukkan angka!";
		displayCara.value = "";
		return;
	}

	let hasil, cara;
	if (celciusToFahrenheit) {
		hasil = `${(inputValue * 9) / 5 + 32}\u00B0F`;
		cara = `${inputValue}\u00B0C * (9/5) + 32 = ${hasil}`;
	} else {
		hasil = `${(((inputValue - 32) * 5) / 9).toFixed(2)}\u00B0C`;
		cara = `(${inputValue}\u00B0F - 32) * 5/9 = ${hasil}`;
	}
	displayHasil.value = hasil;
	displayCara.value = cara;
}

function reset() {
	displayInput.value = "";
	displayHasil.value = "";
	displayCara.value = "";
}

function reverse() {
	celciusToFahrenheit = !celciusToFahrenheit;

	if (celciusToFahrenheit) {
		labelInput.innerHTML = "Celcius (&deg;C)";
		labelHasil.innerHTML = "Fahrenheit (&deg;F)";
	} else {
		labelInput.innerHTML = "Fahrenheit (&deg;F)";
		labelHasil.innerHTML = "Celcius (&deg;C)";
	}
	reset();
}
