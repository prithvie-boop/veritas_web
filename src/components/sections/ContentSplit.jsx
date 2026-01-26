import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './ContentSplit.css';

function SplitColumn({ title, bullets, footerText }) {
    return (
        <div className="content-split__column">
            {title && <h3 className="content-split__column-title">{title}</h3>}
            {bullets && (
                <ul className="content-split__bullets">
                    {bullets.map((bullet, index) => (
                        <li key={index}>
                            <CheckCircle size={18} />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            )}
            {footerText && <p className="content-split__footer">{footerText}</p>}
        </div>
    );
}

export default function ContentSplit({ left, right, id }) {
    return (
        <section className="content-split section" id={id}>
            <div className="content-split__container container">
                <motion.div
                    className="content-split__grid"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <SplitColumn {...left} />
                    <SplitColumn {...right} />
                </motion.div>
            </div>
        </section>
    );
}
