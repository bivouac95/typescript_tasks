const phrase = 'Hello';

const repeat = (str: String, amount: number) => {
    let result = '';
    for (let i = 0; i < amount; i++) {
        result += str
    }
    return result;
}

console.log(repeat(phrase, 5));
