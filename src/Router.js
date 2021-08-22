import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";

const PayTheHippo = React.lazy(() => import('./screens/PayTheHippo'))
const Contact = React.lazy(() => import('./screens/Contact'))
const SustainableFoods = React.lazy(() => import('./screens/SustainableFoods'))
const Dietplan = React.lazy(() => import('./screens/Dietplan'))
const Nøglehulsmærket = React.lazy(() => import('./screens/Nøglehulsmærket'))
const PlanA = React.lazy(() => import('./screens/PlanA'))
const WSTP = React.lazy(() => import('./screens/WSTP'))
const Infood = React.lazy(() => import('./screens/Infood'))

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/paythehippo" component={PayTheHippo} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/sustainable-foods" component={SustainableFoods} />
        <Route exact path="/dietplan" component={Dietplan} />
        <Route exact path="/nøglehulsmærket" component={Nøglehulsmærket} />
        <Route exact path="/plan-a" component={PlanA} />
        <Route exact path="/wstp" component={WSTP} />
        <Route exact path="/infood" component={Infood} />
        <Route exact path="/*" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
