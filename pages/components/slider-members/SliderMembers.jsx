import { Swiper, SwiperSlide } from 'swiper/react';
import Member from './member/Member';

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

const SliderMembers = () => {
    return (
        <Swiper
            direction={'horizontal'}
            slidesPerView={1}
            spaceBetween={30}
            keyboard={true}
            speed={800}
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
        </Swiper>
    );
};

export default SliderMembers;
