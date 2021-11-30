import { Swiper, SwiperSlide } from 'swiper/react';
import Member from './member/Member';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import classes from './SliderMember.module.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Triangle from '../triangle/Triangle';

const tabMembers = [
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Florian TORIBIO',
        status: 'Développeur Web',
        descr: "Passionné d'informatique, j'aime mettre ma passion au service des autres. J'adore aider des personnes à résoudre des problèmes et leur simplifier la vie !\n\n C'est pourquoi j'ai rejoint Trixys en tant que développeur web afin de mener des projets qui concrétiseront vos idées.",
        portfolio: 'https://www.sepios.fr',
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Benjamin PELAUDEIX',
        status: 'Développeur Web',
        descr: 'Attiré par le développement Web et à la recherche de nouveaux défis, j’ai décidé de rejoindre l’agence Trixys en septembre 2021 en tant que développeur web.\n\n Rigoureux, collectif et force de proposition, je serai en capacité de vous guider et répondre à vos besoins tout au long de vos projets.',
        portfolio: 'https://benjaminpelaudeix.fr/',
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Rémi HAY--RIMBAULT',
        status: 'Développeur Web',
        descr: 'Féru de technologie et ayant découvert le développement récemment je suis le plus novice des développeurs de l’agence Trixys.\n\n Aimant la coopération et la nouveauté, je ferai au mieux pour pouvoir compléter mes collègues et aider à la réussite de vos projets.',
        portfolio: 'https://www.remihr.fr/',
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Océane Guilloizeau',
        status: 'Web designeuse',
        descr: "Passionnée par le graphisme et le web design, je saurais créer des maquettes et des visuels adaptés à tous vos projets.\n\n A l'écoute, création et soucieuse du détail, je vous accompagnerai et vous conseillerai dans vos projets pour une identité visuelle de qualité.",
        portfolio: 'https://oceaneguilloizeau.alwaysdata.net/',
    },
];

SwiperCore.use([Pagination, Navigation]);

const SliderMembers = () => {
    return (
        <section className={classes.members} id="members">
            {/* background elements */}
            <img src="svg/croix.svg" alt="croix" className="croix" />
            <img src="svg/montagne.svg" alt="montagnes" className="montagne" />
            <Triangle num={3} classNameTriangle="triangle__gris"/>
            <Triangle num={6} classNameTriangle="triangle__jaune"/>
            {/* end background elements */}
            <Swiper
                autoHeight={true}
                keyboard={true}
                mousewheel={false}
                speed={800}
                loop={true}
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
            </Swiper>
            <div className={classes.numChevron}>
                <BsChevronLeft
                    className={`swiper-member-button-prev ${classes.swiperButtonPrev}`}
                />
                <div
                    className={`member__pagination ${classes.member__pagination}`}
                />
                <BsChevronRight
                    className={`swiper-member-button-next ${classes.swiperButtonNext}`}
                />
            </div>
        </section>
    );
};

export default SliderMembers;
