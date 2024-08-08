const NUMBER_OF_POSSIBLE_COLORS = 16777215;
const HEXIDECIMAL = 16;

function $(id) {
   	return document.getElementById(id);
}

function getRandomStrategy() {
	return strategies[random(strategies.length)];
}

function getRandomColors() {
	let colors = { 'text': getRandomColor(), 'background': getRandomColor() };
	
	while(!isAcceptableContrast(colors.text,colors.background,true)) {
		colors = { 'text': getRandomColor(), 'background': getRandomColor() };
	}

	return colors;
}

function getRandomColor() {
	return random(NUMBER_OF_POSSIBLE_COLORS);
}

function random(value) {
	return Math.floor(Math.random() * value);
}

function hexidecimal(value) {
	return value.toString(HEXIDECIMAL);
}
