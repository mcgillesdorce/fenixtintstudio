import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: React.ElementType;
}

export function GlassCard({
  children,
  className = "",
  hover = false,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "bg-white/[0.03] border border-white/[0.08] rounded-2xl backdrop-blur-sm",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.05]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
