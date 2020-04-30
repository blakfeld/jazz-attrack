import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import React from 'react';
import {Route, Switch} from "react-router-dom";
import 'typeface-roboto';
import './App.css';
import PageHeader from "./components/PageHeader";
import * as ROUTES from "./constants/routes";
import Home from "./pages/Home";
import NewChanging from "./pages/NewChanging";
import NewFeeding from "./pages/NewFeeding";
import NewWeight from "./pages/NewWeight";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#eee2e4",
      main: "#ebbfd0",
      dark: "#da8ba9"
    },
    secondary: {
      light: "#7ec9e7",
      main: "#279dcd",
      dark: "#1f7da3"
    },
  }
});


const App = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <PageHeader/>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route exact path={ROUTES.NEW_CHANGING} component={NewChanging}/>
          <Route exact path={`${ROUTES.NEW_CHANGING}/:changingId`} component={NewChanging}/>
          <Route exact path={ROUTES.NEW_FEEDING} component={NewFeeding}/>
          <Route exact path={`${ROUTES.NEW_FEEDING}/:feedingId`} component={NewFeeding}/>
          <Route exact path={ROUTES.NEW_WEIGHT} component={NewWeight}/>
          <Route exact path={`${ROUTES.NEW_WEIGHT}/:weightId`} component={NewWeight}/>
        </Switch>
      </MuiThemeProvider>
    </div>
  );
}


export default App;
