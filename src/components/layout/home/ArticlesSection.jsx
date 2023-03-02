//import React,{useState} from 'react'
import ArticlesList from '../articles/ArticlesList'

function ArticlesSection() {


  return (
    <section id="recent-posts" className="recent-posts">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Recent Articles</h2>

        </div>

        <div className="row gy-5">

          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="post-box">
              <ArticlesList />
            </div>
          </div>


        </div>

      </div>
    </section>
  );

}

export default ArticlesSection