import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './FeatureList.css'; // Reusing styles but enhancing them

export default function FeatureList({ title, items, footerText, id }) {
    // Floating Card Effect
    const containerRef = useRef(null);

    // Mouse position tracking could be added here for extra interactivity
    // For now, we'll use auto-floating animations

    return (
        <section className="feature-list section" id={id}>
            <div className="feature-list__container container">
                <motion.div
                    className="feature-list__content"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    {title && (
                        <motion.h2
                            className="feature-list__title"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            {title}
                        </motion.h2>
                    )}

                    <div className="feature-list__deck">
                        {items && items.map((item, index) => {
                            // Calculate random float offsets for organic feel
                            const randomDuration = 3 + Math.random() * 2;
                            const randomY = 10 + Math.random() * 10;

                            return (
                                <motion.div
                                    key={index}
                                    className="feature-list__card"
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 50
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        zIndex: 10,
                                        boxShadow: "0 20px 40px rgba(100, 255, 218, 0.2)"
                                    }}
                                >
                                    <motion.div
                                        animate={{ y: [-randomY, randomY, -randomY] }}
                                        transition={{
                                            duration: randomDuration,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.5
                                        }}
                                        className="feature-list__card-inner"
                                    >
                                        <div className="feature-list__icon-wrapper">
                                            <CheckCircle className="feature-list__icon" size={28} />
                                        </div>
                                        <span className="feature-list__text">{item}</span>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {footerText && (
                        <motion.p
                            className="feature-list__footer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {footerText}
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
