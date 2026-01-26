import { motion } from 'framer-motion';
import './CategoryGrid.css';

export default function CategoryGrid({ title, groups, id }) {
    return (
        <section className="category-grid section" id={id}>
            <div className="category-grid__container container">
                <motion.div
                    className="category-grid__content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    {title && <h2 className="category-grid__title">{title}</h2>}

                    <div className="category-grid__groups">
                        {groups && groups.map((group, groupIndex) => (
                            <motion.div
                                key={groupIndex}
                                className="category-grid__group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
                            >
                                <h3 className="category-grid__group-title">{group.title}</h3>
                                <ul className="category-grid__items">
                                    {group.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="category-grid__item">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
