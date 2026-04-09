import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
