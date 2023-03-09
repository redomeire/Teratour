interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    beginningIcon?: React.ReactNode
    endIcon?: React.ReactNode,
    className?: string
    color: "primary" | "secondary" | "tertiary" | "secondary-grey" | "link" | "tertiary-grey" | "link-grey"
}

const Button = ({ children, beginningIcon, endIcon, className, color, ...rest }: ButtonProps) => {
    const additionalClassname = checkColorType(color)

    return (
        <button className={`flex items-center relative p-3 min-w-[30px] rounded-lg transition duration-200 disabled:cursor-not-allowed ${additionalClassname}`} {...rest}>
            <div className="mr-2">
                {beginningIcon}
            </div>
            <div className={`${className} `}>
                {children}
            </div>
            <div className="ml-2">
                {endIcon}
            </div>
        </button>
    );
}

const checkColorType = (color: string) => {
    let className = ""

    switch (color) {
        case "primary":
            className = "bg-[#D02026] focus:ring-[3px] focus:ring-red-300 text-white active:brightness-90 disabled:bg-red-200 disabled:brightness-100"
            break;
        case "secondary":
            className = "bg-red-200 text-[#D02026] hover:shadow focus:shadow-none disabled:bg-red-100 disabled:text-red-300 hover:brightness-90 active:brightness-100 disabled:brightness-100"
            break;
        case "tertiary":
            className = "bg-transparent hover:bg-[#F6D2D4] active:bg-transparent text-[#D02026] disabled:bg-transparent disabled:text-red-300"
            break;
        case "link":
            className = "bg-transparent hover:underline active:no-underline text-red-600 disabled:text-red-100"
            break;
        case "secondary-grey":
            className = "border-[1.5px] text-gray-600 border-gray-300 hover:border-gray-400 active:border-gray-300 focus:ring-[3px] focus:ring-gray-300 disabled:text-gray-300"
            break;
        case "tertiary-grey":
            className = "border-[1.5px] text-gray-600 hover:bg-gray-100 border-none disabled:text-gray-300 disabled:bg-transparent"
            break;
        case "link-grey":
            className = " text-gray-600 hover:underline active:no-underline disabled:text-gray-300 disabled:no-underline"
            break;
    }

    return className
}

export default Button;
