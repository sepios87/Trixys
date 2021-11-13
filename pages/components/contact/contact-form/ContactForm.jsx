import React, {useRef, useState} from 'react';
import classes from './ContactForm.module.scss';
import emailJs from 'emailjs-com';

const ContactForm = () => {

    const form = useRef();

    const [messageSucces, setMessageSucces] = useState('');

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        emailJs.sendForm('trixys_form_contact', 'trixys-form-template', form.current, 'user_UvkPv3Eg33ichNoK21gFb')
            .then((res) => {
                if (res.status === 200) {
                    setMessageSucces('Votre demande a bien été envoyée');
                }
            });
    }

    return <div>
        <h2 className={classes.title}>Lancez-Vous !</h2>
        <form ref={form} className={classes.form} onSubmit={onSubmitForm}>
            <input type="email" name="email" placeholder="Adresse mail" className={classes.form__input + ' form__input'}/>
            <input type="text" name="objet" placeholder="Objet" className={classes.form__input + ' form__input'}/>
            <input type="text" name="message" placeholder="Votre message" className={classes.form__input + ' form__input'}/>
            <p className={classes.form__message}>En envoyant ce message, vous consentez à la collecte et au traitement des données renseignées ci-dessus pour l’usage exclusif. <a
                href="#">En savoir plus</a></p>
            <input type="submit" value="Envoyer le message" className={classes.form__submit + ' form__submit'}/>
        </form>
        {
            messageSucces !== ''
                ? <p className={classes.modal__succes}>{messageSucces}</p>
                : <></>
        }
    </div>

}

export default ContactForm;
