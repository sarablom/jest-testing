function isWaterBoiling (degrees) {

    if (degrees < -273.15) {
        throw new Error('Temperatures can not be under absolute zero')
    } else if (typeof(degrees) !== 'number') {
        throw new Error('Invalid data, type a number')
    } else if (degrees < 100) {
        return false;
    }

    return true;
}

module.exports = { isWaterBoiling }