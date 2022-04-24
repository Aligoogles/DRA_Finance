import React from 'react'
import './index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Dataset from './pages/dataset/Dataset'
import Contact from './pages/contact/Contact'


function App() {

  /* created Aelita  21113131*/
  /* For search bar to pull the two websites that are being pulled from API. This code was somewhat taken from Dataset page*/
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://finnhub.io/api/v1/news?category=forex&minId=10&token=c98ml9iad3ibrc52qf20`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
      })
      .catch((err) => {
        setData(null);
      })
    }, 
  []);



  return (
    <Router>
    <div className="page-container">
      <div className="content-wrap">

        <NavBar info={data} />

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
      <div className="footer">
        <Footer />
      </div>

    </div>
    </Router>
  );
}

export default App;
