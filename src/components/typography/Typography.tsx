

interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "body2" | "",
    color?: string,
    className?: string
}

const Typography = ({ children, variant, color, className, ...rest }: TextProps) => {
    const variantClassName = checkVariant(variant)

    return (
        <p className={`${className} ${variantClassName} text-[${color}]`} {...rest}>
            {children}
        </p>
    );
}

const checkVariant = (name: string) => {
    let variant = ''
    switch (name) {
        case "h1":
            variant = 'text-5xl'
            break;
        case "h2":
            variant = 'text-4xl'
            break;
        case "h3":
            variant = 'text-3xl'
            break;
        case "h4":
            variant = 'text-2xl'
            break;
        case "h5":
            variant = 'text-xl'
            break;
        case "h6":
            variant = 'text-lg'
            break;
        case "body":
            variant = 'text-base'
            break;
        case "body2":
            variant = 'text-sm'
            break;
        default:
            variant=""
            break;
    }
    return variant
}

export default Typography;
