import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Root from "./components/Root";
import HomeScreen from "./components/screens/HomeScreen";
import AddBookScreen from "./components/screens/AddBookScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import LogInScreen from "./components/screens/LogInScreen";

function App() {

  function Routes() {
    return (
        <Router history={browserHistory}>
          <Route path={"/"} component={Root}>
            <Route path={"/home"} component={HomeScreen} />
            <Route path={"/add"} component={AddBookScreen} />
            <Route path={"/register"} component={RegisterScreen}/>
            <Route path={"/login"} component={LogInScreen}/>
          </Route>
        </Router>
    );
  }

  return (
      <div>
        <Routes/>
      </div>
  )
}

export default App;
