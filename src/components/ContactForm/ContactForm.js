import React, { useContext, useState } from 'react'
import classes from './ContactForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import counterpart from 'counterpart'
import Translate from 'react-translate-component'
import en from '../../languages/en'
import pl from '../../languages/pl'
import { LanguagesContext } from '../../hooks/Contexts'
import Recaptcha from 'react-recaptcha'
import useWindowWidth from '../../hooks/useWindowWidth'

const bodyToPost = new FormData()
bodyToPost.append('key', 'kbdjsfg87wefgiusdgciuasgf7w8')

const ContactForm = () => {
    const { language } = useContext(LanguagesContext)

    const [replyTo, setReplyTo] = useState('')
    const [message, setMessage] = useState('')
    const [verified, setVerified] = useState(false)
    const [formSent, setFormSent] = useState(false)

    counterpart.registerTranslations('en', en)
    counterpart.registerTranslations('pl', pl)
    counterpart.setLocale(language)

    const verifyRecaptcha = () => {
        setVerified(true)
    }

    const handleChangeReplyTo = (e) => {
        setReplyTo(e.target.value)
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (verified) {
            fetch('http://kumikstudio.com/mail/', {
                method: 'POST',
                body: bodyToPost
            })
                .then(res => res.json())
                .then(data => {
                    if (data.sent) {
                        setFormSent(true)
                    } else {
                        alert('Something went wrong! Please try again.')
                    }
                })
        } else {
            alert('Please verify yourself.')
        }
    }

    bodyToPost.append('replyTo', replyTo)
    bodyToPost.append('message', message)

    return (
        <div className={classes.Container}>
            <div className={classes.Icons}>
                <a href='mailto:biuro@kumikstudio.com' className={classes.ContactDetail}>
                    <FontAwesomeIcon className={classes.Icon} icon={faEnvelope} />
                    <p>biuro@kumikstudio.com</p>
                </a>
                <a href='https://www.linkedin.com/in/wojciech-kumik-44652672/' target='_blank' className={classes.ContactDetail}>
                    <FontAwesomeIcon className={classes.Icon} icon={faLinkedinIn} />
                    <p>Wojciech Kumik</p>
                </a>
            </div>
            <div className={classes.FormContainer}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Translate content='contactForm.yourEmail' component='p' />
                    <input className={classes.Inputs} type='email' spellCheck="false" onChange={(e) => handleChangeReplyTo(e)}></input>
                    <Translate content='contactForm.message' component='p' />
                    <textarea className={classes.Inputs} type='textarea' onChange={(e) => handleChangeMessage(e)}></textarea>
                    <Recaptcha
                        sitekey='6Ldao-QUAAAAAIv8ItGp4oF-trhiuv3GjC0mE2gP'
                        theme='dark'
                        verifyCallback={verifyRecaptcha}
                        size={useWindowWidth() > 500 ? 'normal' : 'compact'}
                        className={classes.Recaptcha}
                    />
                    <Translate content='contactForm.sendButton' component='button' type='submit' className={classes.SendButton} />
                    <div className={classes.FormSent}
                        style={{
                            'opacity': formSent ? '1' : '0',
                            'pointerEvents': formSent ? '' : 'none'
                        }}
                    >
                        <Translate content='contactForm.messageDelivered' component='p' />
                        <Translate content='contactForm.replySoon' component='p' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
