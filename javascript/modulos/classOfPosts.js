class PostCreator {
    constructor(bodyOptions, title){
        this.body = {text: bodyOptions.text, img: bodyOptions.img}
        this.title = title
    }
}

function PublicationMethod(post, postContainer) {
    let publication = document.createElement("div")
    publication.innerHTML = `
    <div>
        <h3>${post.title}</h3>
        <p>${post.body.text}</p>
        <p>${post.body.img}</p>
    <div>
    `
    postContainer.appendChild(publication)
}
