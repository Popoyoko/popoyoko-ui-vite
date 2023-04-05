interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => JSX.Element;
export default Button;
