import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './CtaForm.css';

export default function CtaForm({ title, fields, submitLabel, id }) {
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setSubmitted(true);
        console.log('Form submitted:', formData);
    };

    return (
        <section className="cta-form section" id={id}>
            <div className="cta-form__container container container--narrow">
                <motion.div
                    className="cta-form__content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    {title && <h2 className="cta-form__title">{title}</h2>}

                    {submitted ? (
                        <div className="cta-form__success">
                            <div className="cta-form__success-icon">✓</div>
                            <h3>Thank You!</h3>
                            <p>We've received your message and will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form className="cta-form__form" onSubmit={handleSubmit}>
                            <div className="cta-form__fields">
                                {fields && fields.map((field) => (
                                    <div key={field.name} className="cta-form__field">
                                        <label htmlFor={field.name} className="cta-form__label">
                                            {field.label}
                                            {field.required && <span className="cta-form__required">*</span>}
                                        </label>
                                        <input
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            required={field.required}
                                            onChange={handleChange}
                                            className="cta-form__input"
                                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                type="submit"
                                className="cta-form__submit btn btn--accent btn--lg"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : submitLabel}
                                {!isSubmitting && <Send size={18} />}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
