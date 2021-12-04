import classes from './ItemQuestionCard.module.scss';

const ItemQuestionCard = ({
    onFinishedQuestion,
    image1,
    name1,
    point1,
    image2,
    name2,
    point2,
}) => {
    const Card = ({ image, name, point }) => {
        return (
            <figure
                className={classes.containerQuestion__itemQuestion}
                onClick={() => onFinishedQuestion(point)}
            >
                <img src={image} alt="" />
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
