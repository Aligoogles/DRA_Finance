import React from 'react'
import './index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Dataset from './pages/dataset/Dataset'
import Contact from './pages/contact/Contact'


function App() {

  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/About">
            <About />
          </Route>

          <Route path="/Dataset">
            <Dataset />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>

        </Switch>

      </div>

    </Router>
  );
}

export default App;
