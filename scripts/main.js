async function apiCall(url) {


    //add api call logic here
    let res = await fetch(url)
    let data = await res.json()
    // console.log('data: ', data);
    return data
}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach((elem) => {

        let title = document.createElement('h4')
        title.innerText = elem.title
        let imageUrl = document.createElement('img')
        imageUrl.src = elem.urlToImage
        let description = document.createElement('p')
        description.innerText = elem.description
 
        // console.log(title,imageUrl,description)
        let parent = document.createElement('div')
        parent.setAttribute('id','Blog')
        parent.append(title,description,imageUrl)

        main.append(parent);
    })
   

}

export { apiCall, appendArticles }