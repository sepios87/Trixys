import React from 'react';
import classes from './Projet.module.scss';

const projets = [
    {
        titre: 'Projet 1',
        texte: 'Lorem ipsu dorl erger zberoinvbe rabierzb eribe rbiàern berb erboie rberi berb erb',
        classe: classes.clip1,
    },
    {
        titre: 'Projet 2',
        texte: 'Lorem ipsu dorl erger zberoinvbe rabierzb eribe rbiàern berb erboie rberi berb erb',
        classe: classes.clip2,
    },
    {
        titre: 'Projet 3',
        texte: 'Lorem ipsu dorl erger zberoinvbe rabierzb eribe rbiàern berb erboie rberi berb erb',
        classe: classes.clip3,
    },
];

const Projet = () => {
    return (
        <section className={classes.container}>
            <div className={classes.container__projetContainer}>
                {projets.map((e, index) => (
                    <div key={index} className={`${classes.clip} ${e.classe}`}>
                        <div className={classes.content}>
                            <h2>{e.titre}</h2>
                            <p>{e.texte}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projet;
