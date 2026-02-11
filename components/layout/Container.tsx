import { cn } from "@/lib/utils";

const maxWidthClass = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
} as const;

type MaxWidth = keyof typeof maxWidthClass;

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  maxWidth?: MaxWidth;
};

export function Container({
  className,
  maxWidth = "6xl",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidthClass[maxWidth],
        className
      )}
      {...props}
    />
  );
}

export default Container;
