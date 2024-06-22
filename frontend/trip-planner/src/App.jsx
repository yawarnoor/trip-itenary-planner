import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlanTripPage from './components/PlanTripPage';
import ItineraryPage from './components/ItineraryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/plan-trip" component={PlanTripPage} />
          <Route path="/itinerary" component={ItineraryPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;