
describe('Roman Numeral Test', ()=>{
	function romanNumeralExpect(input,expected){
		it('Should return string' + expected + 'for input' + input, ()=>{
			expect(romanNumeralConverter(input)).toEqual(expected);
		});	
	}

	romanNumeralExpect(1,'I');

});

