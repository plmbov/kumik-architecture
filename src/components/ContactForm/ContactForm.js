import React, { useContext } from 'react'
import classes from './ContactForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import counterpart from 'counterpart'
import Translate from 'react-translate-component'
import en from '../../languages/en'
import pl from '../../languages/pl'
import { LanguagesContext } from '../../hooks/Contexts'

const ContactForm = () => {
    const { language } = useContext(LanguagesContext)

    counterpart.registerTranslations('en', en)
    counterpart.registerTranslations('pl', pl)
    counterpart.setLocale(language)
    return (
        <div className={classes.Container}>
            <div className={classes.Icons}>
                <a href='mailto:wojtus.kumik@gmail.com' className={classes.ContactDetail}>
                    <FontAwesomeIcon className={classes.Icon} icon={faEnvelope} />
                    <p>wojtuś.kumik@gmail.com</p>
                </a>
                <a href='https://www.linkedin.com/in/wojciech-kumik-44652672/' target='_blank' className={classes.ContactDetail}>
                    <FontAwesomeIcon className={classes.Icon} icon={faLinkedinIn} />
                    <p>Wojciech Kumik</p>
                </a>
            </div>
            <div className={classes.FormContainer}>
                <form>
                    <Translate content='contactForm.yourEmail' component='p' />
                    <input className={classes.Inputs} type='email' spellCheck="false"></input>
                    <Translate content='contactForm.message' component='p' />
                    <textarea className={classes.Inputs} type='textarea'></textarea>
                    <Translate content='contactForm.sendButton' component='button' type='submit' className={classes.SendButton} />
                </form>
            </div>
        </div>
    )
}

export default ContactForm
