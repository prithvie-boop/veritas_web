import { Hero, BentoGrid, BentoCard } from '../components/sections';
import { Send, CheckCircle, Mail, Phone, MapPin, Building2, User, Briefcase } from 'lucide-react';
import { useState } from 'react';

const partnerQualities = [
    { text: 'Value quality and consistency', icon: CheckCircle },
    { text: 'Think long-term', icon: Building2 },
    { text: 'Want a reliable execution partner in India', icon: Briefcase }
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <Hero
                headline="Let's Build a Stronger Supply Chain Together"
                subheadline="If you are looking for a sourcing partner who combines design sensitivity, commercial discipline, and execution excellence, we would welcome the conversation."
                pillText="Partner With Us"
                backgroundImage="/assets/images/pexels-sylvain-lelong-289676095-14252238.jpg"
            />

            <section style={{ padding: 'var(--section-padding) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-16)', alignItems: 'start' }}>

                        {/* Left Column - Content */}
                        <div>
                            <h2 style={{ fontSize: 'var(--font-display)', marginBottom: 'var(--spacing-8)', lineHeight: 1.1 }}>
                                We Partner With Organizations That:
                            </h2>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-12)' }}>
                                {partnerQualities.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                                            <div style={{
                                                background: 'var(--color-accent)',
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <Icon size={20} color="var(--color-primary)" />
                                            </div>
                                            <span style={{ fontSize: 'var(--font-size-xl)', fontWeight: 500 }}>{item.text}</span>
                                        </li>
                                    );
                                })}
                            </ul>

                            <div style={{
                                background: 'var(--color-bg-card)',
                                padding: 'var(--spacing-8)',
                                borderRadius: 'var(--radius-2xl)',
                                border: '1px solid var(--color-border)'
                            }}>
                                <h4 style={{ marginBottom: 'var(--spacing-6)', color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Contact Information
                                </h4>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                                        <div style={{
                                            background: 'var(--color-primary)',
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <Mail size={18} color="var(--color-accent)" />
                                        </div>
                                        <span style={{ fontSize: 'var(--font-size-base)' }}>info@veritasconsulting.in</span>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                                        <div style={{
                                            background: 'var(--color-primary)',
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <Phone size={18} color="var(--color-accent)" />
                                        </div>
                                        <span style={{ fontSize: 'var(--font-size-base)' }}>+91 98110 55555</span>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                                        <div style={{
                                            background: 'var(--color-primary)',
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <MapPin size={18} color="var(--color-accent)" />
                                        </div>
                                        <span style={{ fontSize: 'var(--font-size-base)' }}>45/89, Okhla Phase III, New Delhi, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div style={{
                            background: 'var(--color-primary)',
                            padding: 'var(--spacing-10)',
                            borderRadius: 'var(--radius-3xl)'
                        }}>
                            <h3 style={{ color: 'var(--color-accent)', marginBottom: 'var(--spacing-8)', fontSize: 'var(--font-size-2xl)' }}>
                                Get In Touch
                            </h3>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-5)' }}>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Company Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@company.com"
                                        required
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
                                    <div>
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 234 567 8900"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Company name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="designation">Designation</label>
                                    <input
                                        type="text"
                                        id="designation"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleChange}
                                        placeholder="Your role"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your sourcing needs..."
                                        rows={4}
                                        style={{ resize: 'vertical' }}
                                    />
                                </div>

                                <button type="submit" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--spacing-4)', width: '100%', background: 'var(--color-accent)', color: 'var(--color-primary)' }}>
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
