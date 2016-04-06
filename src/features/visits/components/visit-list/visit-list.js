export default class VisitList {
  constructor(visitsService) {
    this.visitsService = visitsService;
    console.log(this.visitsService.getTasks());
  }
  static get selector() {
    return 'visitList';
  }

  static get options() {
    return {
      template: require('./visit-list.html'),
      controller: VisitList
    }
  }
}

VisitList.$inject = ['visitsService'];