import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";

const Footer = () => {
    return (
        <footer className="p-5 md:px-14">
            <div className="flex items-start justify-between flex-wrap">
                <div className="md:w-[30%] md:mr-10">
                    <a href="/" className="w-fit block">
                        <Typography
                            variant="h3"
                            className="font-semibold text-red-600 w-fit"
                        >teratour</Typography>
                    </a>
                    <Typography variant="body2" className="mt-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui neque nam vero reiciendis mollitia placeat, eum atque!
                    </Typography>
                </div>
                <div className="md:w-[60%] flex items-start justify-between flex-wrap">
                    <div className="md:w-[13%] md:min-w-0 min-w-[140px] md:my-0 my-5">
                        <Typography variant="h6" className="font-semibold mb-5">Fitur</Typography>
                        <div>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[13%] md:min-w-0 min-w-[140px] md:my-0 my-5">
                        <Typography variant="h6" className="font-semibold mb-5">Fitur</Typography>
                        <div>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[13%] md:min-w-0 min-w-[140px] md:my-0 my-5">
                        <Typography variant="h6" className="font-semibold mb-5">Fitur</Typography>
                        <div>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[13%] md:min-w-0 min-w-[140px] md:my-0 my-5">
                        <Typography variant="h6" className="font-semibold mb-5">Fitur</Typography>
                        <div>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                            <a href="/">
                                <Button color="link-grey" className="whitespace-nowrap my-3 text-sm" style={{ padding: '0' }}>Tentang 1</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-[1.5px] my-5 w-full bg-gray-500" />
            <div className="flex items-center">
                <Button color="link-grey" className="text-sm">2023 Teratour. All Rights Reserved</Button>
                <Button color="link-grey" className="text-sm">Syarat & Ketentuan</Button>
                <Button color="link-grey" className="text-sm">Kebijakan Privasi</Button>
            </div>
        </footer>
    );
}

export default Footer;
