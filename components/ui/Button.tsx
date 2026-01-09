import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "link" | "link-light";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "link",
  size = "md",
  showArrow = true,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  // WikiHouse uses primarily link-style CTAs with arrows
  const variants = {
    primary:
      "bg-foreground text-white hover:bg-foreground/90 px-6 py-3 rounded-sm",
    secondary:
      "bg-white text-foreground hover:bg-white/90 px-6 py-3 rounded-sm",
    link: "text-foreground hover:text-muted",
    "link-light": "text-white hover:text-white/70",
  };

  const sizes = {
    sm: "text-[14px] gap-1.5",
    md: "text-[16px] gap-2",
    lg: "text-[17px] gap-2.5",
  };

  const baseStyles =
    "group inline-flex items-center font-medium transition-colors";
  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {content}
    </button>
  );
}
