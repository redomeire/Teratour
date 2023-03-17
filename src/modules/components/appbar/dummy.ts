import { BiMapAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";

const dummyNavbar = [
    {
        name: 'Planner',
        beginningIcon: BiMapAlt,
        url: '/user/planner'
    },
    {
        name: 'Explore',
        beginningIcon: FaRegCompass,
        url: '/user/explore'
    },
    {
        name: 'Souvenir',
        beginningIcon: AiOutlineShoppingCart,
        url: '/user/souvenir'
    },
]

export { dummyNavbar }
