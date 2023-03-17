import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";
import { AiOutlineSearch } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import UserLayout from "../../components/partials/layout/UserLayout";
import "@/components/styles/swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import CardDestination from "@/components/pages/user/Home/CardDestination";

import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import CardTourGuide from "@/components/pages/user/Home/CardTourGuide";
import CardSouvenir from "@/components/pages/user/Home/CardSouvenir";
import Pattern from "@/assets/home/pattern.png";

import Island from "@/assets/home/island.png";
import Itinerary from "@/assets/home/itinerary.png";
import Tourguide from "@/assets/home/Tourguide.png";
import OlehOleh from "@/assets/home/oleh_oleh.png";
import ServicePattern from "@/assets/home/service_pattern.png";
import Counter from "@/components/counter";

const Home = () => {
    const sliderRef = React.useRef<any>();

    const handlePrev = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    return (
        <UserLayout>
            <section className="jumbotron flex items-center justify-between md:px-16 px-10 md:w-[48%] mt-20 ">
                <div>
                    <Typography variant="" className="font-bold mb-5 leading-[50px] md:!text-5xl !text-3xl">Mulai Perjalananmu dengan Teratour!</Typography>
                    <Typography variant="body" className="mb-5">Temukan informasi tentang Destinasi Wisata di Kota Tujuan Anda, Tour Guide, dan Oleh-Oleh hanya di Teratour.</Typography>
                    <div className="mb-5 mt-14">
                        <Input
                            placeholder="Cari destinasi, tour guide, dan lainnya"
                            beginningIcon={<AiOutlineSearch size={20} />}
                        />
                    </div>
                    <Button color="primary" className="min-w-[100px] w-full">Cari</Button>
                </div>
                <div>
                </div>
            </section>
            <section className="md:px-16 px-10 mt-72 bg-red-500 p-14 bg-blend-overlay bg-cover bg-center" style={{ backgroundImage: `url('${Pattern}')` }}>
                <Typography variant="h4" className="font-bold capitalize mb-2 -mt-48">kota destinasi wisata favorit</Typography>
                <Typography variant="body2" className="capitalize">Temukan tujuan destinasi wisata setiap kota di seluruh indonesia</Typography>
                <div className="relative mb-10">
                    <button onClick={handlePrev} className="bg-gray-50 p-3 shadow-md active:brightness-90 transition duration-200 absolute top-1/2 z-10 -left-5 -translate-y-1/2" color="secondary-grey" style={{ borderRadius: '50%', minWidth: '20px' }}>
                        <BsChevronLeft size={25} />
                    </button>
                    <button onClick={handleNext} className="bg-gray-50 p-3 shadow-md active:brightness-90 transition duration-200 absolute top-1/2 z-10 -right-5 -translate-y-1/2" color="secondary-grey" style={{ borderRadius: '50%', minWidth: '20px' }}>
                        <BsChevronRight size={25} />
                    </button>
                    <Swiper
                        ref={sliderRef}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            800: {
                                slidesPerView: 6
                            }
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mt-10"
                        autoplay
                        spaceBetween={15}
                    >
                        <SwiperSlide>
                            <CardDestination />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardDestination />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardDestination />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardDestination />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardDestination />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardDestination />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardDestination />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardDestination />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="-mb-24">
                    <div className="p-5 rounded-full bg-white mx-auto md:w-[60%] flex items-center justify-evenly shadow-lg">
                        <div className="text-center">
                            {/* <Typography variant="h2" className="font-bold">34</Typography> */}
                            <Counter animateCount={1} from={0} to={34} variant="h2" className="font-bold text-3xl" />
                            <Typography variant="body2">Provinsi</Typography>
                        </div>
                        <div className="text-center">
                            <Counter animateCount={1} from={0} to={514} variant="h2" className="font-bold text-3xl" />
                            <Typography variant="body2">Kota</Typography>
                        </div>
                        <div className="text-center">
                            <Counter animateCount={1} from={0} to={2552} variant="h2" className="font-bold text-3xl" />
                            <Typography variant="body2">Destinasi Wisata</Typography>
                        </div>
                        <div className="text-center">
                            <Counter animateCount={1} from={0} to={97} variant="h2" className="font-bold text-3xl" />
                            <Typography variant="body2">Tourguide</Typography>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-[80%] mx-auto p-10 md:px-24 px-10 rounded-xl mt-72" style={{ background: 'linear-gradient(161.71deg, #D02026 7.64%, #A61A1E 81.66%)' }}>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/aKtb7Y3qOck" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="mx-auto rounded-3xl -mt-52 shadow-xl" allowFullScreen></iframe>
                <div className="mt-20 flex items-start md:flex-row flex-col">
                    <div>
                        <button className="bg-white p-3 py-2 rounded-full text-red-500 font-semibold">Tentang</button>
                        <Typography variant="h3" className="text-white font-semibold mt-5">teratour</Typography>
                    </div>
                    <div className="md:ml-20 text-gray-200">
                        <Typography variant="body2">
                            Teratour adalah merupakan lorem ipsum dolor sit amet consectetur. Sed sagittis quis tristique purus faucibus. Purus posuere sit cursus ultricies volutpat molestie. Vehicula ultrices morbi vitae integer felis aliquet.
                            <br />
                            <br />
                            Teratour adalah merupakan lorem ipsum dolor sit amet consectetur. Sed sagittis quis tristique purus faucibus. Purus posuere sit cursus ultricies volutpat molestie. Vehicula ultrices morbi vitae integer felis aliquet.
                        </Typography>
                    </div>
                </div>
            </section>
            <section style={{ backgroundImage: `url(${ServicePattern})` }} className="p-5 mt-20">
                <div className="bg-red-600 w-fit mx-auto p-3 rounded-full mt-5">
                    <Typography variant="body2" className="font-semibold text-white">Semua kebutuhan liburan Anda ada di Teratour</Typography>
                </div>
                <div className="w-full mt-10 flex items-center md:flex-row flex-col px-32">
                    <div className="p-5 rounded-lg flex flex-col items-center">
                        <div className="bg-white w-fit rounded-xl p-3">
                            <img src={Island} className="w-[50px]" />
                        </div>
                        <div className="text-center">
                            <Typography variant="h6" className="font-semibold my-3">Destinasi Wisata</Typography>
                            <Typography variant="body2">Temukan destinasi wisata Anda di seluruh pelosok Indonesia</Typography>
                        </div>
                    </div>
                    <div className="p-5 rounded-lg flex flex-col items-center">
                        <div className="bg-white w-fit rounded-xl p-3">
                            <img src={Itinerary} className="w-[50px]" />
                        </div>
                        <div className="text-center">
                            <Typography variant="h6" className="font-semibold my-3">Destinasi Wisata</Typography>
                            <Typography variant="body2">Temukan destinasi wisata Anda di seluruh pelosok Indonesia</Typography>
                        </div>
                    </div>
                    <div className="p-5 rounded-lg flex flex-col items-center">
                        <div className="bg-white w-fit rounded-xl p-3">
                            <img src={Tourguide} className="w-[50px]" />
                        </div>
                        <div className="text-center">
                            <Typography variant="h6" className="font-semibold my-3">Destinasi Wisata</Typography>
                            <Typography variant="body2">Temukan destinasi wisata Anda di seluruh pelosok Indonesia</Typography>
                        </div>
                    </div>
                    <div className="p-5 rounded-lg flex flex-col items-center">
                        <div className="bg-white w-fit rounded-xl p-3">
                            <img src={OlehOleh} className="w-[50px]" />
                        </div>
                        <div className="text-center">
                            <Typography variant="h6" className="font-semibold my-3">Destinasi Wisata</Typography>
                            <Typography variant="body2">Temukan destinasi wisata Anda di seluruh pelosok Indonesia</Typography>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:px-16 px-10 mt-32">
                <Typography variant="h4" className="font-bold capitalize mb-2">Temukan Tourguide Profesional di Lokasi Destinasi Wisata Anda</Typography>
                <Typography variant="body2" className="capitalize">Tourguide profesional kami siap memandu Anda untuk liburan dengan aman dan nyaman.</Typography>
                <div className="flex justify-start flex-wrap mt-5">
                    <CardTourGuide />
                    <CardTourGuide />
                    <CardTourGuide />
                    <CardTourGuide />
                    <CardTourGuide />
                    <CardTourGuide />
                </div>
            </section>
            <section className="md:px-16 px-10 mt-20 mb-32">
                <Typography variant="h4" className="font-bold capitalize mb-2">Dapatkan Produk Oleh-Oleh Khas Daerah di Seluruh Pelosok Indonesia</Typography>
                <Typography variant="body2" className="capitalize">Mulai dari makanan lokal hingga souvenir khas daerah di Indonesia semuanya ada di sini. </Typography>
                <div className="flex justify-start flex-wrap mt-5">
                    <CardSouvenir />
                    <CardSouvenir />
                    <CardSouvenir />
                    <CardSouvenir />
                    <CardSouvenir />
                    <CardSouvenir />
                    <CardSouvenir />
                </div>
            </section>
        </UserLayout>
    );
}

export default Home;
