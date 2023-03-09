import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    className?: string
}

const Input = ({ label, className, ...rest }: InputProps) => {
    return (
        <div className="flex flex-col">
            <label className="mb-2">{label}</label>
            <input className={`p-2 rounded-lg transition duration-200 border-[1.5px] border-gray-300 outline-none focus:ring-2 focus:ring-gray-400 ${className}`} {...rest}/>
        </div>
    );
}

export default Input;
