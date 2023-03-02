import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Blockquote } from "@yozora/react-blockquote";
//import { useEffect, useState } from "react";
//import AOS from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import { PlayCircleOutlineRounded } from "@mui/icons-material";
import "./index.css";
import "../../general/general.css";
import "./video.css";
import VideoEmbed from "./VideoEmbed";

const HeroSection = () => {
  /*useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);*/

  //const [show, setShow] = useState(false);
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  const showVideo = () => {
    return <VideoEmbed />;
  };

  return (
    <section className="hero d-flex align-items-center">
      <Container>
        <Row>
          <div className="col-xl-4">
            <h2 data-aos="fade-up">Health</h2>
            <h3 data-aos="fade-up">is the true wealth</h3>
            <Blockquote data-aos="fade-up" data-aos-delay="100">
              <p>
                Health is the greatest gift, contentment the greatest wealth,
                faithfulness the best relationship.
              </p>
              <p>– Buddha</p>
            </Blockquote>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <Button className="btn-watch-video" onClick={showVideo}>
                <PlayCircleOutlineRounded />
                <span>Watch Video</span>
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default HeroSection;
