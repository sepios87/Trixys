import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ConditionalWrapper = ({ condition, children }) => {
    return condition ? <Swiper
        direction={'vertical'}
        slidesPerView={1}
        enabled={false}
        scrollEnabled={false}
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
    >{children}</Swiper> : children;
};

export default ConditionalWrapper;
