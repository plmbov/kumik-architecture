import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import classes from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import PortfolioContainer from './components/Portfolio/PortfolioContainer/PortfolioContainer';
import LandingPage from './components/LandingPage/LandingPage';
import Header from './components/Header/Header';
import { BurgerContext, LanguagesContext } from './hooks/Contexts'

const App = () => {

  const [burgerActive, setBurgerActive] = useState(false)
  const [language, setLanguage] = useState('en')

  console.log(language)

  useEffect(() => {
    fetch('https://ipapi.co/json')
      .then(res => res.json())
      .then(data => {
        if (data.country === 'PL') {
          setLanguage('pl')
        }
      })
  }, [])

  return (
    <div className={classes.App}>
      <BurgerContext.Provider value={{ burgerActive, setBurgerActive }}>
        <LanguagesContext.Provider value={{ language, setLanguage }}>
          <div className={classes.HeaderDiv}>
            <Header />
          </div>
          <div className={classes.Content}>
            <Switch>
              <Route path='/portfolio' component={PortfolioContainer} />
              <Route path='/contact' component={ContactForm} />
              <Route path='/' component={LandingPage} />
            </Switch>
          </div>
        </LanguagesContext.Provider>
      </BurgerContext.Provider>
    </div>
  );
}

export default App;