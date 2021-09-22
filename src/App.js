import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';

import { RestaurantList } from './modules/restaurantlist/RestaurantList';
import { ManageRestaurant } from './modules/manage/ManageRestaurant';
import Login from './modules/login/Login';

function App(props) {

  const {
    userInfo
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          {userInfo == null &&
            <Login/>
          }
          {userInfo != null && userInfo.rol==="user" &&
           <Redirect
            to={{
              pathname: '/home'
            }}
          />
          }

          {userInfo != null && userInfo.rol==="admin" &&
           <Redirect
            to={{
              pathname: '/manage'
            }}
          />
          }
        </Route>
        <Route path="/home">
              <RestaurantList/>
        </Route>

        <Route path="/manage">
              <ManageRestaurant/>
        </Route>
      </Switch>
    </Router>
  );
}

export default connect(
  store => ({
      userInfo: store.login.userInfo,
  }),
  null
)(App);