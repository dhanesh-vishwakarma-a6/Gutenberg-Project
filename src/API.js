const API = process.env.REACT_APP_API_BASE

export const getAllBooks = async () => {
    return await fetch(`${API}/books`, { method: "GET" })
        .then(response => response.json())
        .catch(err => console.log(err))
}

// book by topic
export const getBooksByGenre = async (genreName) => {
    return await fetch(`${API}/books?topic=${genreName}`, { method: "GET" })
        .then(response => response.json())
        .catch(err => console.log(err))
}

// indivisual book
export const getBookById = async (bookId) => {
    return await fetch(`${API}/books/${bookId}`, { method: "GET" })
        .then(response => response.json())
        .catch(err => console.log(err))
}

// search by string
export const search = async (str) => {
    return await fetch(`${API}/books?search=${encodeURI(str)}`, { method: "GET" })
        .then(response => response.json())
        .catch(err => console.log(err))
}

// search by MIME
export const mime = async (mimeType) => {
    return await fetch(`${API}/books?mime_type=text%2F${mimeType}`, { method: "GET" })
        .then(response => response.json())
        .catch(err => console.log(err))
}
