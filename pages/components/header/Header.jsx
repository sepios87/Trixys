import React from 'react';
import Triangle from '../../components/triangle/Triangle';
import classes from './Header.module.scss';
import { MdEmail } from "react-icons/md";
import Theme from "../../components/theme/Theme";

const Header = ({ isWaiting, music, setMusic }) => {
    return (
        <section className={classes.container}>
            <Theme
                music={ music }
                setMusic={ setMusic }
            />
            <img
                className={classes.pointsDroite}
                src="/svg/points.svg"
                alt="pointsDroite"
            />
            <img
                className={classes.pointsGauche}
                src="/svg/points.svg"
                alt="pointsGauche"
            />
            <img
                className={classes.rond}
                src="/svg/rond.svg"
                alt="rondFlottant"
            />
            {/* Affiché sur mobile */}
            <Triangle num={3} classNameTriangle={classes.triangle1} />
            <Triangle num={7} classNameTriangle={classes.triangle2} />
            <Triangle num={1} classNameTriangle={classes.triangle3} />
            <Triangle num={6} classNameTriangle={classes.triangle4} />
            <Triangle num={3} classNameTriangle={classes.triangle5} />

            {/* Affiché sur pc */}
            <Triangle num={2} classNameTriangle={classes.triangle6} />
            <Triangle num={4} classNameTriangle={classes.triangle7} />
            <Triangle num={5} classNameTriangle={classes.triangle8} />

            <div className={classes.titleDiv}>
                <h1>
                    AGENCE WEB A LA ROCHELLE <span>TRIXYS</span>
                </h1>
                {isWaiting ? (
                    <div className={classes.contact}>
                        <p>
                            Notre site est en cours de <strong>création</strong>
                            , merci de bien vouloir patienter. Pour toute
                            question n{'\''}hésitez pas à nous contacter par mail !
                        </p>
                        <a href="mailto:contact.trixys@gmail.com">
                            <MdEmail className={classes.svg + ' svg'} />
                        </a>
                    </div>
                ) : null}
            </div>
        </section>
    );
}

export default Header;
