import { Hero, BentoGrid, BentoCard } from '../components/sections';
import { ArrowUpRight, Sofa, Lamp, Gift, Frame, Package, Home, Bed, Bath, UtensilsCrossed, Grid2X2, Blinds } from 'lucide-react';

const hardGoods = [
    {
        category: 'Furniture & Fixtures',
        items: ['Living Room Furniture', 'Bedroom Furniture', 'Accent & Occasional Furniture', 'Storage & Organization'],
        icon: Sofa
    },
    {
        category: 'Window Hardware & Treatments',
        items: ['Curtain Rods & Tracks', 'Blinds & Shades', 'Hardware Accessories'],
        icon: Blinds
    },
    {
        category: 'Decorative Accessories',
        items: ['Home Décor Accents', 'Seasonal & Festive Décor', 'Christmas & Holiday Collections'],
        icon: Gift
    },
    {
        category: 'Lighting',
        items: ['Decorative Lighting', 'Functional Lighting', 'Table, Floor & Pendant Lamps'],
        icon: Lamp
    },
    {
        category: 'Material-Based Décor',
        items: ['Glass Décor & Glassware', 'Ceramic & Stoneware Décor', 'Wooden Décor & Handcrafted Products'],
        icon: Frame
    }
];

const softGoods = [
    {
        category: 'Bed & Bedroom',
        items: ['Sheet Sets', 'Top-of-Bed (Quilts, Comforters, Bedspreads)', 'Decorative Cushions & Pillow Covers'],
        icon: Bed
    },
    {
        category: 'Bath Textiles',
        items: ['Towels', 'Bath Linen', 'Bath Rugs & Mats'],
        icon: Bath
    },
    {
        category: 'Kitchen & Dining',
        items: ['Kitchen Linen', 'Table Linen', 'Placemats & Runners'],
        icon: UtensilsCrossed
    },
    {
        category: 'Floor Coverings',
        items: ['Scatter Rugs', 'Area Rugs', 'Wall-to-Wall Carpets', 'Decorative & Accent Rugs'],
        icon: Grid2X2
    },
    {
        category: 'Window Soft Furnishings',
        items: ['Curtains & Drapery', 'Sheers & Voiles', 'Fabric-Based Window Coverings'],
        icon: Home
    }
];

export default function Products() {
    return (
        <>
            <Hero
                className="hero--extra-padding"
                headline="Product Categories We Work In"
                subheadline="Complete coverage across Hard Goods and Soft Goods for the home industry. From intricate textiles to heavy furniture, we manage vendors across the entire home spectrum."
                pillText="Our Categories"
                backgroundImage="/assets/images/pexels-roman-odintsov-6332015.jpg"
            />

            <BentoGrid title="Soft Goods (Home Textiles)">
                {softGoods.map((cat, i) => {
                    const Icon = cat.icon;
                    const variants = ['dark', 'light', 'accent', 'dark', 'light'];
                    const variant = variants[i % 5];
                    const isDark = variant === 'dark';
                    const isAccent = variant === 'accent';

                    return (
                        <BentoCard
                            key={i}
                            span={i === 3 ? 2 : 1}
                            className={`bento-card--${variant}`}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div className={`pill-tag ${isDark ? 'pill-tag--dark' : ''}`} style={isAccent ? { background: 'var(--color-primary)', color: 'var(--color-accent)' } : {}}>
                                    Soft Goods
                                </div>
                                <div style={{
                                    background: isDark ? 'var(--color-accent)' : isAccent ? 'var(--color-primary)' : 'var(--color-primary)',
                                    padding: '14px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Icon
                                        size={22}
                                        color={isDark ? 'var(--color-primary)' : 'var(--color-accent)'}
                                    />
                                </div>
                            </div>

                            <h3 style={{ marginTop: 'auto', marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-xl)' }}>
                                {cat.category}
                            </h3>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                                {cat.items.map((item, j) => (
                                    <li key={j} style={{
                                        fontSize: 'var(--font-size-sm)',
                                        color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--color-text-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-2)'
                                    }}>
                                        <span style={{
                                            width: '5px',
                                            height: '5px',
                                            borderRadius: '50%',
                                            background: isDark ? 'var(--color-accent)' : isAccent ? 'var(--color-primary)' : 'var(--color-primary)',
                                            flexShrink: 0
                                        }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </BentoCard>
                    );
                })}
            </BentoGrid>

            <BentoGrid title="Hard Goods">
                {hardGoods.map((cat, i) => {
                    const Icon = cat.icon;
                    const variants = ['light', 'dark', 'accent', 'light', 'dark'];
                    const variant = variants[i % 5];
                    const isDark = variant === 'dark';
                    const isAccent = variant === 'accent';

                    return (
                        <BentoCard
                            key={i}
                            span={i === 0 ? 2 : 1}
                            className={`bento-card--${variant}`}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div className={`pill-tag ${isDark ? 'pill-tag--dark' : ''}`} style={isAccent ? { background: 'var(--color-primary)', color: 'var(--color-accent)' } : {}}>
                                    Hard Goods
                                </div>
                                <div style={{
                                    background: isDark ? 'var(--color-accent)' : isAccent ? 'var(--color-primary)' : 'var(--color-primary)',
                                    padding: '14px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Icon
                                        size={22}
                                        color={isDark ? 'var(--color-primary)' : 'var(--color-accent)'}
                                    />
                                </div>
                            </div>

                            <h3 style={{ marginTop: 'auto', marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-xl)' }}>
                                {cat.category}
                            </h3>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                                {cat.items.map((item, j) => (
                                    <li key={j} style={{
                                        fontSize: 'var(--font-size-sm)',
                                        color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--color-text-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-2)'
                                    }}>
                                        <span style={{
                                            width: '5px',
                                            height: '5px',
                                            borderRadius: '50%',
                                            background: isDark ? 'var(--color-accent)' : isAccent ? 'var(--color-primary)' : 'var(--color-primary)',
                                            flexShrink: 0
                                        }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </BentoCard>
                    );
                })}
            </BentoGrid>
        </>
    );
}
