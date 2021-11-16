import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Keyboard, Mousewheel, Pagination } from 'swiper';
import MusicController from './components/music-controller/MusicController';
import Vague from './components/vague/Vague';
import Header from './components/header/Header';
import Bio from './components/bio/Bio';
import Member from './components/member/Member';
import Projet from './components/projet/Projet';
import Estimate from './components/estimate/Estimate';
import Contact from './components/contact/Contact';

SwiperCore.use([Mousewheel, Pagination, Keyboard]);

export default function Home() {
    const [waveTransition, setWaveTransition] = useState(false);
    const [numPage, setNumPage] = useState(0);
    const [music, setMusic] = useState(null);

    return (
        <>
            <MusicController music={music} setMusic={setMusic} />
            <Vague waveTransition={waveTransition} />
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                mousewheel={true}
                keyboard={{enabled: true, onlyInViewport: false}}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={() => {
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
                    <Member
                        image="https://picsum.photos/900/1000"
                        name="Florian TORIBIO"
                        status="Développeur Web"
                        descr="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Member
                        image="https://picsum.photos/900/1000"
                        name="Benjamin PELAUDEIX"
                        status="Développeur Web"
                        descr="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Member
                        image="https://picsum.photos/900/1000"
                        name="Océane Guilloizeau"
                        status="Web designeuse"
                        descr="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!"
                    />
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
