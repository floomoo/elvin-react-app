// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PayPage from './paypage';
import MeetingSection from './meetingsection';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/pay">Pay Page</Link>
            </li>
            <li>
              <Link to="/meeting">Meeting Section</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/pay" component={PayPage} />
        <Route path="/meeting" component={MeetingSection} />
      </div>
    </Router>
  );
};

export default App;

