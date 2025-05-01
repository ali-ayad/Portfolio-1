import * as React from "react";

// Utility function for class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Button component with variant and size options
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    // Determine the component to render (either button or another component)
    const Comp = asChild ? "span" : "button"; // You can replace "span" with Slot if needed

    // Define variant styles based on the type
    const variantStyles = {
      default: "bg-[#10b981] text-white hover:bg-[#10b981]/90",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-[#10b981]/30 text-[#10b981] hover:bg-[#10b981]/10 hover:text-[#10b981]",
      secondary: "bg-[#0b0e0d] text-white hover:bg-[#444]",
      ghost: "hover:bg-[#444] hover:text-[#10b981]",
      link: "text-[#10b981] hover:underline",
    };

    // Define size styles based on the size
    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-sm px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant], // Apply variant styles
          sizeStyles[size], // Apply size styles
        
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
