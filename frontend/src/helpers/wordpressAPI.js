const getPageContent = (path) => {
  let pageId = null;
  let response = [];

  //Fetch pageId with supplied slug or 'index' if none was provided
  fetch(`http://localhost:8888/wp-json/wp/v2/pages?slug=${path ? path : 'index'}`)
    .then(res => res.json())
    .then(data => {
      if(data[0]) {
        pageId = data[0].id;
      }
    })

  if(pageId) {
    fetch(`http://localhost:8888/wp-json/gutes-db/v1/${pageId}`)
      .then(res => res.json())
      .then(data => {
        response = data.data;
      })
  }
    
  return response;
}

export default getPageContent;