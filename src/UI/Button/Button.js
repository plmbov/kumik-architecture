import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button onClick={props.clicked} className={props.addClickedClass ? classes.Clicked : null}>
            {props.children}
        </button>
    )
}

export default Button
