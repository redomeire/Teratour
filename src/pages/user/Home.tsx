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
            <section className="md:px-16 px-10 mt-32">
                <Typography variant="h4" className="font-bold capitalize mb-2">kota destinasi wisata favorit</Typography>
                <Typography variant="body2" className="capitalize">Temukan tujuan destinasi wisata setiap kota di seluruh indonesia</Typography>
                <div className="relative">
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
            </section>
            <section className="md:px-16 px-10 mt-20">
                <Typography variant="h4" className="font-bold capitalize mb-2">Temukan Tourguide Profesional di Lokasi Destinasi Wisata Anda</Typography>
                <Typography variant="body2" className="capitalize">Tourguide profesional kami siap memandu Anda untuk liburan dengan aman dan nyaman.</Typography>
                <div className="flex justify-start flex-wrap mt-5">
                    <CardTourGuide/>
                    <CardTourGuide/>
                    <CardTourGuide/>
                    <CardTourGuide/>
                    <CardTourGuide/>
                    <CardTourGuide/>
                </div>
            </section>
            <section className="md:px-16 px-10 mt-20 mb-32">
                <Typography variant="h4" className="font-bold capitalize mb-2">Dapatkan Produk Oleh-Oleh Khas Daerah di Seluruh Pelosok Indonesia</Typography>
                <Typography variant="body2" className="capitalize">Mulai dari makanan lokal hingga souvenir khas daerah di Indonesia semuanya ada di sini. </Typography>
                <div className="flex justify-start flex-wrap mt-5">
                    <CardSouvenir/>
                    <CardSouvenir/>
                    <CardSouvenir/>
                    <CardSouvenir/>
                    <CardSouvenir/>
                    <CardSouvenir/>
                    <CardSouvenir/>
                </div>
            </section>
        </UserLayout>
    );
}

export default Home;
