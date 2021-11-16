import Button from '../button/Button';
import classes from './Bio.module.scss';

const Bio = () => {
    return <section className={classes.container}>
        <p className={classes.backgroundLetter}>4</p>
        <section className={classes.bioContainer}>
        <h2>L{'\''}agence</h2>
        <h3>Qui sommes nous ?</h3>
        <p className={classes.contentText}>Trixys est une agence basée à la rochelle. <span>Composée de 4 membres, elle saura vous accompagner dans la créationd de vos projets à travers ses compétences dans l{'\''}expérience utilisateur, le design graphique et le développement web</span></p>
        <Button href='#'>En savoir plus sur notre équipe</Button>
        </section>
       
    </section>
}

export default Bio;