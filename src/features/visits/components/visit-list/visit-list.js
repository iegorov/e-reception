export default class VisitList {
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

VisitList.$inject = [];