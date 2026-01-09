"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  image?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  href,
  image,
  className = "",
}: CardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      className={`group bg-white border border-border rounded-2xl overflow-hidden transition-shadow hover:shadow-lg ${className}`}
    >
      {image && (
        <div className="aspect-video bg-secondary overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-secondary to-border flex items-center justify-center text-muted">
            Placeholder Image
          </div>
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 text-foreground">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
        {href && (
          <div className="mt-4 flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-colors">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
