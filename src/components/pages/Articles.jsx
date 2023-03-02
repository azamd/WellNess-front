import React from 'react';
import{Link} from 'react-router-dom';
import {Footer, Header} from '../layout/general/index'
import ArticlesList from '../layout/articles/ArticlesList'
import{useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

const Articles = () =>
{

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


return(
<div>
<Header />
  <main id="main">

    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url(/assets/img/health.jpg)"}} >
      <div className="container position-relative d-flex flex-column align-items-center">

        <h2>Health Daily</h2>
        <ol>
          <li><Link to="/Home">Home</Link></li>
          <li>Articles & tips</li>
        </ol>

      </div>
    </div>

    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

           <div className="row g-5">

               <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

                  <div className="row gy-5 posts-list">

                   <div className="col-lg-6">
                      <article className="d-flex flex-column" >
                         <ArticlesList/>
                     </article>
                  </div>

                </div>

            
            </div>

          

           </div>

      </div>
    </section>






</main>
<Footer/>
 <div>


  
</div>
</div>
)

};export default Articles