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
        descr: 'Passionné d\'informatique, j\'aime mettre ma passion au service des autres. J\'adore aider des personnes a résoudre des problèmes et leur simplifier la vie ! C\'est pourquoi j\'ai rejoint Trixys en tant que développeur web et mobile afin de mener des projets qui concrétiseront vos idées. Avec moi vous trouverez une personne calme et sérieuse qui sera à l\'écoute de tous vos besoins.',
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Benjamin PELAUDEIX',
        status: 'Développeur Web',
        descr: 'Attiré par le développement Web et à la recherche de nouveaux défis, j’ai décidé de rejoindre l’agence Trixys en Septembre 2021 en tant que développeur Full-Stack. Rigoureux, collectif et force de proposition, je serai en capacité de vous guider et répondre à vos besoins tout au long de vos projets.',
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Rémi HAY--RIMBAULT',
        status: 'Développeur Web',
        descr: 'Féru de technologie et ayant découvert le développement récemment je suis le plus novice des développeurs de l’agence Trixys. Aimant la coopération et la nouveauté, je ferai au mieux pour pouvoir compléter mes collègues et aider à la réussite de vos projets.',
    },
    {
        image: 'https://picsum.photos/900/1000',
        name: 'Océane Guilloizeau',
        status: 'Web designeuse',
        descr: 'Passionnée par le graphisme et le web design, Océane saura créer des maquettes et des visuels adaptés à tous vos projets. A l\'écoute, création et soucieuse du détail, elle saura vous accompagner et vous conseiller dans vos projets pour une identité visuelle de qualité.',
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
