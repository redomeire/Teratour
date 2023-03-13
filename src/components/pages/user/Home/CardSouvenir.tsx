import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { AiFillHeart, AiTwotoneStar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const CardSouvenir = () => {
    return (
        <div className="m-2 rounded-xl md:min-w-[250px] md:max-w-[250px] min-w-full transition duration-200 hover:shadow-lg shadow-sm min-h-[300px] bg-white border cursor-pointer">
            <div className="bg-[url('https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')] w-full min-h-[120px] bg-cover bg-center rounded-t-xl"></div>
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-[20px] h-[20px] rounded-full border border-black" />
                        <div className="ml-2 flex items-center">
                            <Typography variant="body2" className="font-semibold">Om Wijaya</Typography>
                            <span className="ml-2">
                                &#8226;
                            </span>
                            <div className="flex items-center">
                                <AiTwotoneStar size={14} className="ml-2 text-yellow-500"/>
                                <span className="font-semibold text-[12px] ml-1">4.5</span>
                                <span className="text-[12px] ml-1">(110)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-3">
                    <div className=" bg-green-200 px-2 font-semibold text-green-600 rounded">
                        <Typography variant="body2" style={{ fontSize: '12px' }}>Makanan</Typography>
                    </div>
                    <div className="ml-2 bg-yellow-100 px-2 font-semibold text-yellow-600 rounded">
                        <Typography variant="body2" style={{ fontSize: '12px' }}>Souvenir</Typography>
                    </div>
                </div>
                <Typography variant="body" className="w-full mt-3 text-black font-semibold">Malang Strudel</Typography>
                <Typography variant="body2" className="w-full mt-3 text-gray-500" style={{ fontSize: '12px' }}>Harga mulai dari</Typography>
                <Typography variant="body2" className="w-full text-black font-semibold">IDR 100.000</Typography>
            </div>
        </div>
    );
}

export default CardSouvenir;
