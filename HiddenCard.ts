const cardNumber = '1234567812345678'

const getHiddenCard = (cardNumber: String, starsAmount = 4) => {
    return `${'*'.repeat(starsAmount)}${cardNumber.slice(-4, -1) + cardNumber.slice(-1)}`
}

console.log(getHiddenCard(cardNumber, 5));