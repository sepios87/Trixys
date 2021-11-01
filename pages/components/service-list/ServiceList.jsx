import React from 'react';
import classes from './ServiceList.module.scss';
import Services from '../services/Services';

const servicesList = [
    {
        name: 'Web Design',
        description:
            "Du logotype à la charte graphique, nous sommes en capacité d'imaginer l’environnement graphique en cohérence avec l'esprit de votre entreprise en y apportant notre touche de créativité.",
        img: '',
    },
    {
        name: 'Graphisme',
        description:
            'D’un simple site web statique à un site plus complexe, Trixys vous accompagne dans la conception de votre site internet, en concevant des maquettes adaptées à chaque support numérique.',
        img: '',
    },
    {
        name: 'Développement Web',
        description:
            'Nos développeurs travaillent main dans la main pour transformer vos simples maquettes en de véritables sites fonctionnels, en respectant le cahier des charges défini au préalable et en vous offrant un accompagnement sur le long terme.',
        img: '',
    },
    {
        name: 'UX / UI Design',
        description:
            'Trixys adopte une démarche centrée sur l’utilisateur afin de lui garantir une expérience optimale, en rendant votre futur site web accessible et facile d’utilisation, de par son design cohérent et ses fonctionnalités intuitives',
        img: '',
    },
];

const ServiceList = () => {
    return (
        <section className={classes.services}>
            <h2>NOS SERVICES</h2>
            <div className={classes.servicesContainer}>
                {servicesList.map((services, index) => (
                    <Services
                        key={index}
                        name={services.name}
                        description={services.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServiceList;
