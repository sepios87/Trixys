import React from 'react';
import classes from './Projet.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { isMobile } from 'react-device-detect';

const Projet = () => {
    return !isMobile ? (
        <div className={classes.container}>
            <div className={`${classes.clip} ${classes.clip1}`}>
                <div className={classes.content}>
                    <h2>Projet 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint libero nostrum dolore rem! Quibusdam architecto
                        maiores aliquam quaerat vitae, nemo, nam cupiditate,
                        exercitationem sed et commodi doloribus ad? Atque,
                        tempora!
                    </p>
                </div>
            </div>
            <div className={`${classes.clip} ${classes.clip2}`}>
                <div className={classes.content}>
                    <h2>Projet 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint libero nostrum dolore rem! Quibusdam architecto
                        maiores aliquam quaerat vitae, nemo, nam cupiditate,
                        exercitationem sed et commodi doloribus ad? Atque,
                        tempora!
                    </p>
                </div>
            </div>
            <div className={`${classes.clip} ${classes.clip3}`}>
                <div className={classes.content}>
                    <h2>Projet 3</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint libero nostrum dolore rem! Quibusdam architecto
                        maiores aliquam quaerat vitae, nemo, nam cupiditate,
                        exercitationem sed et commodi doloribus ad? Atque,
                        tempora!
                    </p>
                </div>
            </div>
        </div>
    ) : (
        <Swiper
            className={classes.swiper}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className={classes.swiperItem}>
                <h2>Projet 1</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint libero nostrum dolore rem! Quibusdam architecto maiores
                    aliquam quaerat vitae, nemo, nam cupiditate, exercitationem
                    sed et commodi doloribus ad? Atque, tempora!
                </p>
            </SwiperSlide>
            <SwiperSlide className={classes.swiperItem}>
                <h2>Projet 2</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint libero nostrum dolore rem! Quibusdam architecto maiores
                    aliquam quaerat vitae, nemo, nam cupiditate, exercitationem
                    sed et commodi doloribus ad? Atque, tempora!
                </p>
            </SwiperSlide>
            <SwiperSlide className={classes.swiperItem}>
                <h2>Projet 3</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint libero nostrum dolore rem! Quibusdam architecto maiores
                    aliquam quaerat vitae, nemo, nam cupiditate, exercitationem
                    sed et commodi doloribus ad? Atque, tempora!
                </p>
            </SwiperSlide>
        </Swiper>
    );
};

export default Projet;
