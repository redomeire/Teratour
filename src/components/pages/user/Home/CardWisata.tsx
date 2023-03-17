import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { AiFillHeart } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const CardWisata = () => {
    return (
        <div className="m-[6px] rounded-xl md:min-w-[270px] md:max-w-[250px] transition duration-200 hover:shadow-lg shadow-sm min-w-full min-h-[300px] bg-white border cursor-pointer">
            <div className="bg-[url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] w-full min-h-[120px] bg-cover bg-center rounded-t-xl"></div>
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-[30px] h-[30px] rounded-full border border-black" />
                        <div className="ml-2">
                            <Typography variant="body2" className="font-semibold">Pantai Baluran</Typography>
                            <Button color="link-grey" style={{ padding: '0' }} beginningIcon={<GrLocation />}>
                                <Typography variant="body2">Malang</Typography>
                            </Button>
                        </div>
                    </div>
                    <AiFillHeart size={23} className="text-red-500"/>
                </div>
                <div className="flex items-center mt-3">
                    <Typography variant="body2" style={{ fontSize: '13px' }}>Indonesia</Typography>
                    <div className="ml-2 bg-red-200 px-2 font-semibold text-red-600 rounded">
                        <Typography variant="body2" style={{ fontSize: '12px' }}>Alam</Typography>
                    </div>
                </div>
                <Typography variant="body2" className="w-full mt-3 text-gray-500" style={{ fontSize: '12px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</Typography>
                <Typography variant="body2" className="w-full mt-3 text-gray-500" style={{ fontSize: '12px' }}>Perkiraan harga</Typography>
                <Typography variant="body2" className="w-full text-black font-semibold">IDR 100.000</Typography>
            </div>
        </div>
    );
}

export default CardWisata;
