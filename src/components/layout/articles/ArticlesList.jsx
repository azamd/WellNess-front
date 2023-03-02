import React from "react";
import useFetchArticleData from "./useFetchArticleData.js";
import { Link } from "react-router-dom";
import { Event } from "@mui/icons-material";
//import { LocationOn } from "@mui/icons-material";
//import { VisibilityIcon } from "@mui/icons-material";
import { PersonOutline } from "@mui/icons-material";
import "../doctors/drs.css";

const ArticlesList = () => {
  const { articles } = useFetchArticleData();

  return articles.map((article) => (
    <div key={article.articleId}>
      <div className="post-img">
        <img src={article.image} alt="" className="img-fluid" />
      </div>

      <h2 className="title">
        <Link to="">{article.title}</Link>
      </h2>
      <div className="meta-top">
        <ul>
          <li className="d-flex align-items-center">
            <Event />
            {article.publishDate}
          </li>
          <li className="d-flex align-items-center">
            <PersonOutline />
            Dr. {article.author.userFirstName} {article.author.userLastName}
          </li>
        </ul>
      </div>

      <div className="read-more mt-auto align-self-end">
        <Link to="">
          Read More<i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  ));
};
export default ArticlesList;
