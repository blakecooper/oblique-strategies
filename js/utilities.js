const NUMBER_OF_POSSIBLE_COLORS = 16581375;
const HEXIDECIMAL = 16;

/* Range: 0-255 */
const MINIMAL_DIFFERENCE_IN_BRIGHTNESS = 25;

function $(id) {
   	return document.getElementById(id);
}

function getRandomStrategy() {
	return strategies[random(strategies.length)];
}

function getRandomColor() {
	return hexidecimal(random(NUMBER_OF_POSSIBLE_COLORS));
}

function random(value) {
	return Math.floor(Math.random() * value);
}

function hexidecimal(value) {
	return value.toString(HEXIDECIMAL);
}
