import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CampaignList from './CampaignList';
import Home from './Home';

function  App()  {
    return (
        <React.Fragment>
            <Router>
            <div className="app">
                <nav className="nav-bar">
                    <h1 className='nav-title'>Context & Hooks</h1>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
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
