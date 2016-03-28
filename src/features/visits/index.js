import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './visits.routes';
import VisitList from './components/visit-list/visit-list.js';

export default angular.module('eReception.visits', [uirouter])
  .config(routing)
  .component(VisitList.selector, VisitList.options)
  .name;