import { Swiper, SwiperSlide } from 'swiper/react';
import Member from './member/Member';
import SwiperCore, { Pagination, Controller } from 'swiper';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import classes from './SliderMember.module.scss';

const tabMembers = [
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Florian TORIBIO',
        status: 'Développeur Web',
        descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!',
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Benjamin PELAUDEIX',
        status: 'Développeur Web',
        descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!',
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Rémi HAY--RIMBAULT',
        status: 'Développeur Web',
        descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!',
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Océane Guilloizeau',
        status: 'Web designeuse',
        descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur cum sequi nisi possimus magni ullam laudantium numquam? Suscipit repudiandae inventore amet sint sapiente libero labore velit quos ad!',
    },
];

SwiperCore.use([Pagination, Controller]);

const SliderMembers = () => {
    return (
        <section className={classes.members}>
            <div
                className={`swiper-member-button-prev ${classes.swiperButtonPrev}`}
            >
                <BiLeftArrow />
            </div>
            <Swiper
                autoHeight={true}
                keyboard={true}
                mousewheel={false}
                speed={800}
                pagination={{
                    el: '.member__pagination',
                    type: 'fraction',
                }}
                navigation={{
                    nextEl: '.swiper-member-button-next',
                    prevEl: '.swiper-member-button-prev',
                }}
            >
                {tabMembers.map((e, index) => (
                    <SwiperSlide key={index}>
                        <Member
                            image={e.image}
                            name={e.name}
                            status={e.status}
                            descr={e.descr}
                        />
                    </SwiperSlide>
                ))}
                <div
                    className={`member__pagination ${classes.member__pagination}`}
                />
            </Swiper>
            <div
                className={`swiper-member-button-next ${classes.swiperButtonNext}`}
            >
                <BiRightArrow />
            </div>
        </section>
    );
};

export default SliderMembers;
