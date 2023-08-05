import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/images/logov2.png'

function NavBar() {
    const [ activeLink, setActiveLink ] = useState('home')
    const [ scrolled, setScrolled ] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onClickActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <>
            <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" className='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onClickActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? "active navbar-link" : "navbar-link"} onClick={() => onClickActiveLink('about')}>About me</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onClickActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#work" className={activeLink === 'work' ? "active navbar-link" : "navbar-link"} onClick={() => onClickActiveLink('work')}>Experience</Nav.Link>
                            <Nav.Link href="#edu" className={activeLink === 'edu' ? "active navbar-link" : "navbar-link"} onClick={() => onClickActiveLink('edu')}>Education</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => onClickActiveLink('projects')}>Projects</Nav.Link>
                            <Nav.Link href="#contact" className={activeLink === 'contact' ? "active navbar-link" : "navbar-link"} onClick={() => onClickActiveLink('contact')}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar