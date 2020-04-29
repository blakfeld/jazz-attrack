import './App.css';
import 'typeface-roboto';
import * as ROUTES from "./constants/routes";
import EditSchedule from "./pages/EditSchedule";
import Home from "./pages/Home";
import NewChanging from "./pages/NewChanging";
import NewFeeding from "./pages/NewFeeding";
import NewWeight from "./pages/NewWeight";
import PageHeader from "./components/PageHeader";
import React from 'react';
import {Route, Switch} from  "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";


const theme = createMuiTheme();


const App = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <PageHeader/>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route exact path={ROUTES.EDIT_SCHEDULE} component={EditSchedule}/>
          <Route exact path={ROUTES.NEW_CHANGING} component={NewChanging}/>
          <Route exact path={ROUTES.NEW_FEEDING} component={NewFeeding}/>
          <Route exact path={ROUTES.NEW_WEIGHT} component={NewWeight}/>
        </Switch>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
