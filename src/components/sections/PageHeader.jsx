import { motion } from 'framer-motion';
import './PageHeader.css';

export default function PageHeader({ headline, subheadline }) {
    return (
        <section className="page-header">
            <div className="container">
                <div className="page-header__content">
                    <motion.h1
                        className="page-header__headline"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {headline}
                    </motion.h1>

                    {subheadline && (
                        <motion.p
                            className="page-header__subheadline"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {subheadline}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    );
}
