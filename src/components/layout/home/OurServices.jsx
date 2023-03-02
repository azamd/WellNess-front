import React from "react";
import { Link } from "react-router-dom";
//import { Vaccines } from "@mui/icons-material/Vaccines";
//import { Newspaper } from "@mui/icons-material/Newspaper";
//import { Forum } from "@mui/icons-material";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const OurServices = () => {
  const services = [
    {
      id: 1,
      delay: "100",
      icon: "Vaccines",
      link: "/Doctors",
      img: "assets/img/knowledge.jpg",
      text02:
        "Linking you with the finest doctors of diverse specialties to offer you the best medical services and assistance.",
      text03: "Medical assistance",
    },
    {
      id: 2,
      delay: "200",
      icon: "Newspaper",
      link: "/Articles",
      img: "assets/img/health.jpg",
      text02:
        "Your health and well-being is our goal and priority, for that we will provide you with the latest updates, news and articles on everything that concerns your ideal health.",
      text03: "Articles, News and tips",
    },
    {
      id: 3,
      delay: "300",
      icon: "Forum",
      link: "/Forum",
      img: "assets/img/blog/blog-2.jpg",
      text02:
        "An open space for users to ask their questions and discuss their concerns on diverse health topics.",
      text03: "Roundtable",
    },
  ];

  return (
    <section id="services-list" className="services-list">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Services</h2>
        </div>

        <div className="row gy-5">
          {services.map((data) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="200" image={data.img} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Link to={data.link}>{data.text03}</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.text02}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurServices;
