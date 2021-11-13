import React from 'react';
import classes from './Services.module.scss';
import ServiceItem from './serviceItem/ServiceItem';

const servicesList = [
    {
        name: 'Web Design',
        description:
            "Du logotype à la charte graphique, nous sommes en capacité d'imaginer l’environnement graphique en cohérence avec l'esprit de votre entreprise en y apportant notre touche de créativité.",
        img: '&#xe902;',
    },
    {
        name: 'Graphisme',
        description:
            'D’un simple site web statique à un site plus complexe, Trixys vous accompagne dans la conception de votre site internet, en concevant des maquettes adaptées à chaque support numérique.',
        img: '&#xe901;',
    },
    {
        name: 'Développement Web',
        description:
            'Nos développeurs travaillent main dans la main pour transformer vos simples maquettes en de véritables sites fonctionnels, en respectant le cahier des charges défini au préalable et en vous offrant un accompagnement sur le long terme.',
        img: '&#xe900;',
    },
    {
        name: 'UX / UI Design',
        description:
            'Trixys adopte une démarche centrée sur l’utilisateur afin de lui garantir une expérience optimale, en rendant votre futur site web accessible et facile d’utilisation, de par son design cohérent et ses fonctionnalités intuitives',
        img: '&#xe92e;',
    },
];

const Services = () => {
    return (
        <section className={classes.services}>
            <h2>NOS SERVICES</h2>
            <div className={classes.servicesContainer}>
                {servicesList.map((services, index) => (
                    <ServiceItem
                        key={index}
                        name={services.name}
                        description={services.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
