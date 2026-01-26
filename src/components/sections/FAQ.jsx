import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <div className="faq-question">
                <h5>{question}</h5>
                <span className="faq-icon">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="faq-answer-wrapper"
                    >
                        <p className="faq-answer">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ({ title, items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section section--dark faq-section">
            <div className="container">
                <div className="faq-grid">
                    <div className="faq-header">
                        <h2 className="text-accent">{title}</h2>
                    </div>
                    <div className="faq-list">
                        {items.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={activeIndex === index}
                                onClick={() => toggleIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
