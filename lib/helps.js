export const euro = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "EUR"
})

export const numLength = (number) => {
    return number.toString().length;
}

export const toPercent = (number) => {
    return Number(number/100).toLocaleString(undefined, {
        style: 'percent', minimumFractionDigits: 2
    })
}