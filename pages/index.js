import React, { useState, createContext } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Keyboard, Mousewheel, Pagination } from 'swiper';
import MusicController from './components/music-controller/MusicController';
import Vague from './components/vague/Vague';
import Header from './components/header/Header';
import Bio from './components/bio/Bio';
import Estimate from './components/estimate/Estimate';
import Contact from './components/contact/Contact';
import SliderMembers from './components/slider-members/SliderMembers';
import Theme from './components/theme/Theme';
import useSound from 'use-sound';
import Services from './components/services/Services';
import ConditionalWrapper from '../components/conditionalwrapper/ConditionalWrapper';
import { useTransition, animated } from 'react-spring';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Projets from './components/projets/Projets';
import Valeurs from './components/valeurs/Valeurs';
import Head from 'next/head';

SwiperCore.use([Mousewheel, Pagination, Keyboard]);

const MusicContext = createContext(null);

export { MusicContext };

export default function Home() {
    const [waveTransition, setWaveTransition] = useState(false);
    const [music, setMusic] = useState(null);
    const [swiper, setSwiper] = useState(null);
    const [play] = useSound('/sounds/transition.mp3');

    const { width } = useWindowDimensions();

    const transitions = useTransition(music == null ? [] : true, {
        from: { opacity: 0, transform: 'translate(100%, -50%)' },
        enter: { opacity: 1, transform: 'translate(0, -50%)' },
        leave: { opacity: 0, transform: 'translate(-100%, -50%)' },
        delay: 750,
    });

    return (
        <MusicContext.Provider value={music}>
            <Head>
                <title>Trixys</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="theme-color" content="#000000" />
                <meta name="Content-Type" content="UTF-8" />
                <meta name="Content-Language" content="fr" />
                <meta
                    name="Description"
                    content="Trixys - Agence Web à La Rochelle, nous sommes à votre disposition pour la créations de vos projets web"
                />
                <meta
                    name="Keywords"
                    content="agence, web, la-rochelle, la rochelle,  ux, design, développement web"
                />
                <meta name="Copyright" content="Trixys" />
                <meta name="Author" content="Rémi Benjamin Océane Florian" />
                <meta
                    name="Identifier-Url"
                    content="https://agence-trixys.lpmiaw.univ-lr.fr/"
                />
                <meta name="Reply-To" content="contact.trixys@gmail.com" />
                <meta name="Revisit-After" content="15 days" />
                <meta name="Rating" content="general" />
                <meta name="Distribution" content="global" />
                <meta name="Geography" content="La Rochelle, 17000" />
                <meta name="Robots" content="all" />
            </Head>
            <MusicController music={music} setMusic={setMusic} />
            <Theme music={music} setMusic={setMusic} />
            <Vague waveTransition={waveTransition} />

            {width > 780 &&
                transitions(({ opacity, transform }) => (
                    <animated.div
                        className="pagination"
                        style={{
                            opacity: opacity,
                            transform: transform,
                        }}
                    />
                ))}
            <ConditionalWrapper
                condition={width > 780}
                wrapper={(children) => (
                    <Swiper
                        onSwiper={setSwiper}
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
                    <Bio onPageMembers={() => swiper.slideTo(3)} />
                </SwiperSlide>
                <SwiperSlide>
                    <Services />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderMembers />
                </SwiperSlide>
                <SwiperSlide>
                    <Projets onEstimate={() => swiper.slideTo(6)} />
                </SwiperSlide>
                <SwiperSlide>
                    <Valeurs />
                </SwiperSlide>
                <SwiperSlide>
                    <Estimate />
                </SwiperSlide>
                <SwiperSlide>
                    <Contact width={width} />
                </SwiperSlide>
            </ConditionalWrapper>
        </MusicContext.Provider>
    );
}
