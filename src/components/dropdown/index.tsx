import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Input from "../input/Input";
import Typography from "../typography/Typography";

interface DropdownProps {
    title: string
    floating: boolean
    children?: React.ReactNode
    selectedValue?: string,
}

const Dropdown = ({ title, children, floating, selectedValue}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="relative min-w-[200px]">
            <button
                type="button"
                className="inline-flex items-center justify-between w-full py-2 text-base font-medium text-gray-700 bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Typography variant="body" className="font-semibold">{title}</Typography>
                {
                    selectedValue !== undefined &&
                    <div className="ml-2">
                        <Input
                            disabled
                            className="!w-fit text-sm"
                            defaultValue={selectedValue}
                        />
                    </div>
                }
                <BiChevronDown className={`-mr-1 ml-2 h-5 w-5 transition duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`mt-2 w-full h-fit rounded-md bg-white ${floating ? 'absolute z-10' : ''}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ul
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            {children}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Dropdown;
