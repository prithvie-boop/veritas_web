import { motion } from 'framer-motion';
import './LogoBar.css';

export default function LogoBar({ title, items }) {
    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items];

    return (
        <section className="logo-bar">
            <div className="container">
                {title && (
                    <p className="logo-bar__title">{title}</p>
                )}
            </div>

            <div className="logo-bar__track">
                <motion.div
                    className="logo-bar__marquee"
                    initial={{ x: 0 }}
                    animate={{ x: '-50%' }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 30
                    }}
                >
                    {duplicatedItems.map((item, i) => (
                        <span key={i} className="logo-bar__item">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
