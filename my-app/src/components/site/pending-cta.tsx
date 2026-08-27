import type { IconName } from "@/components/site/icons";
import { Icon } from "@/components/site/icons";

interface PendingCtaProps {
  className?: string;
  iconBefore?: IconName;
  iconAfter?: IconName;
  iconSize?: number;
  label: string;
}

export function PendingCta({
  className = "cta-btn",
  iconBefore,
  iconAfter,
  iconSize = 14,
  label,
}: PendingCtaProps) {
  return (
    <button
      type="button"
      className={className}
      disabled
      title="Contact page — pending approval"
    >
      {iconBefore && <Icon name={iconBefore} size={iconSize} />}
      {label}
      {iconAfter && <Icon name={iconAfter} size={iconSize} />}
    </button>
  );
}