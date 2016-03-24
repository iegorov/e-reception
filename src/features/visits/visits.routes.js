export default function routes($stateProvider) {
  $stateProvider
    .state('visits', {
      url: '/visits',
      views: {
        '': {
          template: '<visit-list></visit-list>'
        }
      }
    });
}

routes.$inject = ['$stateProvider'];