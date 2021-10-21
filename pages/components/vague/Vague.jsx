import React from 'react';
import classes from "./Vague.module.scss";

const Vague = () => {

    return <>
        <img className={classes.logo} src="svg/logo.svg" alt="logo"/>
        <img
            className={classes.vagueGauche}
            src="svg/vagueGauche.svg"
            alt="vagueGauche"
        />
        <img
            className={classes.vagueDroite}
            src="svg/vagueDroite.svg"
            alt="vagueDroite"
        />
    </>

}

export default Vague;
