import React, { useState, createContext } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Keyboard, Mousewheel, Pagination } from 'swiper';
import MusicController from './components/music-controller/MusicController';
import Vague from './components/vague/Vague';
import Header from './components/header/Header';
import Bio from './components/bio/Bio';
import Projet from './components/slider-projet/Projet';
import Estimate from './components/estimate/Estimate';
import Contact from './components/contact/Contact';
import SliderMembers from './components/slider-members/SliderMembers';
import Theme from './components/theme/Theme';
import useSound from 'use-sound';
import Services from './components/services/Services';
import ConditionalWrapper from '../components/conditionalwrapper/ConditionalWrapper';
import { useTransition, animated } from 'react-spring';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Triangle from './components/triangle/Triangle';
import classes from '../styles/Home.module.scss';

SwiperCore.use([Mousewheel, Pagination, Keyboard]);

const MusicContext = createContext(null);

export { MusicContext };

export default function Home() {
    const [waveTransition, setWaveTransition] = useState(false);
    const [music, setMusic] = useState(null);
    const [play] = useSound('/sounds/transition.mp3');

    const {width} = useWindowDimensions();

    const transitions = useTransition(music == null  ? [] : true, {
        from: { opacity: 0, transform: 'translate(100%, -50%)' },
        enter: { opacity: 1, transform: 'translate(0, -50%)' },
        leave: { opacity: 0, transform: 'translate(-100%, -50%)' },
        delay: 1000,
    });

    return (
        <MusicContext.Provider value={music}>
            <MusicController music={music} setMusic={setMusic} />
            <Theme music={music} setMusic={setMusic} />
            <Vague waveTransition={waveTransition} />
            <Triangle num={3} classNameTriangle={classes.triangle1} />
            <Triangle num={1} classNameTriangle={classes.triangle3} />
            <Triangle num={5} classNameTriangle={classes.triangle8} />

            {width > 780 && transitions(({ opacity, transform }) => (
                <animated.div
                    className="pagination"
                    style={{
                        opacity: opacity,
                        transform: transform
                    }}
                />
            ))}
            <ConditionalWrapper
                condition={width > 780}
                wrapper={(children) => (
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        mousewheel={true}
                        keyboard={{ enabled: true, onlyInViewport: false }}
                        pagination={{
                            clickable: true,
                            el: '.pagination',
                            bulletActiveClass: 'pagination__number--active',
                            renderBullet: (_, className) =>
                                `<span class="${className} pagination__number"></span>`,
                        }}
                        onSlideChange={() => {
                            music && play();
                            setWaveTransition(true);
                            setTimeout(() => setWaveTransition(false), 800);
                        }}
                        speed={800}
                    >
                        {children}
                    </Swiper>
                )}
            >
                <SwiperSlide>
                    <Header />
                </SwiperSlide>
                <SwiperSlide>
                    <Bio />
                </SwiperSlide>
                <SwiperSlide>
                    <Services />
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
            </ConditionalWrapper>
        </MusicContext.Provider>
    );
}
