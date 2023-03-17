import { useNavigate } from "react-router-dom";
import Typography from "@/components/typography/Typography";
import Button from "@/components/button/Button";
import { BiChevronRight } from "react-icons/bi";

type Link = {
    links: {
        name: string,
        url: string
    }[]
}

const BreadCrumbs = ({ links }: Link) => {
    const navigate = useNavigate()

    return (
        <div className={`w-full py-5 flex items-center whitespace-nowrap z-10 overflow-auto`}>
            {
                links.map((item, index) => {
                    return (
                        <div key={index} className="flex items-center">
                            <Button color="link-grey" className="!px-0">
                                <Typography variant="" onClick={() => { navigate(`${item.url}`) }} className={`text-sm hover:font-semibold cursor-pointer transition duration-200 ${window.location.pathname === item.url ? 'font-semibold' : ''}`}>
                                    {item.name}
                                </Typography>
                            </Button>
                            {
                                links.length !== index + 1 &&
                                <BiChevronRight size={20} className="mx-1" />
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default BreadCrumbs
