import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import CampaignList from './CampaignList';
import Home from './Home';

function  App()  {
    return (
        <React.Fragment>
            <Router>
            <div>
                <h1>Context & Hooks research</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/campaigns/">Campaigns</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/campaigns/" component={CampaignList} />
            </div>
            </Router>
        </React.Fragment>
    );
}

export default App;
