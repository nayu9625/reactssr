import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/Home/home';
import About from '../pages/About/about';
import { getData } from '../pages/About/about';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: About,
    loadData: getData,
  }
];

export const Routes = () => {
  return (
    <Switch>
      {
        routes.map((r, index) => {
          const { path, exact, component } = r;
          return (
            <Route key={index} exact={exact} path={path} component={component} />
          )
        })
      }
      {/* 404页面 */}
      {/* <Route /> */}
    </Switch>
  )
}

