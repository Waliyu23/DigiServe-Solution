import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[140px] w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm " +
          "outline-none ring-0 focus:border-zinc-400",
        className
      )}
      {...props}
    />
  );
}
