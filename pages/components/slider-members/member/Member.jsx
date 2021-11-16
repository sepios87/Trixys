import Button from '../../button/Button';
import classes from './Member.module.scss';

const Member = ({image, name, status, descr}) => {
    return <section className={classes.container}>
        <figure>
            <img className={classes.imageProfil} src={image}/>
            <figcaption className={classes.content}>
                <h2>{name}</h2>
                <h3>{status}</h3>
                <p>{descr}</p>
                <Button style={{marginLeft: '10%'}}>Voir son portfolio</Button>
            </figcaption>
        </figure>
    </section>
}

export default Member;