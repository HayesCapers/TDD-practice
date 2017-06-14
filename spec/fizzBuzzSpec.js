// FizzBuzz
// -Print the numbers 1-100 
// -if the number is divisble by 3, print Fizz instead
// -if the number is divisble by 5, print Buzz instead
// -if the number is divisible by both print both.

// 1 = 1
// 2 = 2
// 3 = Fizz
// 4 = 4
// 5 = Buzz
// 6 = Fizz
// 15 = FizzBuzz

describe('FizzBuzz', ()=>{
	function fizzBuzzExpect(input,expected){
		it('Should return string' + expected + 'for input' + input, ()=>{
			expect(fizzBuzz(input)).toEqual(expected);
		});	
	}

	fizzBuzzExpect(1,'1');	
	fizzBuzzExpect(2,'2');
	fizzBuzzExpect(3,'Fizz');
	fizzBuzzExpect(6,'Fizz');
	fizzBuzzExpect(5,'Buzz');
	fizzBuzzExpect(7,'Pop');
	fizzBuzzExpect(105,'FizzBuzzPop');
	fizzBuzzExpect(1155,'FizzBuzzPopSnap');

});