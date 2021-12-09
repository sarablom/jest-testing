
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


module.exports = { add, convertFahrenheitToCelsius }