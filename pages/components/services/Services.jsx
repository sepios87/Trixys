import React from 'react';
import classes from './Services.module.scss';
import ServiceItem from './serviceItem/ServiceItem';
import Triangle from '../triangle/Triangle';

const servicesList = [
    {
        name: 'Web Design',
        src: '/svg/web-design.svg',
        alt: 'web design',
        description:
            "Du logotype à la charte graphique, nous sommes en capacité d'imaginer l’environnement graphique en cohérence avec l'esprit de votre entreprise en y apportant notre touche de créativité.",
    },
    {
        name: 'Graphisme',
        src: '/svg/graphisme.svg',
        alt: 'graphisme',
        description:
            'D’un simple site web statique à une application complexe, nous vous accompagnons dans la conception de votre projet, en concevant des maquettes adaptées à chaque support numérique.',
    },
    {
        name: 'Développement Web',
        src: '/svg/dev.svg',
        alt: 'developpement',
        description:
            'Nos développeurs travaillent main dans la main pour donner vie à vos maquettes, en respectant le cahier des charges défini au préalable et en vous offrant un accompagnement personnalisé sur le long terme.',
    },
    {
        name: 'UX / UI Design',
        src: '/svg/ui-ux.svg',
        alt: 'ux ui design',
        description:
            "Nous adoptons une démarche centrée utilisateur afin de lui garantir une expérience optimale, en rendant votre futur site web accessible et facile d’utilisation, de par la création d'un design cohérent et de fonctionnalités intuitives",
    },
];

const Services = () => {
    return (
        <section className={classes.services}>
            {/* background elements */}
            <img loading='lazy' src="svg/croix.svg" alt="croix" className="croix" />
            <img loading='lazy' src="svg/montagne.svg" alt="montagnes" className="montagne" />
            <Triangle num={3} classNameTriangle="triangle__gris" />
            <Triangle num={6} classNameTriangle="triangle__jaune" />
            {/* end background elements */}
            <h2 className="title">Nos services</h2>
            <div className={classes.services__servicesContainer}>
                {servicesList.map((services, index) => (
                    <ServiceItem
                        key={index}
                        name={services.name}
                        src={services.src}
                        alt={services.alt}
                        description={services.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
