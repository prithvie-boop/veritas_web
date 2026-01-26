import { Hero, BentoGrid, BentoCard } from '../components/sections';
import { Check, ArrowRight, Globe, Shield, TrendingUp, Users, Award, Eye, Handshake } from 'lucide-react';

const whyIndia = [
    { text: 'Deep craftsmanship & material expertise', icon: Award },
    { text: 'Competitive manufacturing costs', icon: TrendingUp },
    { text: 'Growing compliance maturity', icon: Shield },
    { text: 'Scalable production capabilities', icon: Users }
];

const whyVeritas = [
    { text: 'Leadership with 27+ years of execution experience', icon: Award },
    { text: 'Hybrid capability: design + commercial + scale', icon: TrendingUp },
    { text: 'Strong supplier ecosystems', icon: Users },
    { text: 'Robust quality & compliance systems', icon: Shield },
    { text: 'Transparent, accountable partnership model', icon: Eye }
];

export default function WhyVeritas() {
    return (
        <>
            <Hero
                headline="Why India. Why Veritas."
                subheadline="India offers immense potential, but it requires local expertise, systems, and control. We don't just represent India—we de-risk India for you."
                pillText="The Advantage"
                backgroundImage="/assets/images/pexels-meruyert-gonullu-6243345.jpg"
            />

            <BentoGrid title="The India Advantage">
                <BentoCard span={1} className="bento-card--light">
                    <div style={{
                        background: 'var(--color-primary)',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--spacing-6)'
                    }}>
                        <Globe size={28} color="var(--color-accent)" />
                    </div>
                    <div className="pill-tag">Location</div>
                    <h3 style={{ fontSize: 'var(--font-size-2xl)', marginTop: 'var(--spacing-4)', marginBottom: 'var(--spacing-6)' }}>
                        Why India?
                    </h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                        {whyIndia.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <li key={i} style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', fontSize: 'var(--font-size-base)', fontWeight: 500 }}>
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
                                        <Icon size={16} color="var(--color-primary)" />
                                    </div>
                                    {item.text}
                                </li>
                            );
                        })}
                    </ul>
                    <p style={{ marginTop: 'var(--spacing-8)', color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                        But it also requires <strong>local expertise, systems, and control</strong>.
                    </p>
                </BentoCard>

                <BentoCard span={1} className="bento-card--dark">
                    <div style={{
                        background: 'var(--color-accent)',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--spacing-6)'
                    }}>
                        <Shield size={28} color="var(--color-primary)" />
                    </div>
                    <div className="pill-tag pill-tag--dark">Partner</div>
                    <h3 style={{ color: 'white', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--spacing-4)', marginBottom: 'var(--spacing-6)' }}>
                        Why Veritas?
                    </h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', color: 'rgba(255,255,255,0.9)' }}>
                        {whyVeritas.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <li key={i} style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', fontSize: 'var(--font-size-sm)' }}>
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
                                        <Icon size={14} color="var(--color-primary)" />
                                    </div>
                                    {item.text}
                                </li>
                            );
                        })}
                    </ul>
                    <button className="card-cta" style={{ marginTop: 'var(--spacing-8)', background: 'var(--color-accent)', color: 'var(--color-primary)' }}>
                        Partner With Us <ArrowRight size={16} />
                    </button>
                </BentoCard>

                <BentoCard span={1} className="bento-card--image">
                    <div className="bento-image-wrapper" style={{ height: '100%' }}>
                        <img src="/assets/images/pexels-ron-lach-10554827.jpg" alt="Partnership" className="bento-card__img" />
                        <div className="bento-image-overlay"></div>
                    </div>
                    <div className="bento-card__content-overlay" style={{ padding: 'var(--spacing-10)' }}>
                        <h3 style={{ color: 'white', fontSize: 'var(--font-size-2xl)' }}>
                            We De-Risk India For You.
                        </h3>
                    </div>
                </BentoCard>
            </BentoGrid>

            <BentoGrid title="Our Promise">
                <BentoCard span={3} className="bento-card--accent">
                    <div style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: 'var(--spacing-8) 0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            background: 'var(--color-primary)',
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 'var(--spacing-6)'
                        }}>
                            <Handshake size={32} color="var(--color-accent)" />
                        </div>
                        <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-6)' }}>
                            We don't just represent India.
                        </h3>
                        <p style={{ fontSize: 'var(--font-size-2xl)', lineHeight: 1.6, fontWeight: 500 }}>
                            We bring <strong>systems, experience, and execution discipline</strong> to ensure your sourcing from India is predictable, controlled, and successful.
                        </p>
                    </div>
                </BentoCard>
            </BentoGrid>
        </>
    );
}
