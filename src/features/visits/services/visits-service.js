export default class VisitsService {
  constructor() {
    this._visits = [
      {
        "date": "2012-09-07 10:16:43.867000000",
        "target": "Организация теоретических учений ГО и ЧС",
        "description": "Показ фильма"
      },
      {
        "date": "2012-09-13 13:53:01.580000000",
        "target": "На приём к лору без талона.",
        "description": "Посететель очень хочет попасть на приём к лору без талона."
      }
    ];
  }
  getTasks() {
    return this._visits;
  }
}