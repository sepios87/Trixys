import React from 'react';
import classes from './Projet.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";

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

SwiperCore.use([Pagination, Navigation])

const Projet = () => {
    return (
        <section className={classes.projet}>
                <Swiper
                    autoHeight={true}
                    keyboard={true}
                    mousewheel={false}
                    navigation={true}
                    speed={800}
                    pagination={{
                        el: '.project__pagination',
                        type: 'fraction'
                    }}
                >
                    {projets.map((e, index) => (
                        <SwiperSlide
                            key={index}
                        >
                            <article className={classes.projet__card}>
                                <div className={classes.projet__infos}>
                                    <h2>{e.titre}</h2>
                                    <p>{e.texte}</p>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                    <div className={`project__pagination ${classes.project__pagination}`} />
                </Swiper>
        </section>
    );
};

export default Projet;
