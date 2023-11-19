import React, { useEffect, useState } from 'react'
import Articles from './Articles'

const ArticlesAPI = () => {

    const [articles,setArticles] = useState([]);

    const getArticles = async () => {

        const result = await fetch (`https://win23-assignment.azurewebsites.net/api/articles`)
        const data = await result.json()
        setArticles(data)
    };

    useEffect( () =>{
        getArticles();
    },[]);




  return (
    <>

         {
            articles.map((article) => {
                const publishedDate = new Date(article.published);
                const day = publishedDate.getDate();
                const month = publishedDate.getMonth() + 1;
                console.log(day)
            })
         }


         
        { 
        articles.map ( (article) => (

            <div key={article.id}>
                <Articles title={article.title} categori={article.category} description={article.content} img={article.imageUrl} url={""} alt="" date="" month=""/>
            </div>
            )
        )
        }
        
        </>
  )
}

export default ArticlesAPI