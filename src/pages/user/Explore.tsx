import UserLayout from "@/components/partials/layout/UserLayout";
import Typography from "@/components/typography/Typography";
import Input from "@/components/input/Input";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "@/components/button/Button";
import BreadCrumbs from "@/components/breadcrumbs";
import FilterCard from "@/modules/pages/user/explore/FilterCard";
import Tab from "@/modules/pages/user/explore/Tab";
import Dropdown from "@/components/dropdown";
import { IoIosCloseCircle } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { useContext } from "react";
import { ExploreContext } from "@/context/ExploreContext";

// tabs
import WisataTab from "@/modules/pages/user/explore/tabs/WisataTab";
import ItineraryTab from "@/modules/pages/user/explore/tabs/ItineraryTab";
import TourGuideTab from "@/modules/pages/user/explore/tabs/TourguideTab";
import SouvenirTab from "@/modules/pages/user/explore/tabs/SouvenirTab";

const Explore = () => {
    const { tab } = useContext(ExploreContext)

    return (
        <UserLayout>
            <section className="flex items-center justify-center flex-col jumbotron w-full p-5 min-h-[400px] bg-cover bg-center" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1505881502353-a1986add3762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1116&q=80)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Typography variant="h3" className="font-bold uppercase text-white">destinasi wisata</Typography>
                <Typography variant="body2" className="text-white mt-5 text-center">Temukan tujuan destinasi wisata setiap kota di <br />seluruh Indonesia</Typography>
                <div className="flex items-center mt-5 md:w-[40%]">
                    <Input
                        className="placeholder:text-sm"
                        placeholder="Cari itinerary, destinasi, tour guide, dan lainnya"
                        beginningIcon={<AiOutlineSearch size={20} />}
                    />
                    <Button color="primary" className="ml-2 py-2">Cari</Button>
                </div>
            </section>
            <main className="md:px-14 mb-10">
                <BreadCrumbs
                    links={[
                        { name: 'Beranda', url: '/' },
                        { name: 'Explore', url: '/user/explore' },
                    ]}
                />
                <div className="flex items-start">
                    <FilterCard />
                    <div className="ml-10 w-full">
                        <Tab
                            item={['Wisata', 'Itinerary', 'Tourguide', 'Oleh-Oleh']}
                        />
                        <div className="mt-14 flex items-center justify-between">
                            <Typography variant="">69 hasil</Typography>
                            <Dropdown defaultOpen={false} selectedValue="Paling sesuai" floating title="Atur Berdasarkan">
                                <Button color="link" className={`!py-1 !text-black border-l-2 !rounded-none border-l-red-500`}>
                                    <Typography variant="">Paling Sesuai</Typography>
                                </Button>
                                <Button color="link" className={`!py-1 !text-black border-l-2 !rounded-none border-l-transparent`}>
                                    <Typography variant="">Rating dan Ulasan</Typography>
                                </Button>
                                <Button color="link" className={`!py-1 !text-black border-l-2 !rounded-none border-l-transparent`}>
                                    <Typography variant="">Terpopuler</Typography>
                                </Button>
                                <Button color="link" className={`!py-1 !text-black border-l-2 !rounded-none border-l-transparent`}>
                                    <Typography variant="">Harga tertinggi</Typography>
                                </Button>
                                <Button color="link" className={`!py-1 !text-black border-l-2 !rounded-none border-l-transparent`}>
                                    <Typography variant="">Harga terendah</Typography>
                                </Button>
                            </Dropdown>
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center">
                                <Typography variant="body" className="font-semibold">pilihan anda</Typography>
                                <Button color="link" className="font-semibold">
                                    <Typography variant="body2">hapus filter</Typography>
                                </Button>
                            </div>
                            <div className="mt-3">
                                <Button color="secondary-grey" className="!p-1 mr-2" endIcon={<IoIosCloseCircle />}>
                                    <Typography variant="">Malang</Typography>
                                </Button>
                            </div>
                        </div>
                        {
                            tab === 'Wisata' ?
                            <WisataTab/>
                            :
                            tab === 'Itinerary' ?
                            <ItineraryTab/>
                            :
                            tab === 'Tourguide' ?
                            <TourGuideTab/>
                            :
                            <SouvenirTab/>
                        }
                        <Button color="tertiary" className="!bg-[#F6D2D4] mx-auto mt-10 focus:ring-2 focus:ring-red-500" endIcon={<BiChevronDown size={20}/>}>
                            <Typography variant="">Tampilkan lainnya</Typography>
                        </Button>
                    </div>
                </div>
            </main>
        </UserLayout>
    );
}

export default Explore;
