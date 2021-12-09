 const { add, convertFahrenheitToCelsius } = require('./script.js')

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

