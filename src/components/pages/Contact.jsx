import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header } from "../layout/general/index";
import { useEffect } from "react";
import MyMap from "./MyMap";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header />
      <main id="main">
        <div
          className="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: "url(/assets/img/contact.jpg)" }}
        >
          <div className="container position-relative d-flex flex-column align-items-center">
            <h2>Get in touch</h2>
            <ol>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>Contact</li>
            </ol>
          </div>
        </div>

        <section id="contact" class="contact">
          <div class="container position-relative" data-aos="fade-up"></div>
          <div class="row gy-4 d-flex justify-content-end">
            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <h4>Where to find us</h4>
              <MyMap />
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="250">
              <Container>
                <Form>
                  <Form.Group controlId="form.Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" />
                  </Form.Group>
                  <Form.Group controlId="form.Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="form.Object">
                    <Form.Label>Object</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="form.Textarea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
                <div className="my-3">
                  <Button>Send Message</Button>
                </div>
              </Container>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <div>
        <Link to="." className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>

      </div>
    </div>
  );
};
export default Contact;
