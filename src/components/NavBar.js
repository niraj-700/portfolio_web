import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedin from "../assets/img/nav-icon1.svg";
import instagram from "../assets/img/instagram.svg";
import mail from '../assets/img/envelope.svg';
import phone from '../assets/img/phone.svg'
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
import { Linkedin } from "react-bootstrap-icons";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" /*className={scrolled ? "scrolled" : ""}*/>
        <Container>
          <Navbar.Brand href="/">
            <div className="logo">  
              Port<span>folio.</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
              <div className="social-icon">
                <a href="#"><img src={linkedin} alt="" /></a>
                <a href="#"><img src={mail} alt="" /></a>
                <a href="#"><img src={phone} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
              </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
