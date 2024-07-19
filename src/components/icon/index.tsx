import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";
import { Loader } from "../loader";

export type IconName = keyof typeof dynamicIconImports;
export const IconNameArray = Object.keys(dynamicIconImports);

interface IconProps extends LucideProps {
  variant?: "primary" | "secondary" | "destructive" | "muted" | "none";
  name: string;
}

export const Icon = ({ name, size, color, variant, ...props }: IconProps) => {
  const dynamicIcon = dynamicIconImports[name as IconName];

  const LucideIcon = dynamic(dynamicIcon, {
    loading: () => {
      return <Loader />;
    },
  });

  switch (variant) {
    case "primary":
      color = "hsl(var(--primary))";
      break;
    case "secondary":
      color = "hsl(var(--secondary))";
      break;
    case "destructive":
      color = "hsl(var(--destructive))";
      break;
    case "muted":
      color = "hsl(var(--muted))";
      break;
    default:
      break;
  }

  return <LucideIcon {...props} size={size || 16} color={color} />;
};
