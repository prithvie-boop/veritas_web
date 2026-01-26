import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero({
    headline = "Strategic Sourcing for Global Brands",
    subheadline,
    backgroundImage = "/assets/images/pexels-cottonbro-6580549.jpg",
    pillText = "Global Sourcing Partner",
    showFloatingCard = false,
    floatingCardData = {
        label: "Shipment Accuracy",
        value: "99.8%",
        description: "Year-over-Year Performance"
    },
    children
}) {
    const words = headline.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const wordVariants = {
        hidden: { y: "110%", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section className="hero">
            <div className="hero__media-layer">
                <img
                    src={backgroundImage}
                    alt=""
                    className="hero__video-bg"
                    loading="eager"
                />
                <div className="hero__overlay"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    {pillText && (
                        <motion.div
                            className="hero__pill"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {pillText}
                        </motion.div>
                    )}

                    <motion.h1
                        className="hero__title"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {words.map((word, i) => (
                            <span key={i} className="hero__word-wrapper">
                                <motion.span
                                    className="hero__word"
                                    variants={wordVariants}
                                >
                                    {word}{i < words.length - 1 ? '\u00A0' : ''}
                                </motion.span>
                            </span>
                        ))}
                    </motion.h1>

                    {subheadline && (
                        <motion.p
                            className="hero__subtitle"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {subheadline}
                        </motion.p>
                    )}

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {children || (
                            <>
                                <a href="/contact" className="btn btn--primary">
                                    Partner With Us <ArrowRight size={18} />
                                </a>
                                <a href="/services" className="btn btn--outline">
                                    Explore Services
                                </a>
                            </>
                        )}
                    </motion.div>
                </div>

                {showFloatingCard && (
                    <motion.div
                        className="hero__floating-card"
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="glass-card">
                            <div className="glass-card__header">
                                <span className="glass-card__label">{floatingCardData.label}</span>
                                <div className="glass-card__icon">
                                    <ArrowUpRight size={18} color="var(--color-accent)" />
                                </div>
                            </div>
                            <div className="glass-card__stat">
                                <span className="val">{floatingCardData.value}</span>
                            </div>
                            <p className="glass-card__desc">{floatingCardData.description}</p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
