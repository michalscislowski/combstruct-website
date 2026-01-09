import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
  size?: "default" | "large";
}

export default function Section({
  children,
  className = "",
  dark = false,
  id,
  size = "default",
}: SectionProps) {
  const padding = size === "large" ? "py-24 lg:py-32" : "py-20 lg:py-28";

  return (
    <section
      id={id}
      className={`${padding} ${
        dark ? "bg-dark text-white" : "bg-white"
      } ${className}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">{children}</div>
    </section>
  );
}
