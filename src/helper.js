export const filterCoverBooks = (books) => {
    return books.filter((book) => {
        return book.formats["image/jpeg"] !== undefined
    })
}

export const formatName = (nameStr) => {
    const name = nameStr.split(",")
    return `${name[1]} ${name[0]}`
}