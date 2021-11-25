import React, {useState} from 'react';
import classes from './ServiceItem.module.scss';
import ServiceImage from './serviceImage/ServiceImage';
import { BsChevronDown } from 'react-icons/bs';

const ServiceItem = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const openP = () => {
        setIsOpen(!isOpen);
    }

    return (
        <figure className={classes.services}>
            <ServiceImage name={props.name} />
            <div className={classes.services__illustration}>
                <div className={classes.services__back} />
            </div>
            <figcaption className={`${isOpen ? classes.services__isopen : ""}`}>
                <h3>{props.name}</h3>
                <BsChevronDown className={classes.services__chevron} onClick={openP}/>
                <p>{props.description}</p>
            </figcaption>
        </figure>
    );
};

export default ServiceItem;
