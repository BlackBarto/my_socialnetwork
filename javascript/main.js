let form = document.getElementById("form-Post")
let title = document.getElementById("title")
let text_body = document.getElementById("bodyText")
let postsContainer = document.getElementById("post-container")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let titleFinal = title.value
    let text_bodyFinal = text_body.value
    let body = {text: text_bodyFinal, img: false}
    let publication = new PostCreator(body, titleFinal)
    PublicationMethod(publication, postsContainer)
})
