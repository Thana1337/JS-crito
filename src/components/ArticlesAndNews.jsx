import React from 'react'
import SectionTitle from './generics/SectionTitle'
import Button from './generics/Button'
import ArticleOne from '../assets/img/article1.png'
import ArticleTwo from '../assets/img/article2.png'
import ArticleThree from '../assets/img/article3.png'
import Articles from './generics/Articles'

const ArticlesAndNews = () => {
  return (
    <div className="article-news">
    <div className="container">
        <div className="article-news-top">
            <div>
                <SectionTitle title="Article & News" description="Get Every Single Articles & News"/>
            </div>
            <div>
                <Button title="Browse Articles" type="trans-animation" url="/articles-&-news/browse-articles" />
            </div>
        </div>
        <div className="article-news-middle">
            <Articles img={ArticleOne} alt="Woman sitting by a table" title="How To Use Digitalization In The Classroom" categori="Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." url="/articles-&-news/how-to-use-digitalizaion-in-the-classroom" date="25" month="Mar"/>
            <Articles img={ArticleTwo} alt="Computer Screene showing chat GPT" title="How To Implement Chat GPT In Your Projects" categori="Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." url="/articles-&-news/how-to-implement-chat-gpt-in-your-projects" date="17" month="Mar"/>
            <Articles img={ArticleThree} alt="Woman sitting by a table" title="The Guide To Support Modern CSS Design" categori="Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." url="/articles-&-news/the-guide-to-support-modern-css-design" date="13" month="Mar"/>
        </div>
        <div className="article-news-bottom">
            <i className="fa-solid fa-circle active"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
        </div>
    </div>
</div>
  )
}

export default ArticlesAndNews