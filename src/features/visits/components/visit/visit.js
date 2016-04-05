export default class Visit {
  static get selector() {
    return 'visit';
  }

  static get options() {
    return {
      template: require('./visit.html'),
      controller: Visit
    }
  }
}
