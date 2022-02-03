import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import SingleMeal from './pages/SingleMeal/SingleMeal';
import Search from './pages/Search/Search';
import MyMeals from './pages/MyMeals/MyMeals';

import history from './history';

const App = () => {
  const aboutRef = React.createRef();
  const contactRef = React.createRef();

  const scrollToAbout = () => aboutRef.current.scrollIntoView();
  const scrollToContact = () => contactRef.current.scrollIntoView();

  return (
      <div className='page-content'>
        <div className='content-wrap'>
          <Router history={history}>
            <Header
              aboutScroll={scrollToAbout}
              contactScroll={scrollToContact} />
              <Switch>
                <Route path="/" exact render={() => (<Home refAbout={aboutRef} refContact={contactRef} />)} />
                <Route path="/category/:title" exact component={Category} />
                <Route path="/category/:title/:id" exact component={SingleMeal} />
                <Route path="/search/:searchTerm" exact component={Search} />
                <Route path="/my-meals" exact component={MyMeals} />
              </Switch>
          </Router>
        </div>
        <Footer />
      </div>
        
  );
}

export default App;
