import { motion } from 'framer-motion';
import { Linkedin, CheckCircle } from 'lucide-react';
import './Profile.css';

export default function Profile({ title, name, role, bio, links, subsections, id }) {
    return (
        <section className="profile section" id={id}>
            <div className="profile__container container">
                <motion.div
                    className="profile__content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    {title && <h2 className="profile__section-title">{title}</h2>}

                    <div className="profile__header">
                        <div className="profile__avatar">
                            <span>{name?.charAt(0) || 'V'}</span>
                        </div>
                        <div className="profile__info">
                            <h3 className="profile__name">{name}</h3>
                            <p className="profile__role">{role}</p>
                            {links && links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="profile__link"
                                >
                                    <Linkedin size={18} />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {bio && (
                        <div className="profile__bio">
                            {bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    )}

                    {subsections && subsections.map((subsection, index) => (
                        <div key={index} className="profile__subsection">
                            {subsection.title && <h4 className="profile__subsection-title">{subsection.title}</h4>}
                            {subsection.content && subsection.content.map((text, i) => (
                                <p key={i} className="profile__subsection-text">{text}</p>
                            ))}
                            {subsection.bullets && (
                                <ul className="profile__bullets">
                                    {subsection.bullets.map((bullet, i) => (
                                        <li key={i}>
                                            <CheckCircle size={18} />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
