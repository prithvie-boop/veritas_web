import { motion } from 'framer-motion';
import './RichText.css';

export default function RichText({ title, content, id }) {
    return (
        <section className="rich-text section" id={id}>
            <div className="rich-text__container container container--narrow">
                <motion.div
                    className="rich-text__content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    {title && <h2 className="rich-text__title">{title}</h2>}
                    {content && content.map((paragraph, index) => (
                        <p key={index} className="rich-text__paragraph">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
