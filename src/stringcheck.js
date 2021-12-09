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

module.exports = { checkIsWord, checkShareOfVowels }