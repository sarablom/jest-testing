function checkIsWord (maybeString) {
    const regexWatchForLetters = '^[a-zA-ZäöüßÄÖÜ]+$';

 if (typeof maybeString === 'string' && maybeString !== '' && maybeString.match(regexWatchForLetters)) {
     return true;
 } else {
     return false;
 }
}

function checkShareOfVowels (string) {
    const vowels = /[aeiouåäö]/gi;
    const consonant = /[qwrtplkjhgfdszxcvbnm]/gi;

    if (string.match(vowels).length >= string.match(consonant).length) {
        return true;
    } else {
        return false;
    }
}

function trimString (string) {
    const trimmedString = string.trim();
    return trimmedString;
}

function capitalizeString (string) {
    if (typeof string !== 'string') {
        return false;
    } else {
        return string[0].toUpperCase() + string.slice(1);
    }
}

module.exports = { checkIsWord, checkShareOfVowels, trimString, capitalizeString }