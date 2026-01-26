import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './ContentBlock.css';

export default function ContentBlock({ title, subheadline, content, subsections, id }) {
    const renderSubsection = (subsection, index) => (
        <div key={index} className="content-block__subsection">
            {subsection.title && <h4 className="content-block__subsection-title">{subsection.title}</h4>}
            {subsection.content && subsection.content.map((text, i) => (
                <p key={i} className="content-block__text">{text}</p>
            ))}
            {subsection.bullets && (
                <ul className="content-block__bullets">
                    {subsection.bullets.map((bullet, i) => (
                        <li key={i}>
                            <CheckCircle size={16} />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            )}
            {subsection.footerText && (
                <p className="content-block__footer">{subsection.footerText}</p>
            )}
            {subsection.subsections && subsection.subsections.map((nested, ni) => (
                <div key={ni} className="content-block__nested">
                    {nested.title && <h5 className="content-block__nested-title">{nested.title}</h5>}
                    {nested.bullets && (
                        <ul className="content-block__bullets content-block__bullets--nested">
                            {nested.bullets.map((bullet, bi) => (
                                <li key={bi}>
                                    <CheckCircle size={14} />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <section className="content-block section" id={id}>
            <div className="content-block__container container">
                <motion.div
                    className="content-block__content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="content-block__header">
                        {title && <h2 className="content-block__title">{title}</h2>}
                        {subheadline && <p className="content-block__subheadline">{subheadline}</p>}
                    </div>

                    {content && content.map((text, index) => (
                        <p key={index} className="content-block__intro">{text}</p>
                    ))}

                    {subsections && (
                        <div className="content-block__subsections">
                            {subsections.map(renderSubsection)}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
