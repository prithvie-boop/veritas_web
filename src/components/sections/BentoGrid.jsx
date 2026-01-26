import { motion } from 'framer-motion';
import './BentoGrid.css';

export function BentoGrid({ title, subtitle, children }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    return (
        <section className="bento-grid">
            <div className="container">
                {title && (
                    <motion.div
                        className="bento-grid__header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="bento-grid__title">{title}</h2>
                        {subtitle && <p className="bento-grid__subtitle">{subtitle}</p>}
                    </motion.div>
                )}

                <motion.div
                    className="bento-grid__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}

export function BentoCard({
    span = 1,
    className = '',
    children,
    ...props
}) {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const spanClass = `bento-card--span-${span}`;
    const classes = ['bento-card', spanClass, className].filter(Boolean).join(' ');

    return (
        <motion.div
            className={classes}
            variants={cardVariants}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export default BentoGrid;
