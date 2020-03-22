import React, { useContext } from 'react'
import projectsObject from '../../../../assets/projects'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import classes from './SingleProjectCarousel.module.css';
import Button from '../../../../UI/Button/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './AdjustCarousel.css'
import { LanguagesContext } from '../../../../hooks/Contexts'

const SingleProjectCarousel = (props) => {

    const { language } = useContext(LanguagesContext)

    return (
        <div className={classes.Contanier}>
            <div className={classes.Carousel}>
                <Carousel
                    showStatus={false}
                    showThumbs={false}
                    width={'100%'}
                    emulateTouch={true}
                    useKeyboardArrows={true}
                >
                    {props.projectToShow.images.map(image => {
                        return (<div key={image}>
                            <LazyLoadImage
                                alt={props.projectToShow.projectName}
                                effect="blur"
                                src={image}
                                wrapperClassName={classes.LazyLoadImage} />
                        </div>
                        )
                    })}
                </Carousel>
            </div>
            <div className={classes.ProjectDescription}>
                <p style={{ 'fontWeight': 'bold' }}>{language === 'en' ? props.projectToShow.projectNameEN : props.projectToShow.projectNamePL}</p>
                <p>{language === 'en' ? props.projectToShow.projectDescriptionEN : props.projectToShow.projectDescriptionPL}</p>
            </div>
            <div className={classes.CloseButton}>
                <Button clicked={props.close}>X</Button>
            </div>
        </div >
    )
}

export default SingleProjectCarousel
