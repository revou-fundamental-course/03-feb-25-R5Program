const displayInput = document.getElementById("display");
const displayHasil = document.getElementById("hasil");
const displayCara = document.getElementById("cara");

function konversi() {
	const hasil = displayInput.value * (9 / 5) + 32;
	displayHasil.value = `${hasil}\u00B0F`;
	displayCara.value = `${displayInput.value}\u00B0C * (9/5) + 32 = ${hasil}\u00B0F`;
}

function reset() {
	displayInput.value = "";
	displayHasil.value = "";
	displayCara.value = "";
}
