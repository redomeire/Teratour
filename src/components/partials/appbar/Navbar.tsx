import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { BiMapAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHamburger, FaRegCompass } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [isShadowed, setIsShadowed] = useState(false);
    const [visible, setVisible] = useState(false);

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50)
            setIsShadowed(true)

        else setIsShadowed(false);
    })

    return (
        <nav className={`md:px-14 px-5 md:py-3 py-5 fixed top-0 left-0 right-0 ${window.location.pathname === '/user/login' && !isShadowed  && 'md:bg-transparent md:text-white'} ${isShadowed ? 'bg-white text-gray-600' : ''} text-gray-600 z-20 transition duration-200 bg-white`}>
            <div className="w-full flex md:items-center items-start justify-between md:flex-row flex-col">
                <a href="/">
                    <Typography
                        variant="h4"
                        className="font-semibold"
                    >teratour</Typography>
                </a>
                <Button
                    color="tertiary-grey"
                    className="md:hidden right-5 top-4 z-30"
                    style={{ position: 'absolute' }}
                    onClick={() => { setVisible(prev => !prev) }}
                >
                    <FaHamburger size={23} />
                </Button>
                <div className="md:flex hidden md:items-center md:flex-row flex-col md:static absolute top-14 left-0 right-0 md:px-0 px-5 md:py-0 py-5">
                    <a href="/" className={`flex items-center hover:underline md:mx-5 font-semibold my-3`}>
                        <BiMapAlt size={23} />
                        <Typography
                            variant="body"
                            className="ml-2"
                        >Planner</Typography>
                    </a>
                    <a href="/" className={`flex items-center hover:underline md:mx-5 font-semibold my-3`}>
                        <FaRegCompass size={23} />
                        <Typography
                            variant="body"
                            className="ml-2"
                        >Explore</Typography>
                    </a>
                    <a href="/" className={`flex items-center hover:underline md:mx-5 font-semibold my-3`}>
                        <AiOutlineShoppingCart size={23} />
                        <Typography
                            variant="body"
                            className="ml-2"
                        >Souvenir</Typography>
                    </a>
                    <a href="/user/login">
                        <Button
                            color="secondary-grey"
                            className="md:ml-5 md:mt-0 mt-5 min-w-[150px]"
                            style={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: window.location.pathname === '/user/login' ? 'white' : '' }}
                        >Masuk</Button>
                    </a>
                </div>
                <div className={`${visible ? "flex" : "hidden"}  md:hidden md:items-center md:flex-row flex-col md:static absolute top-14 left-0 right-0 md:px-0 px-5 md:py-0 py-5 bg-white text-gray-600`}>
                    <a href="/" className={`flex items-center hover:underline md:mx-5 font-semibold my-3`}>
                        <BiMapAlt size={23} />
                        <Typography
                            variant="body"
                            className="ml-2"
                        >Planner</Typography>
                    </a>
                    <a href="/" className={`flex items-center hover:underline md:mx-5 font-semibold my-3`}>
                        <FaRegCompass size={23} />
                        <Typography
                            variant="body"
                            className="ml-2"
                        >Explore</Typography>
                    </a>
                    <a href="/" className={`flex items-center hover:underline md:mx-5 font-semibold my-3`}>
                        <AiOutlineShoppingCart size={23} />
                        <Typography
                            variant="body"
                            className="ml-2"
                        >Souvenir</Typography>
                    </a>
                    <a href="/user/login">
                        <Button
                            color="secondary-grey"
                            className="md:ml-5 md:mt-0 mt-5 min-w-[150px]"
                            style={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: window.location.pathname === '/user/login' ? 'white' : '' }}
                        >Masuk</Button>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
