import React from 'react';
import classes from './Projet.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const projets = [
    {
        titre: 'Unumondo',
        texte: "Refonte du site web de l'association Unumondo sensibilisant au réchauffement climatique",
        img: 'img/unumondo.png',
    },
    {
        titre: 'Trixys',
        texte: 'Création de notre site vitrine',
        img: 'img/trixys.png',
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
                        <article
                            style={{ backgroundImage: `url(${e.img})` }}
                            className={classes.projet__card}
                        >
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
