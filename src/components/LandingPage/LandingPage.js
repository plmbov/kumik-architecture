import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './LandingPage.module.css'
import Button from '../../UI/Button/Button'
import counterpart from 'counterpart'
import Translate from 'react-translate-component'
import en from '../../languages/en'
import pl from '../../languages/pl'
import { LanguagesContext } from '../../hooks/Contexts'



const LandingPage = () => {

    const { language } = useContext(LanguagesContext)

    counterpart.registerTranslations('en', en)
    counterpart.registerTranslations('pl', pl)
    counterpart.setLocale(language)

    return (
        <div className={classes.Container}>
            <Translate content='landingPage.mainTitle' className={classes.MainTitle} />
            <Translate content='landingPage.subTitle' className={classes.SubTitle} />
            <Link to='/contact' className={classes.RedirectToContactButtonContainer}>
                <Translate content='landingPage.buttonText' component='button' />
            </Link>
        </div >
    )
}

export default LandingPage
