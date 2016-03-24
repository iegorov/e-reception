import angular from 'angular';
import uirouter from 'angular-ui-router';

import visits from './features/visits';

import RouterConfig from './app.config';

angular
  .module('eReception', [uirouter, visits])
  .config(RouterConfig);;

