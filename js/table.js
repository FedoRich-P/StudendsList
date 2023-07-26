export function createTable() {
  const table = document.createElement('table');
  const tableTH = document.createElement('thead');
  const tableTB = document.createElement('tbody');
  const tableTR = document.createElement('tr');
  const tableLastname = document.createElement('th');
  const tableFaculty = document.createElement('th');
  const tableAge = document.createElement('th');
  const tableYearsOfEnter = document.createElement('th');

  table.classList.add('table', 'table-dark', 'table-striped');

  tableTR.classList.add('table-sort__TH');

  tableLastname.textContent = 'Ф. И. О. студента';
  tableLastname.setAttribute('data-sort', 'lastname');
  tableLastname.style.cursor = 'pointer';

  tableFaculty.textContent = 'Факультет';
  tableFaculty.setAttribute('data-sort', 'faculty');
  tableFaculty.style.cursor = 'pointer';

  tableAge.textContent = 'Дата рождения';
  tableAge.setAttribute('data-sort', 'birthdate');
  tableAge.style.cursor = 'pointer';

  tableYearsOfEnter.textContent = 'Годы обучения';
  tableYearsOfEnter.setAttribute('data-sort', 'yearOfEnter');
  tableYearsOfEnter.style.cursor = 'pointer';

  tableTR.append(tableLastname, tableFaculty, tableAge, tableYearsOfEnter);
  tableTH.append(tableTR);
  table.append(tableTH, tableTB);

  return { table, tableTB };
}

export function createTableTR(student) {
  const tableTR = document.createElement('tr');
  const tableFullname = document.createElement('td');
  const tableFaculty = document.createElement('td');
  const tableAge = document.createElement('td');
  const tableYearsOfEnter = document.createElement('td');

  tableFullname.textContent = `${student.fullname}`;

  tableFaculty.textContent = `${student.faculty}`;

  tableAge.textContent = `${student.formatDate} ${student.getAge}`;

  tableYearsOfEnter.textContent = `${student.yearsOfStudy}`;

  tableTR.append(tableFullname, tableFaculty, tableAge, tableYearsOfEnter);

  return tableTR;
}
