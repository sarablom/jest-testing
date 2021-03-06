const { checkIsWord, checkShareOfVowels, trimString, capitalizeString } = require('./stringcheck.js')


describe('function checkIsWord', () => {
    it('check if string', () => {
       // const testString = 'Hello';
       // const testingString = checkIsWord(testString)
  
       // expect(testingString).toBe(true);
       testWord('Hello', true);
    })

    it('check if string is not empty', () => {
       //  const testString = 'Hello';
       //  const testingEmptyString = checkIsWord(testString);
       //  expect(testingEmptyString).toBe(true);
       testWord('', false)
    })

    it('check if only letters', () => {
       //  const testString = 'rere';
       //  const testingForLetters = checkIsWord(testString);
       //  expect(testingForLetters).toBe(true);
       testWord('rere!', false)
    })

    function testWord(testData, expectedResult) {
        const actual = checkIsWord(testData);
    
        expect(actual).toBe(expectedResult)
    }
})

describe('function checkShareOfVowels', () => {
   it('check amount of vowels', () => {

       const testString = 'öööödddd';
       const testingForVowels = checkShareOfVowels(testString);

       expect(testingForVowels).toBe(true);
   })
})

describe('funtion trimString', () => {
    it('trim whitespace in string', () => {
        const testString = ' hej ';

        const testRemoveWhiteSpace = trimString(testString);

        expect(testRemoveWhiteSpace).toBe('hej');
    })
})

describe('function capitalizeString', () => {
    it('make sure that the input is a string', () => {
        testWord('hello', 'Hello');
    })

    it('capitalize the first letter in a word', () => {
        const testValue = 'pelle';

        const capitalizedLetterTest = capitalizeString(testValue);

        expect(capitalizedLetterTest).toBe('Pelle');
    })

    function testWord(testData, expectedResult) {
        const actual = capitalizeString(testData);
    
        expect(actual).toBe(expectedResult)
    }
})
