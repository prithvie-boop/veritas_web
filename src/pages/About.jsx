import { Hero, BentoGrid, BentoCard } from '../components/sections';
import { CheckCircle, Target, Users, Shield, MessageSquare, ArrowRight } from 'lucide-react';

export default function About() {
    const philosophy = [
        { text: 'Strong sourcing is built on process, not people-dependence', icon: Target },
        { text: 'Quality must be engineered, not inspected at the end', icon: Shield },
        { text: 'Suppliers must be developed, not just selected', icon: Users },
        { text: 'Transparency and communication are non-negotiable', icon: MessageSquare }
    ];

    const advantages = [
        '27+ years of leadership-driven execution',
        'Deep product & category expertise across Home',
        'Strong supplier ecosystems across India',
        'Robust quality, compliance, and risk frameworks',
        'Transparent communication & accountability'
    ];

    return (
        <>
            <Hero
                headline="Who We Are"
                subheadline="A full-spectrum home merchandising and sourcing consultancy, specializing in hard goods, furniture, lighting, home décor, home textiles, floor coverings, and seasonal collections."
                pillText="About Veritas"
                backgroundImage="/assets/images/pexels-equalstock-31212946.jpg"
            />

            <BentoGrid title="Our Mission">
                <BentoCard span={2} className="bento-card--light">
                    <div className="pill-tag">The Core Problem We Solve</div>
                    <h3 style={{ marginTop: 'var(--spacing-4)', maxWidth: '700px', fontSize: 'var(--font-size-2xl)' }}>
                        "How do we source from India with confidence, control, quality, and predictability?"
                    </h3>
                    <p style={{ maxWidth: '700px', marginTop: 'var(--spacing-6)', fontSize: 'var(--font-size-xl)' }}>
                        Our answer lies in <strong>systems, experience, and execution discipline</strong>.
                    </p>
                    <p style={{ maxWidth: '700px', marginTop: 'var(--spacing-4)' }}>
                        By integrating merchandising, sourcing, quality, compliance, and logistics under one framework, we eliminate fragmentation and reduce risk for our clients.
                    </p>
                </BentoCard>

                <BentoCard span={1} className="bento-card--image">
                    <div className="bento-image-wrapper">
                        <img src="/assets/images/pexels-kampus-8441790.jpg" alt="Team at work" className="bento-card__img" />
                        <div className="bento-image-overlay"></div>
                    </div>
                    <div className="bento-card__content-overlay">
                        <h3>Systems & Experience</h3>
                    </div>
                </BentoCard>
            </BentoGrid>

            <BentoGrid title="Our Philosophy">
                {philosophy.map((item, i) => {
                    const Icon = item.icon;
                    const variants = ['light', 'dark', 'accent', 'light'];
                    const variant = variants[i % 4];
                    const isDark = variant === 'dark';
                    const isAccent = variant === 'accent';

                    return (
                        <BentoCard key={i} span={1} className={`bento-card--${variant}`}>
                            <div style={{
                                background: isDark ? 'var(--color-accent)' : isAccent ? 'var(--color-primary)' : 'var(--color-primary)',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 'var(--spacing-6)'
                            }}>
                                <Icon
                                    size={24}
                                    color={isDark ? 'var(--color-primary)' : 'var(--color-accent)'}
                                />
                            </div>
                            <p style={{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 600,
                                lineHeight: 1.4,
                                marginTop: 'auto'
                            }}>
                                {item.text}
                            </p>
                        </BentoCard>
                    );
                })}
            </BentoGrid>

            <BentoGrid title="What Sets Us Apart">
                <BentoCard span={3} className="bento-card--dark">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: 'var(--spacing-8)',
                        marginBottom: 'var(--spacing-10)'
                    }}>
                        {advantages.map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: 'var(--spacing-4)'
                            }}>
                                <div style={{
                                    background: 'var(--color-accent)',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <CheckCircle size={18} color="var(--color-primary)" />
                                </div>
                                <span style={{
                                    color: 'rgba(255,255,255,0.9)',
                                    fontSize: 'var(--font-size-base)',
                                    lineHeight: 1.5,
                                    fontWeight: 500
                                }}>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                    <p style={{
                        fontSize: 'var(--font-size-xl)',
                        color: 'var(--color-accent)',
                        fontWeight: 600,
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: 'var(--spacing-8)'
                    }}>
                        We don't believe in short-term wins. We build long-term sourcing partnerships.
                    </p>
                </BentoCard>
            </BentoGrid>
        </>
    );
}
