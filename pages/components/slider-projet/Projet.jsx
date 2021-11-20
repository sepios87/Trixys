import React from 'react';
import classes from './Projet.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const projets = [
    {
        titre: 'Projet 1',
        texte: 'Lorem ipsu dorl erger zberoinvbe rabierzb eribe rbiàern berb erboie rberi berb erb',
    },
    {
        titre: 'Projet 2',
        texte: 'Lorem ipsu dorl erger zberoinvbe rabierzb eribe rbiàern berb erboie rberi berb erb',
    },
];

SwiperCore.use([Pagination, Navigation]);

const Projet = () => {
    return (
        <section className={classes.projet}>
            <div
                className={`swiper-project-button-prev ${classes.swiperButtonPrev}`}
            >
                <BiLeftArrow />
            </div>
            <Swiper
                autoHeight={true}
                keyboard={true}
                mousewheel={false}
                speed={800}
                pagination={{
                    el: '.project__pagination',
                    type: 'fraction',
                }}
                navigation={{
                    nextEl: '.swiper-project-button-next',
                    prevEl: '.swiper-project-button-prev',
                }}
            >
                {projets.map((e, index) => (
                    <SwiperSlide key={index}>
                        <article className={classes.projet__card}>
                            <div className={classes.projet__infos}>
                                <h2>{e.titre}</h2>
                                <p>{e.texte}</p>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
                <div
                    className={`project__pagination ${classes.project__pagination}`}
                />
            </Swiper>
            <div
                className={`swiper-project-button-next ${classes.swiperButtonNext}`}
            >
                <BiRightArrow />
            </div>
        </section>
    );
};

export default Projet;
