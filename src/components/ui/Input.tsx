import { forwardRef } from "react";
import { cn } from "@/lib/cn";

const fieldBase =
  "block w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-text-primary placeholder:text-text-secondary transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:opacity-60";

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }
>(function Input({ className, invalid, ...rest }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        fieldBase,
        invalid && "border-error focus:border-error focus:ring-error/30",
        className,
      )}
      {...rest}
    />
  );
});

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }
>(function Textarea({ className, invalid, ...rest }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        fieldBase,
        "min-h-[140px] resize-y",
        invalid && "border-error focus:border-error focus:ring-error/30",
        className,
      )}
      {...rest}
    />
  );
});

export const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }
>(function Select({ className, invalid, children, ...rest }, ref) {
  return (
    <select
      ref={ref}
      className={cn(
        fieldBase,
        "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22><path fill=%22%236c757d%22 d=%22M6 8L2 4h8z%22/></svg>')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat pr-10",
        invalid && "border-error focus:border-error focus:ring-error/30",
        className,
      )}
      {...rest}
    >
      {children}
    </select>
  );
});

export function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-text-primary"
    >
      {children}
      {required && <span className="ml-1 text-error">*</span>}
    </label>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 text-sm text-error" role="alert">
      {message}
    </p>
  );
}
