export const filterCoverBooks = (books) => {
    return books.filter((book) => {
        return book.formats["image/jpeg"] !== undefined
    })
}