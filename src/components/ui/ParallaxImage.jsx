import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxImage.css';

export default function ParallaxImage({ src, alt, speed = 1, className = '' }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${20 * speed}%`]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

    return (
        <div className={`parallax-image-container ${className}`} ref={ref}>
            <motion.div
                className="parallax-image-wrapper"
                style={{ y, scale }}
            >
                <img src={src} alt={alt} className="parallax-image" />
            </motion.div>
        </div>
    );
}
