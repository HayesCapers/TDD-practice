
function fizzBuzz(value){
	result = ''

	if(isFizzy(value)){
		result += 'Fizz';
	} 	
	if(isBuzzy(value)){
		result += 'Buzz';
	} 
	if(isPoppy(value)){
		result += 'Pop';
	} 
	if(isSnappy(value)){
		result += 'Snap';
	} 
	if (result == ''){
		return value.toString();
	}
	return result

}

function isFizzy(input){
	return input % 3 === 0;
}

function isBuzzy(input){
	return input % 5 === 0;
}

function isPoppy(input){
	return input % 7 === 0;
}

function isSnappy(input){
	return input % 11 === 0;
}
