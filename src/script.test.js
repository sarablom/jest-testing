 const { add, convertFahrenheitToCelsius, checkIsWord } = require('./script.js')

 describe('function add', () => {
    it('returns the sum of a and b', () => {
        //Arrange - plocka fram testdata
        const testA = 5, testB = 2
        const expectedSum = testA + testB
    
        //Act - genomföra testet
        const actualSum = add(testA, testB)
    
        //Assert - inbyggd function
        expect(actualSum).toBe(expectedSum)
     })
 })

 describe('function convertFahrenheitToCelsius', () => {
    it('change degrees from fahrenheit to celsius', () => {
        const testDegrees = 100;
        const expectedDegrees = (testDegrees - 32) / 1.8;
     
        const convertedDegrees = convertFahrenheitToCelsius(testDegrees);
   
        expect(convertedDegrees).toBeCloseTo(expectedDegrees);
    })

    it('throw an error if degree is not a number', () => {
        const testData = null;
        expect(() => convertFahrenheitToCelsius(testData)).toThrow()
    })
 })

 describe('function checkIsWord', () => {
     it('check if string', () => {
        const testString = 'Hello';
        const testingString = checkIsWord(testString)
   
        expect(testingString).toBe(true);
     })

     it('check if string is not empty', () => {
         const testString = 'Hello';
         const testingEmptyString = checkIsWord(testString);

         expect(testingEmptyString).toBe(true);
     })

     it('check if only letters', () => {
         const testString = 'rere';
         
         const testingForLetters = checkIsWord(testString);

         expect(testingForLetters).toBe(true);
     })
 })

 
