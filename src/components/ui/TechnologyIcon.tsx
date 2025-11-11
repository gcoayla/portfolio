import React from 'react';
import { icons, type LucideProps } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { clsx } from 'clsx';

const iconMap: Record<string, React.FC<LucideProps>> = {
  React: icons['Atom'],
  NextJS: icons['ArrowRight'],
  TailwindCSS: icons['Wind'],
  TypeScript: icons['Type'],
  JavaScript: icons['FileJson2'],
  Astro: icons['Rocket'],
  Stripe: icons['CreditCard'],
};

const technologyIcon = tv({
  base: 'relative group rounded-full border flex items-center justify-center overflow-hidden transition-colors ease-in-out',
  variants: {
    size: {
      small: 'w-12 h-12',
      medium: 'w-16 h-16',
      large: 'w-20 h-20',
    },
    color: {
      default: 'border-white',
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'default',
  },
});

const iconVariants = tv({
  base: 'transition-colors ease-in-out',
  variants: {
    size: {
      small: 'w-6 h-6',
      medium: 'w-8 h-8',
      large: 'w-10 h-10',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

type TechnologyIconVariants = VariantProps<typeof technologyIcon>;
type IconVariants = VariantProps<typeof iconVariants>;

interface TechnologyIconProps extends TechnologyIconVariants, IconVariants {
  technology: string;
  className?: string;
}

const TechnologyIcon: React.FC<TechnologyIconProps> = ({
  technology,
  size,
  color,
  className,
}) => {
  const Icon = iconMap[technology] || icons['Code'];

  return (
    <div className={clsx(technologyIcon({ size, color }), 'tech-icon-container', className)}>
      <Icon className={clsx(iconVariants({ size }), 'text-white')} />
      <Icon className={clsx(iconVariants({ size }), 'absolute text-[#508bff] icon-hover-fill')} />
    </div>
  );
};

export default TechnologyIcon;
