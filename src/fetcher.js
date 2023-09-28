const BASE_URL = "http://localhost:3001"

export const fetcher = (url) => {
    fetch("BASE_URL + url")
      .then(Response => Response.json())
      .then(data => {
        return data
      })
}