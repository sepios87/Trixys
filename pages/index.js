import React, {useState, createContext, useEffect} from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Keyboard, Mousewheel, Pagination } from 'swiper';
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
import classes from './index.module.scss';

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

    const checkIfMobile = () => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        setMusic(localStorage.getItem('music') ?? false);
    }, []);

    return (
        <MusicContext.Provider value={music}>
            <Head>
                <title>Trixys Agence Web à La Rochelle</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <img className={classes.logo}
                 src="svg/logo.svg"
                 alt="logo"
                 onClick={() => swiper.slideTo(0)}
            />
            <Theme music={music} setMusic={setMusic} />
            <Vague waveTransition={waveTransition} />

            <img
                src="svg/croix.svg"
                loading="lazy"
                alt="croix"
                className={`${classes.croix} ${
                    !swiper?.activeIndex > 0 && classes.hidden
                }`}
            />
            <img
                src="svg/montagne.svg"
                loading="lazy"
                alt="montagnes"
                className={`${classes.montagne} ${
                    !swiper?.activeIndex > 0 && classes.hidden
                }`}
            />

            {width > 780 &&
                !checkIfMobile() &&
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
                condition={width > 780 && !checkIfMobile()}
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
