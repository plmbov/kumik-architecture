import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import Button from '../../UI/Button/Button'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'
import Backdrop from './Backdrop/Backdrop'
import { BurgerContext, LanguagesContext } from '../../hooks/Contexts'
import BurgerButton from '../../UI/BurgerButton/BurgerButton'
import useWindowWidth from '../../hooks/useWindowWidth'
import MainLogo from '../../assets/Logos/KUMIK ARCHITECTURE_WHITE.png'
import counterpart from 'counterpart'
import Translate from 'react-translate-component'
import en from '../../languages/en'
import pl from '../../languages/pl'

const Header = () => {

    const { burgerActive, setBurgerActive } = useContext(BurgerContext)
    const { language } = useContext(LanguagesContext)

    counterpart.registerTranslations('en', en)
    counterpart.registerTranslations('pl', pl)
    counterpart.setLocale(language)

    if (useWindowWidth() > 900) {
        setBurgerActive(false)
    }

    const menu = (
        <div className={classes.Menu}>
            <Link to='/' onClick={() => setBurgerActive(false)}><Translate content='header.home' component='button' /></Link>
            <Link to='/portfolio' onClick={() => setBurgerActive(false)}><Translate content='header.portfolio' component='button' /></Link>
            <Link to='/contact' onClick={() => setBurgerActive(false)}><Translate content='header.contact' component='button' /></Link>
            <LanguageSwitch className={classes.LanguageSwitch} />
        </div>
    )

    return (
        <div className={classes.Container}>
            <Link to='/' className={classes.LogoLink}><img src={MainLogo} className={classes.MainLogo} alt='logo' onClick={() => setBurgerActive(false)} /></Link>
            {useWindowWidth() > 900 ?
                <>
                    {menu}
                </>
                :
                <div>
                    <BurgerButton />
                    {burgerActive &&
                        <div>
                            {menu}
                            <div>
                                <Backdrop />
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Header
