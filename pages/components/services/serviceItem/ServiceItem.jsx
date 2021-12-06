import { useState, useContext } from 'react';
import classes from './ServiceItem.module.scss';
import { BsChevronDown } from 'react-icons/bs';
import { MusicContext } from '../../../index';
import useSound from 'use-sound';
import Image from 'next/image';

const ServiceItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const music = useContext(MusicContext);
    const [play] = useSound('/sounds/hover.mp3');

    return (
        <figure
            onMouseEnter={() => music && play()}
            className={classes.services}
            onClick={() => setIsOpen(!isOpen)}
        >
            <Image
                loading='lazy'
                className={classes.services__img}
                src={props.src}
                alt={props.alt}
                height={150}
                width={150}
            />
            <figcaption>
                <h3 className={classes.services__title}>{props.name}</h3>
                <BsChevronDown
                    className={`${classes.services__chevron} ${
                        isOpen && classes.services__chevron_open
                    }`}
                />
                <p
                    className={`${classes.services__content} ${
                        isOpen && classes.services__content_open
                    }`}
                >
                    {props.description}
                </p>
            </figcaption>
        </figure>
    );
};

export default ServiceItem;
