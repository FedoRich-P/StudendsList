export class Student {
  constructor(name, patronymic, lastname, birthdate, yearOfEnter, faculty) {
    this.name = name;
    this.patronymic = patronymic;
    this.lastname = lastname;
    this.birthdate = new Date(birthdate);
    this.yearOfEnter = yearOfEnter;
    this.faculty = faculty.replace(faculty[0], faculty[0].toUpperCase());
  }

  get fullname() {
    return `${this.lastname.replace(
      this.lastname[0],
      this.lastname[0].toUpperCase()
    )} ${this.name.replace(
      this.name[0],
      this.name[0].toUpperCase()
    )} ${this.patronymic.replace(
      this.patronymic[0],
      this.patronymic[0].toUpperCase()
    )}`;
  }

  get formatDate() {
    const date = new Date(this.birthdate);
    const year = date.getFullYear();
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('.');
  }

  plural(number) {
    let declension = ['год', 'года', 'лет'];
    let cases = [2, 0, 1, 1, 1, 2];
    declension =
      declension[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ];
    return `(${number} ${declension})`;
  }

  get getAge() {
    const todayDate = new Date();
    const age = todayDate.getFullYear() - this.birthdate.getFullYear();
    const month = todayDate.getMonth() - this.birthdate.getMonth();

    if (
      month < 0 ||
      (month === 0 && todayDate.getDate() < this.birthdate.getDate())
    )
      age--;
    return this.plural(age);
  }

  get yearOfEnd() {
    return Number(this.yearOfEnter) + 4;
  }

  get yearsOfStudy() {
    const todayDate = new Date();
    let course = `${todayDate.getFullYear() - this.yearOfEnter} курс`;

    if (todayDate.getFullYear() > this.yearOfEnd) course = 'закончил';
    if (this.yearOfEnd === todayDate.getFullYear() && todayDate.getMonth() > 8)
      course = 'закончил';

    return `${this.yearOfEnter} - ${this.yearOfEnd}(${course})`;
  }
}
