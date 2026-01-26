import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './BulletedSection.css';

export default function BulletedSection({ title, lead, bullets, footerText, id }) {
    return (
        <section className="bulleted-section section--sm" id={id}>
            <div className="bulleted-section__container container container--narrow">
                <motion.div
                    className="bulleted-section__content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    {title && <h3 className="bulleted-section__title">{title}</h3>}
                    {lead && <p className="bulleted-section__lead">{lead}</p>}
                    {bullets && (
                        <ul className="bulleted-section__bullets">
                            {bullets.map((bullet, index) => (
                                <li key={index}>
                                    <CheckCircle size={18} />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {footerText && <p className="bulleted-section__footer">{footerText}</p>}
                </motion.div>
            </div>
        </section>
    );
}
