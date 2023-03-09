interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    beginningIcon?: React.ReactNode
    endIcon?: React.ReactNode,
    className?: string
}

const Button = ({ children, beginningIcon, endIcon, className, ...rest }: ButtonProps) => {
    return (
        <div className="flex items-center bg-red-600 focus:ring-[3px] focus:ring-red-300 rounded-lg transition duration-200 hover:brightness-90 shadow-lg relative">
            <div className="absolute left-5">
                {beginningIcon}
            </div>
            <button className={`${className} text-white p-3 min-w-[70px] `} {...rest}>
                {children}
            </button>
            <div className="absolute right-5">
                {endIcon}
            </div>
        </div>
    );
}

export default Button;
