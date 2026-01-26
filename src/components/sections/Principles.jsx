import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Principles.css';

export default function Principles({ title, lead, items, id }) {
    return (
        <section className="principles section" id={id}>
            <div className="principles__container container container--narrow">
                <motion.div
                    className="principles__content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    {title && <h2 className="principles__title">{title}</h2>}
                    {lead && (
                        <div className="principles__lead">
                            <Quote className="principles__quote-icon" size={32} />
                            <p>{lead}</p>
                        </div>
                    )}
                    <ul className="principles__items">
                        {items && items.map((item, index) => (
                            <motion.li
                                key={index}
                                className="principles__item"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <span className="principles__number">{String(index + 1).padStart(2, '0')}</span>
                                <p>{item}</p>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
