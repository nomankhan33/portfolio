import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">{`<MnK/>`}</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#experience" className="footer__link">Experience</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.instagram.com/thisis_nomankhan/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/mohd-noman-khan/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://x.com/nomantwts" className="footer__social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Mohd Noman Khan. All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;