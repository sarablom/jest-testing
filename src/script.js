
function add(x, y) {
    return x + y;
}

function convertFahrenheitToCelsius(degrees) {
    if( (typeof degrees) !== 'number') {
        throw new Error('Temperature must be a number')
    }

    const fahrenheitToCelsius = (degrees - 32) / 1.8;
    return fahrenheitToCelsius;
}

function checkIsWord (string) {
    const regex = '^[a-zA-ZäöüßÄÖÜ]+$'
 if (typeof string === 'string' && string !== '' && string.match(regex)) {
     return true;
 } else {
     return false;
 }
}

module.exports = { add, convertFahrenheitToCelsius, checkIsWord }