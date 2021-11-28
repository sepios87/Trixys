import { useState, useEffect, useRef } from 'react';
import classes from './Projets.module.scss';

const Projets = () => {
    const [open, setOpen] = useState(null);
    let ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            open != null && setOpen(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        <section className={classes.project} ref={ref}>
            <img
                onMouseEnter={() => setOpen(1)}
                onMouseLeave={() => setOpen(null)}
                onClick={() => (open === 1 ? setOpen(null) : setOpen(1))}
                className={`${classes.project__image1} ${
                    open === 1 && classes.project__image1_deploy
                } ${open === 2 && classes.project__image1_retract}`}
                src="img/trixys.png"
                alt="trixys"
            ></img>
            <div className={`${classes.project__comment1} ${open !== 1 && classes.project__comment1_hidden}`}>
                <h2>Trixys</h2>
                <p>Création de notre site vitrine pour mettre en avant nos services</p>
            </div>
            <img
                onMouseEnter={() => setOpen(2)}
                onMouseLeave={() => setOpen(null)}
                onClick={() => (open === 2 ? setOpen(null) : setOpen(2))}
                className={`${classes.project__image2} ${
                    open === 2 && classes.project__image2_deploy
                } ${open === 1 && classes.project__image2_retract}`}
                src="img/unumondo.png"
                alt="unumondo"
            ></img>
            <div className={`${classes.project__comment2} ${open !== 2 && classes.project__comment2_hidden}`}>
                <h2>Unumondo</h2>
                <p>Refonte du site de l{'\''}association unumondo sensibilisant au réchauffement climatique</p>
            </div>
        </section>
    );
}

export default Projets;