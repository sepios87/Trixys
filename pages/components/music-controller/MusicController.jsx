import React, {useState} from 'react'
import classes from './MusicController.module.scss'

const MusicController = () => {

    // TODO: Faire remonter cette prop au niveau supérieur
    const [music, setMusic] = useState(null)

    return !music
    ? <section className={classes.musicController}>
        <img
            className={classes.musicController_icon}
            src="/svg/volume-up-solid.svg"
            alt="Icône de volume"
        />
        <p>Notre agence vous propose une expérience sonore lors de votre navigation. Souhaitez-vous en bénéficier ?</p>
        <div className={classes.musicController_buttons}>
            <button
                className='button'
                onClick={() => setMusic(true)}
            >
                Oui
            </button>
            <button
                className='button'
                onClick={() => setMusic(false)}
            >
                Non
            </button>
        </div>
    </section>
    : <aside>
            <p>Toggle</p>
    </aside>

}

export default MusicController
