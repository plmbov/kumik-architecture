import React, { useContext } from 'react'
import './BurgerButton.css'
import { BurgerContext } from '../../hooks/Contexts'

const BurgerButton = () => {

    const { burgerActive, setBurgerActive } = useContext(BurgerContext)

    const handleBurger = () => {
        if (burgerActive) {
            setBurgerActive(false)
        } else {
            setBurgerActive(true)
        }
    }

    return (
        <button
            style={{ 'position': 'relative', 'zIndex': '10' }}
            className={burgerActive ? "hamburger hamburger--squeeze is-active" : "hamburger hamburger--squeeze"} onClick={handleBurger}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default BurgerButton
