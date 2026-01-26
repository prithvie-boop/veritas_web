import { Hero, LogoBar, BentoGrid, BentoCard, FAQ } from '../components/sections';
import { ArrowRight, ArrowUpRight, ShieldCheck, Box, TrendingUp, CheckCircle, Users, Globe, Briefcase } from 'lucide-react';

export default function Home() {
    const logos = [
        "WALMART", "MACYS", "KOHLS", "ROSS", "JC PENNY", "FAMILY DOLLAR",
        "LAURA ASHLEY", "HARRODS", "DEBENHAMS", "IMPRESSIONEN"
    ];

    const faqItems = [
        {
            question: "Why choose India for home sourcing?",
            answer: "India offers deep craftsmanship & material expertise, competitive manufacturing costs, growing compliance maturity, and scalable production capabilities. But it requires local expertise, systems, and control—that's where we come in."
        },
        {
            question: "How does Veritas ensure quality control?",
            answer: "Quality is embedded from pre-production to final shipment. We conduct pre-production quality planning, in-line & mid-line inspections, final inspections & shipment approvals, plus root-cause analysis with corrective action plans."
        },
        {
            question: "What product categories do you specialize in?",
            answer: "We cover the entire Home spectrum: Hard Goods (furniture, lighting, décor, glass & ceramics) and Soft Goods (bed & bath textiles, floor coverings, window treatments, kitchen linen)."
        },
        {
            question: "What makes Veritas different from other sourcing agents?",
            answer: "We don't believe in short-term wins. We build long-term sourcing partnerships. Our philosophy: Strong sourcing is built on process, not people-dependence. Quality must be engineered, not inspected at the end."
        }
    ];

    const advantages = [
        { text: "Clear communication and integrity-driven execution", icon: TrendingUp },
        { text: "Deep product & category expertise across Home", icon: Box },
        { text: "Strong supplier ecosystems across India", icon: Globe },
        { text: "Robust quality, compliance, and risk frameworks", icon: ShieldCheck },
        { text: "Transparent communication & accountability", icon: Users }
    ];

    return (
        <>
            <Hero
                headline="Complete Home Merchandising & Sourcing Solutions"
                subheadline="Your Strategic Sourcing, Merchandising, and Quality Partner in India. We partner with global retailers, brands, importers, and buying houses to deliver end-to-end home merchandising solutions."
                pillText="Your India Partner"
                backgroundImage="/assets/images/pexels-cottonbro-6580549.jpg"
                showFloatingCard={true}
                floatingCardData={{
                    label: "7 Services",
                    value: "We Specialize In",
                    description: "Leadership-Driven Execution"
                }}
            />

            <LogoBar title="Leadership Trusted by Global Brands" items={logos} />

            <BentoGrid title="End-to-End Solutions">

                {/* Card 1: Main Feature - What Sets Us Apart */}
                <BentoCard span={2} className="bento-card--light">
                    <div className="pill-tag">What Sets Us Apart</div>
                    <h3 style={{ maxWidth: '600px', marginTop: 'var(--spacing-4)' }}>
                        Building Long-Term Sourcing Partnerships
                    </h3>
                    <p style={{ maxWidth: '600px', marginBottom: 'var(--spacing-6)' }}>
                        In today's global sourcing environment, success depends not just on finding factories, but on building dependable systems, managing risk, ensuring quality, and executing with precision.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-8)' }}>
                        {advantages.slice(0, 3).map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', fontSize: 'var(--font-size-base)' }}>
                                    <div style={{
                                        background: 'var(--color-accent)',
                                        padding: '8px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Icon size={16} color="var(--color-primary)" />
                                    </div>
                                    {item.text}
                                </span>
                            );
                        })}
                    </div>

                    <button className="card-cta">
                        Learn More <ArrowRight size={16} />
                    </button>

                    <div className="bento-icon-corner">
                        <Globe size={180} />
                    </div>
                </BentoCard>

                {/* Card 2: Stats */}
                <BentoCard span={1} className="bento-card--light">
                    <div>
                        <div style={{
                            background: 'var(--color-accent-muted)',
                            padding: '14px',
                            borderRadius: '50%',
                            width: 'fit-content',
                            marginBottom: 'var(--spacing-4)'
                        }}>
                            <Briefcase size={28} color="var(--color-primary)" />
                        </div>
                        <h2 style={{ fontSize: 'var(--font-size-3xl)', lineHeight: 1.1, marginBottom: 'var(--spacing-2)', color: 'var(--color-primary)' }}>
                            7 Services
                        </h2>
                        <p style={{ fontWeight: 600, fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)' }}>
                            That We Specialize In
                        </p>
                    </div>
                    <p style={{ marginTop: 'auto', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                        Bridging Western design expectations with Indian manufacturing capabilities.
                    </p>
                </BentoCard>

                {/* Card 3: Image - Boots on Ground */}
                <BentoCard span={1} className="bento-card--image">
                    <div className="bento-image-wrapper">
                        <img src="/assets/images/pexels-cottonbro-7484810.jpg" alt="Quality Inspection" className="bento-card__img" />
                        <div className="bento-image-overlay"></div>
                    </div>
                    <div className="bento-card__content-overlay">
                        <h3>Your Extended Team</h3>
                        <p>Operating as your boots on the ground in India.</p>
                    </div>
                </BentoCard>

                {/* Card 4: Dark Feature - Our Approach */}
                <BentoCard span={2} className="bento-card--light">
                    <div style={{ position: 'relative', zIndex: 10 }}>
                        <div style={{
                            background: 'var(--color-accent-muted)',
                            padding: '14px',
                            borderRadius: '50%',
                            width: 'fit-content',
                            marginBottom: 'var(--spacing-6)'
                        }}>
                            <ShieldCheck size={28} color="var(--color-primary)" />
                        </div>
                        <h3 style={{ color: 'var(--color-primary)' }}>We Plan. Build. Monitor. Improve.</h3>
                        <p style={{ maxWidth: '600px', marginBottom: 'var(--spacing-8)', color: 'var(--color-text-secondary)' }}>
                            Our role goes beyond execution. We integrate merchandising, sourcing, quality, compliance, and logistics under one framework—eliminating fragmentation and reducing risk.
                        </p>
                        <button className="card-cta" style={{ background: 'var(--color-primary)', color: 'var(--color-white)' }}>
                            Our Services <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="bento-card__icon">
                        <ArrowUpRight size={24} color="var(--color-primary)" />
                    </div>
                </BentoCard>

            </BentoGrid>

            <FAQ title="Frequently Asked Questions" items={faqItems} />
        </>
    );
}
