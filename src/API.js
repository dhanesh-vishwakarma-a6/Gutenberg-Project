const API = process.env.REACT_APP_API_BASE

// book by topic
export const getBooksByGenre = (genreName) => {
    return fetch(`${API}/books?topic=${genreName}`, { method: "GET" })
        .then(response => response.json())
        .catch(err => console.log(err))
}

// indivisual book
export const getBookById = (bookId) => {
    return fetch(`${API}/books/${bookId}`, { method: "GET" })
        .then(response => response.json())
        .catch(err => console.log(err))
}

// search by string
export const search = (str) => {
    return fetch(`${API}/books?search=${encodeURI(str)}`, { method: "GET" })
        .then(response => response.json())
        .catch(err => console.log(err))
}

// search by MIME
export const mime = (mimeType) => {
    return fetch(`${API}/books?mime_type=text%2F${mimeType}`, { method: "GET" })
        .then(response => response.json())
        .catch(err => console.log(err))
}
