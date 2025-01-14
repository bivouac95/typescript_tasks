const numbers = [1, 2, 2, 3, 1, 4, 5, 10, 8, 11];

const evens = (num: number) => {
    return (num % 2 == 0)
}

console.log(numbers.filter(evens));
