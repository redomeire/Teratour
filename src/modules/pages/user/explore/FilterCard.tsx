import Button from "@/components/button/Button";
import Card from "@/components/card";
import Dropdown from "@/components/dropdown";
import Input from "@/components/input/Input";
import StarRating from "@/components/rating";
import Typography from "@/components/typography/Typography";
import { AiOutlineSearch } from "react-icons/ai";

const FilterCard = () => {
    return (
        <div className="sticky top-20">
            <Typography variant="h5" className="font-bold">Filter</Typography>
            <Card className="w-fit">

                <Dropdown
                    defaultOpen
                    floating={false}
                    title="Lokasi"
                >
                    <Input
                        placeholder="Cari wilayah"
                        className="w-[200px] mb-3 hover:shadow-md"
                        beginningIcon={<AiOutlineSearch size={20} />}
                    />
                    <div className="flex items-center justify-start my-2">
                        <div>
                            <Input
                                type="checkbox"
                                className="!w-fit peer-checked:-slate-600"
                            />
                        </div>
                        <Typography variant="body2" className="ml-2">Jabodetabek</Typography>
                    </div>
                    <div className="flex items-center justify-start my-2">
                        <div>
                            <Input
                                type="checkbox"
                                className="!w-fit peer-checked:-slate-600"
                            />
                        </div>
                        <Typography variant="body2" className="ml-2">Bandung</Typography>
                    </div>
                    <div className="flex items-center justify-start my-2">
                        <div>
                            <Input
                                type="checkbox"
                                className="!w-fit peer-checked:-slate-600"
                            />
                        </div>
                        <Typography variant="body2" className="ml-2">Malang</Typography>
                    </div>
                    <div className="flex items-center justify-start my-2">
                        <div>
                            <Input
                                type="checkbox"
                                className="!w-fit peer-checked:-slate-600"
                            />
                        </div>
                        <Typography variant="body2" className="ml-2">Bali</Typography>
                    </div>
                    <Button color="link" className="!px-0">
                        <Typography variant="body2" className="font-semibold">lihat selengkapnya</Typography>
                    </Button>
                </Dropdown>
                <hr className="divide-y-8 mb-5" />
                <Dropdown
                    defaultOpen
                    floating={false}
                    title="Kategori Wisata"
                >
                    <div className="flex items-center justify-start my-2">
                        <div>
                            <Input
                                type="checkbox"
                                className="!w-fit peer-checked:-slate-600"
                            />
                        </div>
                        <Typography variant="body2" className="ml-2">Wisata Alam</Typography>
                    </div>
                    <div className="flex items-center justify-start my-2">
                        <div>
                            <Input
                                type="checkbox"
                                className="!w-fit peer-checked:-slate-600"
                            />
                        </div>
                        <Typography variant="body2" className="ml-2">Taman Hiburan</Typography>
                    </div>
                    <div className="flex items-center justify-start my-2">
                        <div>
                            <Input
                                type="checkbox"
                                className="!w-fit peer-checked:-slate-600"
                            />
                        </div>
                        <Typography variant="body2" className="ml-2">Sejarah</Typography>
                    </div>
                    <div className="flex items-center justify-start my-2">
                        <div>
                            <Input
                                type="checkbox"
                                className="!w-fit peer-checked:-slate-600"
                            />
                        </div>
                        <Typography variant="body2" className="ml-2">Seni & budaya</Typography>
                    </div>
                    <div className="flex items-center justify-start my-2">
                        <div>
                            <Input
                                type="checkbox"
                                className="!w-fit peer-checked:-slate-600"
                            />
                        </div>
                        <Typography variant="body2" className="ml-2">Flora & fauna</Typography>
                    </div>
                </Dropdown>
                <hr className="divide-y-8 mb-5" />
                <Dropdown
                defaultOpen
                floating={false} title="Rating">
                    <StarRating onChange={() => { }} rating={5} />
                </Dropdown>
                <hr className="divide-y-8 mb-5" />
                <Dropdown 
                defaultOpen
                floating={false} title="Harga">
                    <div className="flex items-stretch mb-5">
                        <div className="w-[30px] flex items-center justify-center rounded-l-lg bg-neutral-300">
                            <Typography variant="body2" className="font-semibold">Rp</Typography>
                        </div>
                        <Input
                            type="number"
                            className="!rounded-l-none"
                            placeholder="Harga minimal"
                            min={0}
                        />
                    </div>
                    <div className="flex items-stretch mb-5">
                        <div className="w-[30px] flex items-center justify-center rounded-l-lg bg-neutral-300">
                            <Typography variant="body2" className="font-semibold">Rp</Typography>
                        </div>
                        <Input
                            type="number"
                            className="!rounded-l-none"
                            placeholder="Harga maksimal"
                            min={0}
                        />
                    </div>
                    <Button color="secondary-grey" className="!p-2 mb-3">&lt; Rp100 rb</Button>
                    <Button color="secondary-grey" className="!p-2 mb-3">Rp100 rb - Rp499 rb</Button>
                    <Button color="secondary-grey" className="!p-2 mb-3">Rp500 rb - Rp1 jt</Button>
                    <Button color="secondary-grey" className="!p-2 mb-3">&gt; Rp 1 jt</Button>
                </Dropdown>
            </Card>
        </div>
    );
}

export default FilterCard;
