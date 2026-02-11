import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm " +
          "outline-none ring-0 focus:border-zinc-400",
        className
      )}
      {...props}
    />
  );
}
