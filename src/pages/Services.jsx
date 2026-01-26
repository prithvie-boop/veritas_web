import { Hero, BentoGrid, BentoCard } from '../components/sections';
import { ArrowRight, ArrowUpRight, Package, Search, ShieldCheck, Users, Settings, Truck, CheckCircle, Clipboard, Factory, BarChart3 } from 'lucide-react';

const services = [
    {
        title: 'Merchandising & Product Development',
        tag: 'Strategic',
        desc: 'We partner with clients at the earliest stages of product creation.',
        points: [
            'Line planning & assortment building',
            'Category-wise range architecture',
            'Trend, color & material alignment',
            'Cost engineering & margin optimization',
            'Sampling management & approvals'
        ],
        summary: 'Products that are aesthetically relevant, commercially viable, and scalable.',
        icon: Package,
        span: 2,
        variant: 'light'
    },
    {
        title: 'Strategic Sourcing',
        tag: 'Core',
        desc: 'Sourcing at Veritas is intentional and strategic, not transactional.',
        points: [
            'Identifying suppliers aligned to product complexity & scale',
            'Matching infrastructure capabilities with volume needs',
            'Negotiating competitive and sustainable pricing',
            'Ensuring long-term supplier reliability'
        ],
        summary: 'Driven by risk reduction, consistency, and growth potential.',
        icon: Search,
        span: 1,
        variant: 'dark'
    },
    {
        title: 'Quality Assurance & Control',
        tag: 'Critical',
        desc: 'Quality is embedded from pre-production to final shipment.',
        points: [
            'Pre-production quality planning',
            'In-line & mid-line inspections',
            'Final inspections & shipment approvals',
            'Root-cause analysis & corrective action plans'
        ],
        summary: 'We prevent defects, not just detect them.',
        icon: ShieldCheck,
        span: 1,
        variant: 'light'
    },
    {
        title: 'Vendor Management & Execution',
        tag: 'Ongoing',
        desc: 'We act as the single point of accountability between clients and suppliers.',
        points: [
            'Daily production follow-ups',
            'Capacity & timeline management',
            'Issue resolution & escalation handling',
            'Transparent reporting & communication'
        ],
        summary: 'Building suppliers, not just using them.',
        icon: Users,
        span: 2,
        variant: 'dark'
    },
    {
        title: 'Factory Evaluation & Compliance',
        tag: 'ESG',
        desc: 'We believe compliance is foundational, not optional.',
        points: [
            'Infrastructure & machinery evaluation',
            'Process flow & capacity assessment',
            'Human rights & labor practices audits',
            'Health, safety & wage compliance'
        ],
        summary: 'Sustained compliance, not one-time certification.',
        icon: Factory,
        span: 1,
        variant: 'light'
    },
    {
        title: 'Systems & Risk Management',
        tag: 'Process',
        desc: 'Our systems reduce dependency on individuals and increase reliability.',
        points: [
            'Proactive risk identification',
            'Capacity constraints & timeline risks',
            'Pre-production excellence',
            'Detailed production calendars'
        ],
        summary: 'Predictability through process.',
        icon: Settings,
        span: 1,
        variant: 'accent'
    },
    {
        title: 'Logistics & Consolidation',
        tag: 'End-to-End',
        desc: 'Complete shipment coordination and timeline visibility.',
        points: [
            'Optimized consolidation planning',
            'Shipment scheduling & coordination',
            'Documentation management',
            'Timeline visibility for clients'
        ],
        summary: 'Smooth execution downstream.',
        icon: Truck,
        span: 1,
        variant: 'dark'
    }
];

export default function Services() {
    return (
        <>
            <Hero
                headline="End-to-End Merchandising & Sourcing Solutions"
                subheadline="Our services are designed to support clients across the entire product lifecycle—from concept and cost engineering to production execution and delivery."
                pillText="Service Portfolio"
                backgroundImage="/assets/images/pexels-rdne-7580820.jpg"
            />

            <BentoGrid title="What We Do">
                {services.map((s, i) => {
                    const Icon = s.icon;
                    const variantClass = `bento-card--${s.variant}`;
                    const isDark = s.variant === 'dark';
                    const isAccent = s.variant === 'accent';

                    return (
                        <BentoCard key={i} span={s.span} className={variantClass}>
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-4)' }}>
                                    <div className={`pill-tag ${isDark ? 'pill-tag--dark' : ''}`} style={isAccent ? { background: 'var(--color-primary)', color: 'var(--color-accent)' } : {}}>
                                        {s.tag}
                                    </div>
                                    <div style={{
                                        background: isDark ? 'var(--color-accent)' : isAccent ? 'var(--color-primary)' : 'var(--color-primary)',
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Icon
                                            color={isDark ? 'var(--color-primary)' : 'var(--color-accent)'}
                                            size={24}
                                        />
                                    </div>
                                </div>

                                <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-xl)' }}>{s.title}</h3>
                                <p style={{ marginBottom: 'var(--spacing-6)', fontSize: 'var(--font-size-base)' }}>{s.desc}</p>

                                <ul style={{
                                    listStyle: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'var(--spacing-2)',
                                    marginBottom: 'var(--spacing-6)',
                                    flex: 1
                                }}>
                                    {s.points.slice(0, 4).map((point, j) => (
                                        <li key={j} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 'var(--spacing-3)',
                                            fontSize: 'var(--font-size-sm)',
                                            color: isDark ? 'rgba(255,255,255,0.8)' : 'var(--color-text-secondary)'
                                        }}>
                                            <span style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: isDark ? 'var(--color-accent)' : isAccent ? 'var(--color-primary)' : 'var(--color-primary)',
                                                marginTop: '8px',
                                                flexShrink: 0
                                            }}></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <p style={{
                                    fontWeight: 600,
                                    fontSize: 'var(--font-size-sm)',
                                    color: isDark ? 'var(--color-accent)' : isAccent ? 'var(--color-primary)' : 'var(--color-primary)',
                                    marginTop: 'auto'
                                }}>
                                    {s.summary}
                                </p>
                            </div>
                        </BentoCard>
                    );
                })}
            </BentoGrid>

            {/* Vendor Philosophy Section */}
            <BentoGrid title="Our Vendor Philosophy: Crawl. Walk. Run.">
                <BentoCard span={1} className="bento-card--light">
                    <div style={{
                        background: 'var(--color-primary)',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--spacing-6)'
                    }}>
                        <Clipboard size={20} color="var(--color-accent)" />
                    </div>

                    <div className="pill-tag" style={{ marginBottom: 'var(--spacing-3)' }}>Phase 1</div>
                    <h3 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-3)' }}>Crawl</h3>
                    <p style={{ color: 'var(--color-text-secondary)' }}>Small test orders to evaluate quality, communication, and delivery capabilities.</p>
                </BentoCard>

                <BentoCard span={1} className="bento-card--accent">
                    <div style={{
                        background: 'var(--color-primary)',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--spacing-6)'
                    }}>
                        <BarChart3 size={20} color="var(--color-accent)" />
                    </div>

                    <div className="pill-tag" style={{ background: 'var(--color-primary)', color: 'var(--color-accent)', marginBottom: 'var(--spacing-3)' }}>Phase 2</div>
                    <h3 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-3)' }}>Walk</h3>
                    <p style={{ fontWeight: 500 }}>Semi-strategic engagement. Monitor consistency, scalability, and responsiveness.</p>
                </BentoCard>

                <BentoCard span={1} className="bento-card--dark">
                    <div style={{
                        background: 'var(--color-accent)',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--spacing-6)'
                    }}>
                        <ArrowUpRight size={20} color="var(--color-primary)" />
                    </div>

                    <div className="pill-tag pill-tag--dark" style={{ marginBottom: 'var(--spacing-3)' }}>Phase 3</div>
                    <h3 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-3)' }}>Run</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>Strategic partnerships with long-term planning, innovation, and growth alignment.</p>
                </BentoCard>
            </BentoGrid>
        </>
    );
}
