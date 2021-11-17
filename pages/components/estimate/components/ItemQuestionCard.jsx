import classes from '../Estimate.module.scss';

const ItemQuestionCard = ({ onFinishedQuestion, response1, response2 }) => {
    const Card = ({response}) => {
        return (
            <figure
                className={classes.estimate__itemQuestion}
                onClick={() => onFinishedQuestion(response.point)}
            >
                <img src={response.image} alt=""/>
                <figcaption>
                    <p>{response.name}</p>
                </figcaption>
            </figure>
        );
    };

    return (
        <div className={classes.estimate__containerQuestion}>
            <Card response={response1} />
            <Card response={response2} />
        </div>
    );
};



export default ItemQuestionCard;
