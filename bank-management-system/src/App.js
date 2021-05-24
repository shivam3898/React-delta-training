import './App.css';
import Header from './components/header';
import { Route, Router, Switch } from 'react-router';

import Home from './components/home';
import Register from './components/register';
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/login';
import Profile from './components/profile';
import Loan from './components/loan';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage());
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }

  logout = () => {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Router history={history}>
        <div>
          <Header currentUser={currentUser} logout={this.logout} />
          <div className="container mt-5">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/loan" component={Loan} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);