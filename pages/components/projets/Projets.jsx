import { useState, useEffect, useRef } from 'react';
import classes from './Projets.module.scss';
import Triangle from '../triangle/Triangle';
import Button from '../button/Button';
import useWindowDimensions from './../../../hooks/useWindowDimensions';

const Projets = ({ onEstimate }) => {
    const [open, setOpen] = useState(null);
    let ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            open != null && setOpen(null);
        }
    };

    const { width } = useWindowDimensions();

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        <section className={classes.projectContainer}>
            {/* background elements */}
            <img loading='lazy' src="svg/croix.svg" alt="croix" className="croix" />
            <img loading='lazy' src="svg/montagne.svg" alt="montagnes" className="montagne" />
            <Triangle num={3} classNameTriangle="triangle__gris" />
            <Triangle num={6} classNameTriangle="triangle__jaune" />
            {/* end background elements */}
            <h2 className="title">Nos projets</h2>
            <div className={classes.project} ref={ref}>
                <img
                    onMouseEnter={() =>  width > 780 && setOpen(1)}
                    onMouseLeave={() => setOpen(null)}
                    onClick={() => (open === 1 ? setOpen(null) : setOpen(1))}
                    className={`${classes.project__image1} ${
                        open === 1 && classes.project__image1_deploy
                    } ${open === 2 && classes.project__image1_retract}`}
                    src="img/trixys.jpg"
                    loading='lazy'
                    alt="trixys"
                />
                <div
                    className={`${classes.project__comment1} ${
                        open !== 1 && classes.project__comment1_hidden
                    }`}
                >
                    <h2>Trixys</h2>
                    <p>
                        Création de notre site vitrine pour mettre en avant nos
                        services
                    </p>
                </div>
                <img
                    onMouseEnter={() =>  width > 780 && setOpen(2)}
                    onMouseLeave={() => setOpen(null)}
                    onClick={() => (open === 2 ? setOpen(null) : setOpen(2))}
                    className={`${classes.project__image2} ${
                        open === 2 && classes.project__image2_deploy
                    } ${open === 1 && classes.project__image2_retract}`}
                    src="img/unumondo.jpg"
                    loading='lazy'
                    alt="unumondo"
                />
                <div
                    className={`${classes.project__comment2} ${
                        open !== 2 && classes.project__comment2_hidden
                    }`}
                >
                    <h2>Unumondo</h2>
                    <p>
                        Refonte du site de l{"'"}association unumondo
                        sensibilisant au réchauffement climatique
                    </p>
                </div>
            </div>
            <Button
                {...(width <= 780 && { href: '#estimate' })}
                onClick={() => width > 780 && onEstimate()}
            >
                Estimez votre projet
            </Button>
        </section>
    );
};

export default Projets;
