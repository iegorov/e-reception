import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './visits.routes';
import VisitsService from './services/visits-service'
import VisitList from './components/visit-list/visit-list';

export default angular.module('eReception.visits', [uirouter])
  .config(routing)
  .service('visitsService', VisitsService)
  .component(VisitList.selector, VisitList.options)
  .name;