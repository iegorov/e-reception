import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './visits.routes';
import VistiListComponent from './components/visit-list/visit-list.js';

export default angular.module('eReception.visits', [uirouter])
  .config(routing)
  .component('visitList', {
        template: require('./components/visit-list/visit-list.html'),
        controller: VistiListComponent
      })
  .name;