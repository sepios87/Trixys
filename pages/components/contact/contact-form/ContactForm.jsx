import React, { useRef, useState } from 'react';
import classes from './ContactForm.module.scss';
import emailJs from 'emailjs-com';
import Button from '../../button/Button';

const ContactForm = () => {
    const form = useRef();

    const [messageSucces, setMessageSucces] = useState();

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        emailJs
            .sendForm(
                'trixys_form_contact',
                'trixys-form-template',
                form.current,
                'user_UvkPv3Eg33ichNoK21gFb'
            )
            .then((res) => {
                if (res.status === 200) {
                    setMessageSucces('Votre demande a bien été envoyée');
                }
            });
        form.current.reset();
    };

    return (
        <div className={classes.contactForm}>
            <h2 className={classes.contactForm__title}>Lancez-Vous !</h2>
            <form
                ref={form}
                className={classes.contactForm__form}
                onSubmit={onSubmitForm}
            >
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Adresse mail"
                    className={classes.contactForm__input + ' form__input'}
                />
                <input
                    required
                    type="text"
                    name="objet"
                    placeholder="Objet"
                    className={classes.contactForm__input + ' form__input'}
                />
                <textarea
                    required
                    type="text"
                    name="message"
                    placeholder="Votre message"
                    className={classes.contactForm__input + ' form__input'}
                />
                <p className={classes.contactForm__message}>
                    En envoyant ce message, vous nous autorisez à vous
                    recontacter avec le mail fourni dans ce formulaire.
                </p>
                <Button submitType={true}>Envoyer le message</Button>
            </form>
            <div className={classes.contactForm__modal}>
                {messageSucces != null && (
                    <p className={classes.contactForm__response}>
                        {messageSucces}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
