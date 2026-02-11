import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  fullWidth?: boolean;
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:ring-zinc-900",
  secondary:
    "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus-visible:ring-zinc-300",
  ghost: "bg-transparent text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-300",
};

export function Button({
  variant = "primary",
  className,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold " +
          "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60",
        fullWidth && "w-full",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  fullWidth,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold " +
          "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        fullWidth && "w-full",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
