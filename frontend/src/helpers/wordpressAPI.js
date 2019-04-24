const getPageContent = async (path) => {
  
  const realPath = path.split('/').pop()
  const slug =  realPath ? realPath : 'home' 

  try {
  //Fetch pageId with supplied slug or 'home' if none was provided
    let pageId = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/pages?slug=${slug}`)
      .then(res => res.json())
      .then(data => {
          return data[0].id;
      })

    return await fetch(`${process.env.WORDPRESS_URL}/wp-json/gutes-db/v1/${pageId}`)
      .then(res => res.json())
      .then(data => {
        return data.data;
     })
  } catch (e) {
    return null;
  }

}

export default getPageContent;
