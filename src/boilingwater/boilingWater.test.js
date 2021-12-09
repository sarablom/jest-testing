const { isWaterBoiling } = require('./boilingWater.js');

describe('function isWaterBoiling', () => {
    
    it('Return true when over 100 deg C', () => {
        //ofta en bra idé att testa med gränsvärden
        testBoiling(100, true);
    })
    
    it('Return false when under 100 deg C', () => {
        testBoiling(99, false);
    })

    function testBoiling (degrees, expected) {
        const testData = isWaterBoiling(degrees);

        expect(testData).toBe(expected);
    }

    it('Throw error when invalid input', () => {
        const testData = 'hej';
        const errorMedssage = 'Invalid data, type a number';

        expect( () => isWaterBoiling(testData)).toThrow(errorMedssage);
    })

    it('Throws an error for too low temperatures', () => {
        const absoluteZero = -273.15;
        const errorMessage = 'Temperatures can not be under absolute zero';

        expect(() => isWaterBoiling(-400)).toThrow(errorMessage)
    })
})