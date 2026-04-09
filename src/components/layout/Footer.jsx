import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__container">

                {/* Top Row: Logo & Horizontal Nav */}
                <div className="footer__top">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <span className="footer__logo-icon"></span>
                            <span>VERITAS</span>
                        </Link>
                    </div>

                    <nav className="footer__nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/leadership">Leadership</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/why-veritas">Why Veritas</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>

                {/* Middle Row: Description & Contact Info */}
                <div className="footer__main">
                    <div className="footer__info">
                        <p className="footer__desc">
                            Strategic sourcing, quality assurance, and supply chain management for global home retailers.
                            <br /><br />
                            Your eyes and ears on the ground.
                        </p>
                        <div className="footer__socials">
                            <a href="https://www.linkedin.com/company/veritasconsulting-global/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer__columns">
                        <div className="footer__col">
                            <h4>Contact Us</h4>
                            <p>+91-9811339092</p>
                            <p>manmeitsikka@veritasconsulting.global</p>
                        </div>
                        <div className="footer__col">
                            <h4>Location</h4>
                            <p>Sigma 1, Greater Noida,</p>
                            <p>Uttar Pradesh, India</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Copyright & Extras */}
                <div className="footer__bottom">
                    <div className="footer__copyright">
                        © {currentYear} Veritas Consulting. All rights reserved.
                    </div>
                    <div className="footer__lang">
                        <span>En</span> <span>Es</span> <span>Fr</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
