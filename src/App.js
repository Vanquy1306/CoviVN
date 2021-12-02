import React from 'react';
import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import AboutPage from './pages/about';
import NewsPage from './pages/news';
import NewsletterPage from './pages/newsletter';
import StatPage from './pages/statistic';
import ErrorPage from './pages/error';
import DashboardPage from './pages/dashboard';
import ProfilePage from './pages/profile';
import PrivateRoute from './components/route/PrivateRoutes/PrivateRoute'
function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/statistic" component={StatPage} />
        <Route path="/newsletter" component={NewsletterPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <Route path="" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;