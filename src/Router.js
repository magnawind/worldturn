import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";

const PayTheHippo = React.lazy(() => import('./screens/NewTrends'))
const Contact = React.lazy(() => import('./screens/Contact'))
const SustainableFoods = React.lazy(() => import('./screens/MegaTrends'))
const Dietplan = React.lazy(() => import('./screens/AccelerationAttention'))
const Nøglehulsmærket = React.lazy(() => import('./screens/MachinesRise'))
const PlanA = React.lazy(() => import('./screens/CriticalNature'))
const WSTP = React.lazy(() => import('./screens/ConstantChange'))
const Infood = React.lazy(() => import('./screens/FutureRevolution'))

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
