import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Trip Planner</h1>
      <Link to="/plan-trip">Plan a Trip</Link>
    </div>
  );
};

export default HomePage;