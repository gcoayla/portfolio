import React from 'react';
import { icons, type LucideProps } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import { clsx } from 'clsx';

const iconMap: Record<string, React.FC<LucideProps>> = {
  // Languages
  TypeScript: icons['Type'],
  JavaScript: icons['FileJson2'],
  'C++': icons['FileCode2'],

  // Frameworks & Libraries
  React: icons['Atom'],
  Electron: icons['AppWindow'],
  'Node.js': icons['Server'],
  'Next.js': icons['Router'],
  Redux: icons['Replace'],
  'Three.js': icons['Cube'],
  Gatsby: icons['Rocket'],
  'Ant Design': icons['BoxSelect'],
  'Radix UI': icons['Disc'],
  Shadcn: icons['PanelsTopLeft'],

  // Styling
  Tailwind: icons['Wind'],
  CSS3: icons['Paintbrush'],
  SASS: icons['Palette'],
  'styled-components': icons['PenTool'],

  // Testing
  Jest: icons['TestTube2'],
  Playwright: icons['MonitorPlay'],
  'Testing Library': icons['Beaker'],

  // Design Systems
  Storybook: icons['BookOpen'],
  Figma: icons['Figma'],
  'Component-Driven Development': icons['Blocks'],
  'UI/UX Collaboration': icons['Users'],
  Accessibility: icons['Accessibility'],

  // APIs & Tools
  Vite: icons['Zap'],
  'Apollo/GraphQL': icons['Waypoints'],
  'Node Addon API': icons['Plug'],
  gRPC: icons['ServerCog'],
  i18next: icons['Languages'],
  Zod: icons['ShieldCheck'],
  'GitHub Actions': icons['Github'],
  'Firebase Analytics': icons['BarChart'],
  Sentry: icons['Bug'],
};

const technologyIcon = tv({
  base: 'relative group rounded-full flex items-center justify-center overflow-hidden bg-rich-black-3',
  variants: {
    size: {
      small: 'w-12 h-12',
      medium: 'w-16 h-16',
      large: 'w-20 h-20',
    },
  },
  defaultVariants: {
    size: 'medium',
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
  className,
}) => {
  const Icon = iconMap[technology] || icons['Code'];

  return (
    <div className={clsx(technologyIcon({ size }), 'tech-icon-container', className)}>
      <Icon className={clsx(iconVariants({ size }), 'text-white')} />
      <Icon className={clsx(iconVariants({ size }), 'absolute text-[#508bff] icon-hover-fill')} />
    </div>
  );
};

export default TechnologyIcon;
