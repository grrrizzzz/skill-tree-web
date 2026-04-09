import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "header" | "footer" | "main";
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-content px-6 sm:px-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
