import React from 'react';
import { Router, hashHistory } from 'react-router';
import Routes from './routes/routes';
import 'assets/styles/styles.less';
import App from './app';

export default function index() {
  console.log('rendering index');
  console.log('Routes ::: ', Routes);
  return ( <Routes /> );
}
