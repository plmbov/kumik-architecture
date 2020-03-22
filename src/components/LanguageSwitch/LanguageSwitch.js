import React, { useContext } from 'react'
import Button from '../../UI/Button/Button'
import classes from './LanguageSwitch.module.css'
import { LanguagesContext } from '../../hooks/Contexts'

const LanguageSwitch = () => {

    const { language, setLanguage } = useContext(LanguagesContext)

    return (
        <div className={classes.LanguageSwitch}>
            <Button clicked={() => setLanguage('en')} addClickedClass={language === 'en' ? true : false}>EN</Button>
            <Button clicked={() => setLanguage('pl')} addClickedClass={language === 'pl' ? true : false}>PL</Button>
        </div>
    )
}

export default LanguageSwitch
