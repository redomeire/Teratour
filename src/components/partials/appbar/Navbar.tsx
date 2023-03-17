import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { BiChevronUp, BiMapAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHamburger, FaRegCompass } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { dummyNavbar } from "@/modules/components/appbar/dummy";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [isShadowed, setIsShadowed] = useState(false);
    const [visible, setVisible] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50)
            setIsShadowed(true)

        else setIsShadowed(false);
    })

    return (
        <nav className={`md:px-14 px-5 md:py-3 py-5 fixed top-0 left-0 right-0 ${window.location.pathname === '/user/login' && !isShadowed && 'md:bg-transparent md:text-white'} ${isShadowed ? 'bg-white text-gray-600' : ''} text-gray-600 z-20 transition duration-200 bg-white`}>
            <div className="w-full flex md:items-center items-start justify-between md:flex-row flex-col">
                <a href="/">
                    <Typography
                        variant="h4"
                        className="font-bold text-red-500"
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
                    {
                        dummyNavbar.map((item, index) => {
                            return (
                                <a key={index} href={item.url} className={`flex items-center hover:underline md:mx-5 font-semibold my-3 ${window.location.pathname === item.url ? '!text-red-600' : ''}`}>
                                    <BiMapAlt size={23} />
                                    <Typography
                                        variant="body"
                                        className="ml-2"
                                    >{item.name}</Typography>
                                </a>
                            )
                        })
                    }
                    {
                        window.localStorage.getItem('token') ?
                            <ProfileAvatar
                                openProfile={openProfile}
                                setOpenProfile={setOpenProfile}
                            />
                            :
                            <a href="/user/login">
                                <Button
                                    color="secondary-grey"
                                    className="md:ml-5 md:mt-0 mt-5 min-w-[150px]"
                                    style={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: window.location.pathname === '/user/login' ? 'white' : '' }}
                                >Masuk</Button>
                            </a>
                    }
                </div>
                <div className={`${visible ? "flex" : "hidden"}  md:hidden md:items-center md:flex-row flex-col md:static absolute top-14 left-0 right-0 md:px-0 px-5 md:py-0 py-5 bg-white text-gray-600`}>
                    <a href="/" className={`flex items-center hover:underline md:mx-5 font-semibold my-3`}>
                        <BiMapAlt size={23} />
                        <Typography
                            variant="body"
                            className="ml-2"
                        >Planner</Typography>
                    </a>
                    <a href="/user/explore" className={`flex items-center hover:underline md:mx-5 font-semibold my-3`}>
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
                    {
                        window.localStorage.getItem('token') ?
                            <ProfileAvatar openProfile={openProfile} setOpenProfile={setOpenProfile} />
                            :
                            <a href="/user/login">
                                <Button
                                    color="secondary-grey"
                                    className="md:ml-5 md:mt-0 mt-5 min-w-[150px]"
                                    style={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: window.location.pathname === '/user/login' ? 'white' : '' }}
                                >Masuk</Button>
                            </a>
                    }
                </div>
            </div>
        </nav>
    );
}

const ProfileAvatar = ({ openProfile, setOpenProfile }: { openProfile: boolean, setOpenProfile: Function }) => {
    const handleLogout = async () => {
        try {

            window.localStorage.removeItem('token');

            setTimeout(() => {
                window.location.reload()
            }, 1000);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="cursor-pointer flex items-center relative md:mt-0 mt-5">
            {
                openProfile &&
                <div onClick={() => { setOpenProfile(false) }} className="z-30 fixed top-0 left-0 right-0 bottom-0" />
            }
            {
                false ?
                    <div className={`w-[40px] h-[40px] rounded-full bg-cover bg-center`} style={{ backgroundImage: `url('')` }} />
                    :
                    <Button color="link-grey" onClick={() => { setOpenProfile(true) }} className="bg-primary w-[40px] h-[40px] text-white bg-red-600 !rounded-full ml-5">
                        {
                            <Typography variant="" className="font-semibold">R</Typography>
                        }
                    </Button>
            }
            <div onClick={() => { setOpenProfile(!openProfile) }}>
                <Typography variant="" className="ml-3 font-semibold text-sm">
                    Redomeire
                </Typography>
            </div>
            <Button color="link-grey">
                <BiChevronUp className={`${openProfile ? '' : 'rotate-180'} transition duration-200`} size={22} />
            </Button>
            <AnimatePresence>
                {
                    openProfile &&
                    <>
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 5, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-14 p-4 rounded-xl shadow-md bg-white min-w-[200px] z-50">
                            <a href="/profile">
                                <Typography variant="" className="text-sm mb-3">
                                    Profil Saya
                                </Typography>
                            </a>
                            <a href="/usage-agreement">
                                <Typography variant="" className="text-sm mb-3">
                                    Syarat & Ketentuan
                                </Typography>
                            </a>
                            <a href="/privacy-policy">
                                <Typography variant="" className="text-sm mb-3">
                                    Kebijakan Privasi
                                </Typography>
                            </a>
                            <hr className="border-[1px]" />
                            <div onClick={handleLogout} className="w-fit flex items-center mt-3 text-red-500">
                                <FiLogOut />
                                <Typography variant="" className="font-semibold text-sm ml-2 cursor-pointer w-fit">
                                    Keluar
                                </Typography>
                            </div>
                        </motion.div>
                    </>
                }
            </AnimatePresence>
        </div>
    )
}

export default Navbar;
