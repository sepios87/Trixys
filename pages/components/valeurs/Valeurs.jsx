import React from 'react';
import classes from './Valeurs.module.scss';
import ServiceItem from '../services/serviceItem/ServiceItem';
import Triangle from '../triangle/Triangle';

const valeursList = [
    {
        name: 'Créativité',
        src: 'svg/valeur.svg',
        alt: 'valeur',
        description:
            "Du logotype à la charte graphique, nous sommes en capacité d'imaginer l’environnement graphique en cohérence avec l'esprit de votre entreprise en y apportant notre touche de créativité.",
    },
    {
        name: "Esprit d'équipe",
        src: 'svg/esprit-equipe.svg',
        alt: 'equipe',
        description:
            "Du logotype à la charte graphique, nous sommes en capacité d'imaginer l’environnement graphique en cohérence avec l'esprit de votre entreprise en y apportant notre touche de créativité.",
    },
    {
        name: 'Proximité',
        src: 'svg/proximite.svg',
        alt: 'proximite',
        description:
            "Du logotype à la charte graphique, nous sommes en capacité d'imaginer l’environnement graphique en cohérence avec l'esprit de votre entreprise en y apportant notre touche de créativité.",
    },
    {
        name: 'Réactivité',
        src: 'svg/reactivite.svg',
        alt: 'reactivite',
        description:
            "Du logotype à la charte graphique, nous sommes en capacité d'imaginer l’environnement graphique en cohérence avec l'esprit de votre entreprise en y apportant notre touche de créativité.",
    },
];

const Valeurs = () => {
    return (
        <section className={classes.valeurs}>
            {/* background elements */}
            <img src="svg/croix.svg" alt="croix" className="croix" />
            <img src="svg/montagne.svg" alt="montagnes" className="montagne" />
            <Triangle num={3} classNameTriangle="triangle__gris" />
            <Triangle num={6} classNameTriangle="triangle__jaune" />
            {/* end background elements */}
            <h2>NOS VALEURS</h2>
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
