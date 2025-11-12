import React from "react";
import { icons, type LucideProps } from "lucide-react";
import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiElectron,
  SiNodedotjs,
  SiNextdotjs,
  SiRedux,
  SiThreedotjs,
  SiGatsby,
  SiAntdesign,
  SiRadixui,
  SiShadcnui,
  SiTailwindcss,
  SiCss,
  SiSass,
  SiStyledcomponents,
  SiJest,
  SiTestinglibrary,
  SiStorybook,
  SiFigma,
  SiVite,
  SiApollographql,
  SiI18next,
  SiZod,
  SiGithubactions,
  SiFirebase,
  SiSentry,
} from "@icons-pack/react-simple-icons";
import { tv, type VariantProps } from "tailwind-variants";
import { clsx } from "clsx";
import useMediaQuery from "../../hooks/useMediaQuery";

const iconMap: Record<string, React.FC<LucideProps>> = {
  // Languages
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "C++": SiCplusplus,

  // Frameworks & Libraries
  React: SiReact,
  Electron: SiElectron,
  "Node.js": SiNodedotjs,
  "Next.js": SiNextdotjs,
  Redux: SiRedux,
  "Three.js": SiThreedotjs,
  Gatsby: SiGatsby,
  "Ant Design": SiAntdesign,
  "Radix UI": SiRadixui,
  Shadcn: SiShadcnui,

  // Styling
  Tailwind: SiTailwindcss,
  CSS3: SiCss,
  SASS: SiSass,
  "styled-components": SiStyledcomponents,

  // Testing
  Jest: SiJest,
  Playwright: icons["MonitorPlay"],
  "Testing Library": SiTestinglibrary,

  // Design Systems
  Storybook: SiStorybook,
  Figma: SiFigma,
  "Component-Driven Development": icons["Blocks"],
  "UI/UX Collaboration": icons["Users"],
  Accessibility: icons["Accessibility"],

  // APIs & Tools
  Vite: SiVite,
  "Apollo/GraphQL": SiApollographql,
  "Node Addon API": icons["Plug"],
  gRPC: icons["ServerCog"],
  i18next: SiI18next,
  Zod: SiZod,
  "GitHub Actions": SiGithubactions,
  "Firebase Analytics": SiFirebase,
  Sentry: SiSentry,
};

const technologyIcon = tv({
  base: "relative group rounded-full aspect-square flex items-center justify-center overflow-hidden bg-rich-black-3",
  variants: {
    size: {
      small: "min-w-10 w-10 h-10",
      medium: "min-w-12 w-12 h-12",
      large: "min-w-16 w-16 h-16",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const iconVariants = tv({
  base: "transition-colors ease-in-out",
  variants: {
    size: {
      small: "w-5 h-5",
      medium: "w-6 h-6",
      large: "w-8 h-8",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface TechnologyIconProps extends VariantProps<typeof technologyIcon> {
  technology: string;
  className?: string;
}

const TechnologyIcon: React.FC<TechnologyIconProps> = ({
  technology,
  className,
  size: sizeProp,
}) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const getIconSize = () => {
    if (isDesktop) {
      return "large";
    }
    if (isTablet) {
      return "medium";
    }
    return "small";
  };

  const size = sizeProp || getIconSize();
  const Icon = iconMap[technology] || icons["Code"];

  return (
    <div
      className={clsx(
        technologyIcon({ size }),
        "tech-icon-container",
        className
      )}
    >
      <Icon className={clsx(iconVariants({ size }), "text-white")} />
      <Icon
        className={clsx(
          iconVariants({ size }),
          "absolute text-[#508bff] icon-hover-fill"
        )}
      />
    </div>
  );
};

export default TechnologyIcon;
