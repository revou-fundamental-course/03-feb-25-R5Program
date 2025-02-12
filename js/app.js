// Pengambilan tag elemet
const displayInput = document.getElementById("display");
const displayHasil = document.getElementById("hasil");
const displayCara = document.getElementById("cara");
const labelInput = document.getElementById("input");
const labelHasil = document.getElementById("output");

let celciusToFahrenheit = true; //Mengubah kondisi awal

function konversi() {
	const inputValue = parseFloat(displayInput.value);
	if (isNaN(inputValue)) {
		displayHasil.value = "Masukkan angka!";
		displayCara.value = "";
		return;
	}

	// Kondisi untuk Reverse
	let hasil, cara;
	if (celciusToFahrenheit) {
		hasil = `${(inputValue * 9) / 5 + 32}\u00B0F`;
		cara = `${inputValue}\u00B0C * (9/5) + 32 = ${hasil}`;
	} else {
		hasil = `${(((inputValue - 32) * 5) / 9).toFixed(2)}\u00B0C`;
		cara = `(${inputValue}\u00B0F - 32) * 5/9 = ${hasil}`;
	}
	// Menampilkan ke Inputan hasil dan cara
	displayHasil.value = hasil;
	displayCara.value = cara;
}

// Fungsi Reset
function reset() {
	displayInput.value = "";
	displayHasil.value = "";
	displayCara.value = "";
}

// Fungsi Reverse
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
