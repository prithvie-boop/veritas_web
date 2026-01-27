import { Hero, BentoGrid, BentoCard } from '../components/sections';
import { Linkedin, CheckCircle, Award, Briefcase, Users, Lightbulb } from 'lucide-react';

const brands = [
    "Laura Ashley", "Harrods", "House of Fraser", "Debenhams", "Impressionen",
    "Macys", "Kohls", "Walmart", "ROSS", "NAPA", "American Hotel Register",
    "Park Designs", "JC Penny", "Family Dollar"
];

const leadershipQualities = [
    { text: 'Execution-led growth strategies', icon: Award },
    { text: 'Deep understanding of product & manufacturing', icon: Briefcase },
    { text: 'Strong commercial and negotiation skills', icon: Users },
    { text: 'Hands-on vendor and quality governance', icon: Lightbulb }
];

const categories = [
    'Home & Living',
    'Hard Goods & Furniture',
    'Lighting',
    'Gifts & Decorative Accessories'
];

export default function Leadership() {
    return (
        <>
            <Hero
                className="hero--extra-padding"
                headline="Leadership That Executes"
                subheadline="Under strong leadership, Veritas Consulting operates with clear governance, accountability, and ethical responsibility—giving global clients confidence in every decision made in India."
                pillText="Leadership & Governance"
                backgroundImage="/assets/images/pexels-kampus-8441790.jpg"
            />

            <BentoGrid title="Meet Our Founder">
                <BentoCard span={2} className="bento-card--light">
                    <div className="pill-tag">Founder & Principal Consultant</div>
                    <h3 style={{ marginTop: 'var(--spacing-4)', fontSize: 'var(--font-size-3xl)' }}>
                        Manmeit Sikka
                    </h3>
                    <p style={{ marginTop: 'var(--spacing-4)', fontSize: 'var(--font-size-xl)', maxWidth: '700px' }}>
                        With over <strong>27 years of experience</strong>, Manmeet Sikka has built, scaled, and led businesses across the global home category.
                    </p>

                    <p style={{ marginTop: 'var(--spacing-6)', fontSize: 'var(--font-size-base)', maxWidth: '700px' }}>
                        Her strength lies in connecting strategy to execution, ensuring plans don't stay on slides but translate into results on the ground.
                    </p>

                    <a href="https://www.linkedin.com/in/manmeit-sikka-7043125a/" target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-2)',
                        marginTop: 'var(--spacing-6)',
                        color: 'var(--color-primary)',
                        fontWeight: 600
                    }}>
                        <div style={{
                            background: 'var(--color-primary)',
                            padding: '10px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Linkedin size={18} color="var(--color-accent)" />
                        </div>
                        Connect on LinkedIn
                    </a>
                </BentoCard>

                <BentoCard span={1} className="bento-card--accent">
                    <div className="pill-tag" style={{ background: 'var(--color-primary)', color: 'var(--color-accent)' }}>Leadership Defined By</div>
                    <ul style={{
                        listStyle: 'none',
                        marginTop: 'var(--spacing-6)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-4)'
                    }}>
                        {leadershipQualities.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                                    <div style={{
                                        background: 'var(--color-primary)',
                                        padding: '10px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Icon size={16} color="var(--color-accent)" />
                                    </div>
                                    <span style={{ fontWeight: 500 }}>{item.text}</span>
                                </li>
                            );
                        })}
                    </ul>
                </BentoCard>
            </BentoGrid>

            <BentoGrid title="Categories Worked Across">
                {categories.map((cat, i) => (
                    <BentoCard key={i} span={1} className="bento-card--light" style={{ minHeight: '240px' }}>
                        <div style={{
                            background: 'var(--color-accent-muted)',
                            padding: '16px',
                            borderRadius: '50%',
                            width: 'fit-content',
                            marginBottom: 'var(--spacing-6)'
                        }}>
                            <Briefcase size={24} color="var(--color-primary)" />
                        </div>
                        <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 600,
                            color: 'var(--color-primary)',
                            marginTop: 'auto'
                        }}>
                            {cat}
                        </h3>
                    </BentoCard>
                ))}
            </BentoGrid>

            <BentoGrid title="Brands Worked With">
                <BentoCard span={3} className="bento-card--light">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                        gap: 'var(--spacing-4)',
                        alignItems: 'center'
                    }}>
                        {brands.map((brand, i) => (
                            <div key={i} style={{
                                padding: 'var(--spacing-3) var(--spacing-4)',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-full)',
                                textAlign: 'center',
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: 600,
                                color: 'var(--color-text-secondary)',
                                background: 'var(--color-bg-main)'
                            }}>
                                {brand}
                            </div>
                        ))}
                    </div>
                    <p style={{ marginTop: 'var(--spacing-8)', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                        ...and many more.
                    </p>
                </BentoCard>
            </BentoGrid>
        </>
    );
}
