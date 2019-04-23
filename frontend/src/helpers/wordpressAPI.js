const getPageContent = async (path) => {

  //Fetch pageId with supplied slug or 'index' if none was provided
  let pageId = await fetch(`http://localhost:8080/wp-json/wp/v2/pages?slug=${path ? path.substr(1) : 'index'}`)
    .then(res => res.json())
    .then(data => {
        return data[0].id;
    })

    return await fetch(`http://localhost:8080/wp-json/gutes-db/v1/${pageId}`)
      .then(res => res.json())
      .then(data => {
        return data.data;
      })
}

export default getPageContent;
