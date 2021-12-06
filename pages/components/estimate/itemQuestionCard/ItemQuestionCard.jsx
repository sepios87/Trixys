import { useContext } from 'react';
import classes from './ItemQuestionCard.module.scss';
import { MusicContext } from '../../../index';
import useSound from 'use-sound';
import Image from 'next/image';

const ItemQuestionCard = ({
    onFinishedQuestion,
    image1,
    name1,
    point1,
    image2,
    name2,
    point2,
}) => {
    const music = useContext(MusicContext);
    const [play] = useSound('/sounds/hover.mp3');

    const Card = ({ image, name, point }) => {
        return (
            <figure
                onMouseEnter={() => music && play()}
                className={classes.containerQuestion__itemQuestion}
                onClick={() => onFinishedQuestion(point)}
            >
                <Image layout='fixed' width={150} height={150} src={image} alt="image carte estimation" />
                <figcaption>
                    <p>{name}</p>
                </figcaption>
            </figure>
        );
    };

    return (
        <div className={classes.containerQuestion}>
            <Card image={image1} name={name1} point={point1} />
            <Card image={image2} name={name2} point={point2} />
        </div>
    );
};

export default ItemQuestionCard;
