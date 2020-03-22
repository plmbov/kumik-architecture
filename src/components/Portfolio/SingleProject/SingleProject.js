import React, { useContext } from 'react'
import classes from './SingleProject.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LanguagesContext } from '../../../hooks/Contexts'

const SingleProject = (props) => {

    const { language } = useContext(LanguagesContext)

    return (
        <div className={classes.SingleProject} onClick={props.clicked}>
            <LazyLoadImage
                alt={props.projectData.projectName}
                effect="blur"
                src={props.projectData.images[0]}
                wrapperClassName={classes.LazyLoadImage} />
            <p>{language === 'en' ? props.projectData.projectNameEN : props.projectData.projectNamePL}</p>
        </div>
    )
}

export default SingleProject
