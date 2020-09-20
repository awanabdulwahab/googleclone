import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                {/* Search page (The page with google search engine option) */}
                <Route path='/search'>
                    <h1>This is the search Page</h1>
                </Route>

                {/* Home page (The page with google search bar) */}
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

