import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { IoIosMailOpen, IoIosGlobe, IoLogoInstagram, IoLogoTwitter } from "react-icons/io"
import { ImFacebook } from "react-icons/im"

import Pattern from "@/assets/home/footer_pattern.png";

const Footer = () => {
    return (
        <footer className="bg-[#25282B] text-white">
            <div className="p-5 md:px-14">
                <div className="flex items-start justify-between flex-wrap">
                    <div className="md:w-[30%] md:mr-10">
                        <a href="/" className="w-fit block">
                            <Typography
                                variant="h4"
                                className="font-semibold w-fit"
                            >teratour</Typography>
                        </a>
                        <Typography variant="" className="mt-5 text-[13px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui neque nam vero reiciendis mollitia placeat, eum atque!
                        </Typography>
                    </div>
                    <div className="md:w-[60%] flex items-start justify-between flex-wrap">
                        <div className="md:w-[13%] md:min-w-0 min-w-[140px] md:my-0 my-5">
                            <Typography variant="h6" className="font-semibold mb-5">Layanan</Typography>
                            <div>
                                <a href="/">
                                    <Button color="link-grey" className="whitespace-nowrap my-3 text-sm !text-[#98A2B3]" style={{ padding: '0' }}>Destinasi Wisata</Button>
                                </a>
                                <a href="/">
                                    <Button color="link-grey" className="whitespace-nowrap my-3 text-sm !text-[#98A2B3]" style={{ padding: '0' }}>Itinerary</Button>
                                </a>
                                <a href="/">
                                    <Button color="link-grey" className="whitespace-nowrap my-3 text-sm !text-[#98A2B3]" style={{ padding: '0' }}>Tourguide</Button>
                                </a>
                                <a href="/">
                                    <Button color="link-grey" className="whitespace-nowrap my-3 text-sm !text-[#98A2B3]" style={{ padding: '0' }}>Oleh-oleh</Button>
                                </a>
                            </div>
                        </div>
                        <div className="md:w-[30%] md:min-w-0 min-w-[140px] md:my-0 my-5 md:mb-5 mb-14">
                            <Typography variant="h6" className="font-semibold mb-5 whitespace-nowrap">Partner Pembayaran</Typography>
                            <div className="flex items-center md:justify-center flex-wrap w-full">
                                <Button color="secondary-grey" className="m-[4px]">

                                </Button>
                                <Button color="secondary-grey" className="m-[4px]">

                                </Button>
                                <Button color="secondary-grey" className="m-[4px]">

                                </Button>
                                <Button color="secondary-grey" className="m-[4px]">

                                </Button>
                                <Button color="secondary-grey" className="m-[4px]">

                                </Button>
                                <Button color="secondary-grey" className="m-[4px]">

                                </Button>
                                <Button color="secondary-grey" className="m-[4px]">

                                </Button>
                                <Button color="secondary-grey" className="m-[4px]">

                                </Button>
                                <Button color="secondary-grey" className="m-[4px]">

                                </Button>
                                <Button color="secondary-grey" className="m-[4px]">

                                </Button>
                                <Button color="secondary-grey" className="m-[4px]">

                                </Button>

                            </div>
                        </div>
                        <div>
                            <Typography variant="h6" className="font-semibold mb-5 whitespace-nowrap">Kontak Kami</Typography>
                            <Button
                                color="link-grey"
                                className="whitespace-nowrap my-3 text-sm !text-[#98A2B3]"
                                style={{ padding: '0' }}
                                beginningIcon={<IoIosMailOpen />}
                            >layananpelanggan@teratour.id</Button>
                            <Button
                                color="link-grey"
                                className="whitespace-nowrap my-3 text-sm !text-[#98A2B3]"
                                style={{ padding: '0' }}
                                beginningIcon={<IoIosGlobe />}
                            >teratour.id</Button>
                            <div className="flex items-center">
                                <Button color="tertiary-grey" className="!rounded-full !p-4 w-[30px] h-[30px] !border-white !border-[2px] !border-solid text-white hover:text-gray-600 mr-4">
                                    <IoLogoInstagram size={20} />
                                </Button>
                                <Button color="tertiary-grey" className="!rounded-full !p-4 w-[30px] h-[30px] !border-white !border-[2px] !border-solid text-white hover:text-gray-600 mr-4">
                                    <ImFacebook size={15} />
                                </Button>
                                <Button color="tertiary-grey" className="!rounded-full !p-4 w-[30px] h-[30px] !border-white !border-[2px] !border-solid text-white hover:text-gray-600">
                                    <IoLogoTwitter size={15} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mb-5 mt-20 w-full border-gray-500 border-[1.2px]" />
                <div className="flex md:items-center md:flex-row flex-col">
                    <Button color="link-grey" className="text-sm !text-white !justify-start  px-0 mr-5">2023 Teratour. All Rights Reserved</Button>
                    <Button color="link-grey" className="text-sm !text-white !justify-start  px-0 mr-5">Syarat & Ketentuan</Button>
                    <Button color="link-grey" className="text-sm !text-white !justify-start  px-0">Kebijakan Privasi</Button>
                </div>
            </div>
            <div className="min-h-[30px] bg-cover bg-center brightness-50 opacity-40" style={{ backgroundImage: `url(${Pattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            </div>
        </footer>
    );
}

export default Footer;
