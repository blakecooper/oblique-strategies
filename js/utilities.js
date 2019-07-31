const NUMBER_OF_POSSIBLE_COLORS = 16581375;
const HEXIDECIMAL = 16;

function $(id)
   	{
   	return document.getElementById(id);
   	}

function getRandomStrategy()
	{
	return strategies[random(strategies.length)];
	}

function getRandomColor()
	{
	return random(NUMBER_OF_POSSIBLE_COLORS).toString(HEXIDECIMAL);
	}

function random(value)
	{
	return Math.floor(Math.random() * value);
	}
