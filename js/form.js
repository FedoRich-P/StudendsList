export function createAddForm() {
  const addForm = document.createElement('form');
  const addFormTitle = document.createElement('h2');
  const addFormNameGroup = document.createElement('div');
  const addFormNumbGroup = document.createElement('div');
  const addFormName = document.createElement('input');
  const addFormPatronymic = document.createElement('input');
  const addFormLastname = document.createElement('input');
  const addFormBirthdate = document.createElement('input');
  const addFormYearOfEnter = document.createElement('input');
  const addFormFaculty = document.createElement('input');
  const addFormButton = document.createElement('button');

  addForm.setAttribute('novalidate', true);

  addFormTitle.textContent = 'Форма добавления студентов';

  addFormNameGroup.classList.add('input-group');
  addFormNumbGroup.classList.add('input-group');

  addFormLastname.classList.add('add-form__lastname', 'form-control', 'mb-3');
  addFormLastname.setAttribute('placeholder', 'Введите фамилию');
  addFormLastname.setAttribute('type', 'text');

  addFormName.classList.add('add-form__name', 'form-control', 'mb-3');
  addFormName.setAttribute('placeholder', 'Введите имя');
  addFormName.setAttribute('type', 'text');

  addFormPatronymic.classList.add(
    'add-form__patronymic',
    'form-control',
    'mb-3'
  );
  addFormPatronymic.setAttribute('placeholder', 'Введите отчество');
  addFormPatronymic.setAttribute('type', 'text');

  addFormFaculty.classList.add('add-form__faculty', 'form-control', 'mb-3');
  addFormFaculty.setAttribute('placeholder', 'Введите название факультета');
  addFormFaculty.setAttribute('type', 'text');

  addFormBirthdate.classList.add('add-form__birthdate', 'mb-3');
  addFormBirthdate.setAttribute('type', 'date');

  addFormYearOfEnter.classList.add('add-form__year', 'form-control', 'mb-3');
  addFormYearOfEnter.setAttribute(
    'placeholder',
    'Введите год (начало обучения)'
  );

  addFormYearOfEnter.setAttribute('type', 'number');

  addFormButton.classList.add('add-form__button', 'btn', 'btn-primary', 'mb-3');
  addFormButton.textContent = 'Добавить студента';
  addFormButton.setAttribute('type', 'submit');

  addFormNameGroup.append(addFormLastname, addFormName, addFormPatronymic);
  addFormNumbGroup.append(addFormBirthdate, addFormYearOfEnter);

  addForm.append(
    addFormTitle,
    addFormNameGroup,
    addFormFaculty,
    addFormNumbGroup,
    addFormButton
  );
  return {
    addForm,
    addFormName,
    addFormPatronymic,
    addFormLastname,
    addFormBirthdate,
    addFormYearOfEnter,
    addFormFaculty,
    addFormButton,
  };
}

export function createFilterForm() {
  const filterForm = document.createElement('form');
  const filterFormTitle = document.createElement('h2');
  const filterFormNameGroup = document.createElement('div');
  const filterFormNumbGroup = document.createElement('div');
  const filterFormName = document.createElement('input');
  const filterFormPatronymic = document.createElement('input');
  const filterFormLastname = document.createElement('input');
  const filterFormYearOfEnter = document.createElement('input');
  const filterFormYearOfEnd = document.createElement('input');
  const filterFormFaculty = document.createElement('input');
  const filterFormButton = document.createElement('button');

  filterFormTitle.textContent = 'Форма поиска студента';

  filterFormNameGroup.classList.add('input-group');
  filterFormNumbGroup.classList.add('input-group');

  filterFormLastname.classList.add(
    'filter-form__lastname',
    'form-control',
    'mb-3'
  );
  filterFormLastname.setAttribute('placeholder', 'Введите фамилию');
  filterFormLastname.setAttribute('type', 'text');

  filterFormName.classList.add('filter-form__name', 'form-control', 'mb-3');
  filterFormName.setAttribute('placeholder', 'Введите имя');
  filterFormName.setAttribute('type', 'text');

  filterFormPatronymic.classList.add(
    'filter-form__patronymic',
    'form-control',
    'mb-3'
  );
  filterFormPatronymic.setAttribute('placeholder', 'Введите отчество');
  filterFormPatronymic.setAttribute('type', 'text');

  filterFormFaculty.classList.add(
    'filter-form__faculty',
    'form-control',
    'mb-3'
  );
  filterFormFaculty.setAttribute('placeholder', 'Введите название факультета');
  filterFormFaculty.setAttribute('type', 'text');

  filterFormYearOfEnter.classList.add(
    'filter-form__year-enter',
    'form-control',
    'mb-3'
  );
  filterFormYearOfEnter.setAttribute(
    'placeholder',
    'Введите год (начало обучения)'
  );
  filterFormYearOfEnter.setAttribute('type', 'number');

  filterFormYearOfEnd.classList.add(
    'filter-form__year-end',
    'form-control',
    'mb-3'
  );
  filterFormYearOfEnd.setAttribute(
    'placeholder',
    'Введите год (окончание обучения)'
  );
  filterFormYearOfEnd.setAttribute('type', 'number');

  filterFormButton.classList.add(
    'filter-form__button',
    'btn',
    'btn-primary',
    'mb-3'
  );
  filterFormButton.textContent = 'Поиск студента';
  filterFormButton.setAttribute('type', 'submit');

  filterFormNameGroup.append(
    filterFormLastname,
    filterFormName,
    filterFormPatronymic
  );
  filterFormNumbGroup.append(filterFormYearOfEnter, filterFormYearOfEnd);

  filterForm.append(
    filterFormTitle,
    filterFormNameGroup,
    filterFormFaculty,
    filterFormNumbGroup,
    filterFormButton
  );
  return {
    filterForm,
    filterFormName,
    filterFormPatronymic,
    filterFormLastname,
    filterFormYearOfEnter,
    filterFormYearOfEnd,
    filterFormFaculty,
    filterFormButton,
  };
}
