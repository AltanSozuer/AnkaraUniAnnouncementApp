
function firstLettersAsAString(text) {
    return text.split(' ').map(x => x[0]).join('');
}

export {
    firstLettersAsAString
}