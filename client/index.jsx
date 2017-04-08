import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'assets/styles/styles.less';
import Landing from 'components/landing/landing';
import Doh from 'components/errors/doh';
import App from 'components/app/containers/app';

function Index(props) {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        {
          props.routes.map(route => (
            <Route key={route.path} path={route.path} component={route.component} />
          ))
        }
        <Route path="*" component={Doh} />
      </Route>
    </Router>
  );
}

Index.propTypes = {
  routes: React.PropTypes.array.isRequired,
};

export default Index;
