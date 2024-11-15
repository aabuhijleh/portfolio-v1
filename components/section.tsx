import { HTMLProps, ReactNode } from "react";
import { cn } from "~/lib/utils";

type SectionProps = {
  children: ReactNode;
} & HTMLProps<HTMLElement>;

export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section
      className={cn("flex min-h-svh items-center justify-center", className)}
      {...props}
    >
      {children}
    </section>
  );
};
