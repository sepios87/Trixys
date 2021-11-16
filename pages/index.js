import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Keyboard, Mousewheel, Pagination } from 'swiper';
import MusicController from './components/music-controller/MusicController';
import Vague from './components/vague/Vague';
import Header from './components/header/Header';
import Bio from './components/bio/Bio';
import Projet from './components/projet/Projet';
import Estimate from './components/estimate/Estimate';
import Contact from './components/contact/Contact';
import SliderMembers from './components/slider-members/SliderMembers';

SwiperCore.use([Mousewheel, Pagination, Keyboard]);

export default function Home() {
    const [waveTransition, setWaveTransition] = useState(false);
    const [numPage, setNumPage] = useState(0);
    const [music, setMusic] = useState(null);

    return (
        <>
            <MusicController music={music} setMusic={setMusic} />
            <Vague waveTransition={waveTransition} />
            <div className="pagination"></div>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                mousewheel={true}
                keyboard={{ enabled: true, onlyInViewport: false }}
                pagination={{
                    clickable: true,
                    el: '.pagination',
                    clickable: true,
                    bulletActiveClass: 'pagination__number--active',
                    renderBullet: (_, className) =>
                        `<span class="${className} pagination__number"></span>`,
                }}
                onSlideChange={(e) => {
                    setWaveTransition(true);
                    setTimeout(() => setWaveTransition(false), 800);
                }}
                speed={800}
            >
                <SwiperSlide>
                    <Header />
                </SwiperSlide>
                <SwiperSlide>
                    <Bio />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderMembers />
                </SwiperSlide>
                <SwiperSlide>
                    <Projet />
                </SwiperSlide>
                <SwiperSlide>
                    <Estimate />
                </SwiperSlide>
                <SwiperSlide>
                    <Contact />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
