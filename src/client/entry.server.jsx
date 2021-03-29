import React from 'react';
import { Routes, routes } from './router';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createServerStore } from './store/index';

export default (ctx) => {
  return new Promise(resolve => {
    const promises = [];
    routes.some(route => {
      if(route.path === ctx.request.path && route.loadData) {
        promises.push(route.loadData());
      }
    })
    Promise.all(promises).then(res => {
      res[0] && (ctx.window = res[0].data.data);
      resolve(
        <Provider store={createServerStore()}>
          <Router location={ctx.request.url}>{Routes()}</Router>
        </Provider>
      )
    })
  })
}