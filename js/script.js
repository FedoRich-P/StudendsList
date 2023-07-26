import { Student } from './class.js';
import { createTable, createTableTR } from './table.js';
import { createAddForm, createFilterForm } from './form.js';

let studentsArr = [
  {
    name: 'Олег',
    patronymic: 'Иванович',
    lastname: 'Мостин',
    birthdate: '2002.03.15',
    yearOfEnter: 2020,
    faculty: 'Игры',
  },
  {
    name: 'Юлия',
    patronymic: 'Александровна',
    lastname: 'Воронина',
    birthdate: '2000.03.15',
    yearOfEnter: 2022,
    faculty: 'Танцы',
  },
  {
    name: 'Евгения',
    patronymic: 'Анатольевна',
    lastname: 'Ильина',
    birthdate: '2002.04.12',
    yearOfEnter: 2017,
    faculty: 'Гимнастика',
  },
  {
    name: 'Юлия',
    patronymic: 'Олеговна',
    lastname: 'Антонова',
    birthdate: '2000.05.01',
    yearOfEnter: 2019,
    faculty: 'Гимнастика',
  },
  {
    name: 'Александр',
    patronymic: 'Иванович',
    lastname: 'Воронин',
    birthdate: '2001.06.08',
    yearOfEnter: 2020,
    faculty: 'Танцы',
  },
];

const tableHTML = document.querySelector('#tableHTML');
const { table, tableTB } = createTable();
const { addForm, addFormButton } = createAddForm();
const { filterForm, filterFormButton } = createFilterForm();

let sortDirection = true;
let sortProperty = 'fullname';

tableHTML.append(addForm, filterForm, table);

function transformToClass(arr) {
  return arr.map(function (student) {
    return (student = new Student(
      student.name,
      student.patronymic,
      student.lastname,
      student.birthdate,
      student.yearOfEnter,
      student.faculty
    ));
  });
}

let copyOfArr = transformToClass(studentsArr);

copyOfArr = sortArray(copyOfArr, sortProperty, sortDirection);

function addStudent(arr = [], sortProperty, sortDirection) {
  tableTB.innerHTML = '';

  arr = sortArray(arr, sortProperty, sortDirection);

  arr.forEach((student) => {
    tableTB.append(createTableTR(student));
  });
}

addFormButton.addEventListener('click', function (event) {
  event.preventDefault();

  const addFormName = document.querySelector('.add-form__name');
  const addFormPatronymic = document.querySelector('.add-form__patronymic');
  const addFormLastname = document.querySelector('.add-form__lastname');
  const addFormBirthdate = document.querySelector('.add-form__birthdate');
  const addFormYearOfEnter = document.querySelector('.add-form__year');
  const addFormFaculty = document.querySelector('.add-form__faculty');

  let dateFromInput = Number(new Date(addFormBirthdate.value).getFullYear());
  let dateYearOfEnter = Number(
    new Date(addFormYearOfEnter.value).getFullYear()
  );
  let currentYear = Number(new Date().getFullYear());

  if (!addFormLastname.value.trim()) {
    setError(addFormLastname);
    addFormLastname.addEventListener('input', () =>
      removeError(addFormLastname)
    );
    return;
  } else if (!addFormName.value.trim()) {
    setError(addFormName);
    addFormName.addEventListener('input', () => removeError(addFormName));
    return;
  } else if (!addFormPatronymic.value.trim()) {
    setError(addFormPatronymic);
    addFormPatronymic.addEventListener('input', () =>
      removeError(addFormPatronymic)
    );
    return;
  } else if (!addFormFaculty.value.trim()) {
    setError(addFormFaculty);
    addFormFaculty.addEventListener('input', () => removeError(addFormFaculty));
    return;
  } else if (
    !addFormBirthdate.value.trim() ||
    dateFromInput < 1900 ||
    dateFromInput > currentYear
  ) {
    setError(addFormBirthdate);
    addFormBirthdate.addEventListener('input', () =>
      removeError(addFormBirthdate)
    );
    return;
  } else if (
    !addFormYearOfEnter.value.trim() ||
    dateYearOfEnter < 2000 ||
    dateYearOfEnter > currentYear
  ) {
    setError(addFormYearOfEnter);
    addFormYearOfEnter.addEventListener('input', () =>
      removeError(addFormYearOfEnter)
    );
    return;
  }

  tableTB.innerHTML = '';

  copyOfArr.push(
    new Student(
      addFormName.value,
      addFormPatronymic.value,
      addFormLastname.value,
      addFormBirthdate.value,
      addFormYearOfEnter.value,
      addFormFaculty.value
    )
  );
  addStudent(copyOfArr);
});

function sortArray(array, property, directionOfArray) {
  return array.sort((a, b) => {
    if (
      directionOfArray ? a[property] < b[property] : a[property] > b[property]
    )
      return -1;
  });
}

const tableSortBox = document.querySelector('.table-sort__TH');

tableSortBox.addEventListener('click', function (event) {
  let target = event.target.dataset.sort;

  if (
    target === document.querySelector('[data-sort="lastname"]').dataset.sort
  ) {
    addStudent(copyOfArr, target, sortDirection);
  }
  if (target === document.querySelector('[data-sort="faculty"]').dataset.sort) {
    addStudent(copyOfArr, target, sortDirection);
  }
  if (
    target === document.querySelector('[data-sort="birthdate"]').dataset.sort
  ) {
    addStudent(copyOfArr, target, sortDirection);
  }
  if (
    target === document.querySelector('[data-sort="yearOfEnter"]').dataset.sort
  ) {
    addStudent(copyOfArr, target, sortDirection);
  }
  sortDirection = !sortDirection;
});

addStudent(copyOfArr);

function filterArray(arr = [], property, value) {
  let newArray = [...arr];
  newArray = newArray.filter((student) => {
    return String(student[property])
      .toLowerCase()
      .includes(String(value).toLowerCase());
  });

  addStudent(newArray, sortProperty, sortDirection);

  return newArray;
}

filterForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const filterFormName = document.querySelector('.filter-form__name').value;
  const filterFormPatronymic = document.querySelector(
    '.filter-form__patronymic'
  ).value;
  const filterFormLastname = document.querySelector(
    '.filter-form__lastname'
  ).value;
  const filterFormFaculty = document.querySelector(
    '.filter-form__faculty'
  ).value;
  const filterFormYearOfEnter = document.querySelector(
    '.filter-form__year-enter'
  ).value;
  const filterFormYearOfEnd = document.querySelector(
    '.filter-form__year-end'
  ).value;

  if (filterFormName) {
    filterArray(copyOfArr, 'name', filterFormName);
  }

  if (filterFormPatronymic) {
    filterArray(copyOfArr, 'patronymic', filterFormPatronymic);
  }
  if (filterFormLastname) {
    filterArray(copyOfArr, 'lastname', filterFormLastname);
  }
  if (filterFormFaculty) {
    filterArray(copyOfArr, 'faculty', filterFormFaculty);
  }
  if (filterFormYearOfEnter) {
    filterArray(copyOfArr, 'yearOfEnter', filterFormYearOfEnter);
  }
  if (filterFormYearOfEnd) {
    filterArray(copyOfArr, 'yearOfEnd', filterFormYearOfEnd);
  }
});

function setError(input) {
  input.style.border = '2px solid red';
  if (!input.getAttribute('placeholder')) {
    alert(`Дата рождения, не введена, 
    или введена не корректно!`);
  } else {
    alert(`Пожалуйста, ${input.getAttribute('placeholder')}!`);
  }
}

function removeError(input) {
  input.style.border = '';
}
