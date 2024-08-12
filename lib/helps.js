export const euro = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "EUR"
})

export const numLength = (number) => {
    return number.toString().length;
}