import React from 'react';
import { HashRouter, Route, Switch} from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import AddBookScreen from "./components/screens/AddBookScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import LogInScreen from "./components/screens/LogInScreen";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {

  function Routes() {
    return (
        <div>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Header />
                <Switch>
                    <Route exact path={"/"} component={HomeScreen} />
                    <Route path={"/add"} component={AddBookScreen} />
                    <Route path={"/register"} component={RegisterScreen}/>
                    <Route path={"/login"} component={LogInScreen}/>
                </Switch>
                <Footer />
            </HashRouter>
        </div>
    );
  }

  return (
      <div>
        <Routes/>
      </div>
  )
}

export default App;
