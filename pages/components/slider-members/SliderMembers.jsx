import { Swiper, SwiperSlide } from 'swiper/react';
import Member from './member/Member';
import SwiperCore, { Pagination, Controller } from 'swiper';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import classes from './SliderMember.module.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const tabMembers = [
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Florian TORIBIO',
        status: 'Développeur Web',
        descr: 'Passionné d\'informatique, j\'aime mettre ma passion au service des autres. J\'adore aider des personnes à résoudre des problèmes et leur simplifier la vie ! C\'est pourquoi j\'ai rejoint Trixys en tant que développeur web afin de mener des projets qui concrétiseront vos idées.',
        portfolio: 'https://www.sepios.fr'
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Benjamin PELAUDEIX',
        status: 'Développeur Web',
        descr: 'Attiré par le développement Web et à la recherche de nouveaux défis, j’ai décidé de rejoindre l’agence Trixys en septembre 2021 en tant que développeur web. Rigoureux, collectif et force de proposition, je serai en capacité de vous guider et répondre à vos besoins tout au long de vos projets.',
        portfolio: 'https://benjaminpelaudeix.fr/'
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Rémi HAY--RIMBAULT',
        status: 'Développeur Web',
        descr: 'Féru de technologie et ayant découvert le développement récemment je suis le plus novice des développeurs de l’agence Trixys. Aimant la coopération et la nouveauté, je ferai au mieux pour pouvoir compléter mes collègues et aider à la réussite de vos projets.',
        portfolio: 'https://www.remihr.fr/v1/'
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Océane Guilloizeau',
        status: 'Web designeuse',
        descr: 'Passionnée par le graphisme et le web design, je saurais créer des maquettes et des visuels adaptés à tous vos projets. A l\'écoute, création et soucieuse du détail, je vous accompagnerai et vous conseillerai dans vos projets pour une identité visuelle de qualité.',
        portfolio: 'https://oceaneguilloizeau.alwaysdata.net/'
    },
];

SwiperCore.use([Pagination, Controller]);

const SliderMembers = () => {
    return (
        <section className={classes.members} id="members">
            <div
                className={`swiper-member-button-prev ${classes.swiperButtonPrev}`}
            >
                <BsChevronLeft />
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
                            portfolio={e.portfolio}
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
                <BsChevronRight />
            </div>
        </section>
    );
};

export default SliderMembers;
