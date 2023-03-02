import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Manage from "./components/pages/Manage";
import Doctors from "./components/pages/Doctors";
import SingleDoctor from "./components/pages/SingleDoctor";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Articles from "./components/pages/Articles";
import Forum from "./components/pages/Forum";
import Contact from "./components/pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateArticle from "./components/layout/manage/CreateArticle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="/Manage/add-article/:id" component={<CreateArticle />} />
        {/* <Route path="/Manage/update-article/:id" component={<UpdateArticle />} /> */}
        <Route path="/SingleDoctor/:id" element={<SingleDoctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
