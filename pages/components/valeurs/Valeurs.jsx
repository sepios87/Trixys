import React from 'react';
import classes from './Valeurs.module.scss';
import ServiceItem from '../services/serviceItem/ServiceItem';
import Triangle from '../triangle/Triangle';

const valeursList = [
    {
        name: 'Intégrité',
        src: '/svg/creativite.svg',
        alt: 'integrite',
        description:
            "Pour faire en sorte que votre projet atteigne des sommets, nous saurons mettre à l'épreuve notre intégrité et notre esprit d’équipe afin qu’il dépasse vos espérances.",
    },
    {
        name: "Esprit d'équipe",
        src: '/svg/esprit-equipe.svg',
        alt: 'equipe',
        description:
            "La cohésion de notre équipe ainsi que nos singularités complémentaires nous permettent de nous lancer dans des projets toujours plus ambitieux, plus conséquents et de les mener à bien.",
    },
    {
        name: 'Proximité',
        src: '/svg/proximite.svg',
        alt: 'proximite',
        description:
            "En privilégiant le travail local, nous avons la possibilité de réaliser davantage de réunions en face à face afin de mieux cerner les besoins du client ainsi que les enjeux du projet.",
    },
    {
        name: 'Réactivité',
        src: '/svg/reactivite.svg',
        alt: 'reactivite',
        description:
            "Travailler avec Trixys, c’est le choix d’une jeune agence réactive.À travers notre capacité d’adaptation basée sur des méthodes agiles, nous arrivons à répondre rapidement aux sollicitations de nos collaborateurs.",
    },
];

const Valeurs = () => {
    return (
        <section className={classes.valeurs}>
            {/* background elements */}
            <img loading='lazy' src="svg/croix.svg" alt="croix" className="croix" />
            <img loading='lazy' src="svg/montagne.svg" alt="montagnes" className="montagne" />
            <Triangle num={3} classNameTriangle="triangle__gris" />
            <Triangle num={6} classNameTriangle="triangle__jaune" />
            {/* end background elements */}
            <h2 className='title'>Nos valeurs</h2>
            <div className={classes.valeurs__valeursContainer}>
                {valeursList.map((valeur, index) => (
                    <ServiceItem
                        key={index}
                        name={valeur.name}
                        src={valeur.src}
                        alt={valeur.alt}
                        description={valeur.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Valeurs;
