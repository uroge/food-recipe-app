import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import SingleMeal from './pages/SingleMeal/SingleMeal';

import history from './history';

const App = () => {
  const aboutRef = React.createRef();
  const contactRef = React.createRef();

  const scrollToAbout = () => aboutRef.current.scrollIntoView();
  const scrollToContact = () => contactRef.current.scrollIntoView();

  return (
    <Router history={history}>
      <Header
      aboutScroll={scrollToAbout}
      contactScroll={scrollToContact} />
      <Switch>
        <Route path="/" exact render={() => (<Home refAbout={aboutRef} refContact={contactRef}/>)} />
        <Route path="/category/:title" exact component={Category} />
        <Route path="/category/:title/:id" exact component={SingleMeal} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
