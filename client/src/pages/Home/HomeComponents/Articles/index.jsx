import React, {useState, useEffect} from 'react'
import Article from './Article'
import "./Articles.scss"
import { getArticles } from '../../../../api/article';

const Articles = () => {
  const [articles, SetArticles] = useState([]);

  useEffect(() => {
    getArticles(SetArticles);
  }, []);

  return (
    <div className='articles'>
      <div className="articles-header">
        <h2>Lenny’s Article</h2>
        <button>View Detail</button>
      </div>
      <div className="card-articles">
        {articles.map((article) => {
          return (
            <Article
              key={article.id}
              image={
                import.meta.env.VITE_BASE_URL +
                article?.attributes?.image?.data?.attributes?.url
              }
              title={article?.attributes?.title}
              description={article?.attributes?.description} 
              date={article?.attributes?.date}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Articles