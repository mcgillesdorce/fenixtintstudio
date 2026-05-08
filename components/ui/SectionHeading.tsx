import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  align = "center",
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="text-4xl md:text-5xl font-light tracking-tight text-white text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-base text-zinc-400 leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
