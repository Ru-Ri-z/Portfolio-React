import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Iván Gorojovsky</h1>
                <p>Córdoba, Argentina</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And lets get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design By Iván Gorojovsky
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/iv%C3%A1n-gorojovsky-84577b184/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/Ru-Ri-z" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://www.facebook.com/ivan.gorojovsky/" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer
