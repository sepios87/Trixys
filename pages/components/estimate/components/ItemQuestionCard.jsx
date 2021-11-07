import classes from '../Estimate.module.scss';

const ItemQuestionCard = ({ onFinishedQuestion, response1, response2 }) => {
    const Card = ({response}) => {
        return (
            <figure
                className={classes.itemQuestion}
                onClick={() => onFinishedQuestion(response.point)}
            >
                <img src={response.image} />
                <figcaption>
                    <p>{response.name}</p>
                </figcaption>
            </figure>
        );
    };

    return (
        <div className={classes.containerQuestion}>
            <Card response={response1} />
            <Card response={response2} />
        </div>
    );
};



export default ItemQuestionCard;
