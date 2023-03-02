import * as React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [accords] = useState([
    {
      id: 1,
      title: "Our mission",
      description:
        "Quality medical services provided by competent doctors and health experts in one click away.",
    },
    {
      id: 2,
      title: "Our values",
      description:
        "Dedication to deliver quality and continuous efficiency to our clients, therefore their health, well-being and satisfaction is our highest priority and main target.",
    },
    {
      id: 3,
      title: "Our goals",
      description:
        "Making medical assistance, health guidance and efficient services way more accessable.",
    },
  ]);

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4" data-aos="fade-up">
          <div className="col-lg-4">
            <img src="assets/img/doc2.jpg" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-8">
            <div className="content ps-lg-5">
              <h3>Wellness in few words</h3>
              <p>
                Wellness' mission is defined in its name, we aim to offer the
                finest medical services to our clients by linking them with a
                handful of competent doctors and health experts in numerous
                fields.
              </p>
              {accords.map((data) => (
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      {data.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{data.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
