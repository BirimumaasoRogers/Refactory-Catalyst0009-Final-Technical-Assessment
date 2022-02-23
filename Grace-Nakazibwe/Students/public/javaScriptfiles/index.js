/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
const surName = document.studentsregister.surname;
const givenName = document.studentsregister.givenname;
const Title = document.studentsregister.title;
const Picture = document.studentsregister.picture;
const Male = document.getElementById('male');
const Female = document.getElementById('female');
const Dob = document.studentsregister.dob;
const Country = document.studentsregister.country;
const Residence = document.studentsregister.residence;
const Nationality = document.studentsregister.nationality;

const surNameERROR = document.getElementById('surname-error');
const givenNameERROR = document.getElementById('givenname-error');
const genderError = document.getElementById('gender-error');
const DobError = document.getElementById('dob-error');
const countryError = document.getElementById('contry-error');
const residenceError = document.getElementById('residence-error');
const nationalityError = document.getElementById('nationality-error');

const success = document.getElementById('first-div');
// Regex
const nonumber = /^[A-Za-z ]+$/;

const validate = (event) => {
  let isValid = true;
  // Surname
  const Surname = surName.value.trim();
  if (Surname == ' ') {
    surNameERROR.innerHTML = 'Field Required';
    surNameERROR.style = 'color:red';
    surName.stye.border = '1px solid red';
    surName.focus();
    isValid = false;
  } else if (!(Surname.length > 1 && Surname.length < 16)) {
    surNameERROR.innerHTML = 'Invalid Input';
    surNameERROR.style = 'color:red';
    surName.stye.border = '1px solid red';
    surName.focus();
    isValid = false;
  } else if (!(Surname.match(nonumber))) {
    surNameERROR.innerHTML = 'Invalid Input';
    surNameERROR.style = 'color:red';
    surName.stye.border = '1px solid red';
    surName.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registered Successfully';
    success.style = 'background-color:#32cd32; border:1px solid #32cd32; color:#fff; font-family:san serif;';
  }
  // Given name
  const Givenname = givenName.value.trim();
  if (Givenname == ' ') {
    givenNameERROR.innerHTML = 'Field Required';
    givenNameERROR.style = 'color:red';
    givenName.stye.border = '1px solid red';
    givenName.focus();
    isValid = false;
  } else if (!(Surname.length > 1 && Surname.length < 16)) {
    givenNameERROR.innerHTML = 'Invalid Input';
    givenNameERROR.style = 'color:red';
    givenName.stye.border = '1px solid red';
    givenName.focus();
    isValid = false;
  } else if (!(Surname.match(nonumber))) {
    givenNameERROR.innerHTML = 'Invalid Input';
    givenNameERROR.style = 'color:red';
    givenName.stye.border = '1px solid red';
    givenName.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registered Successfully';
    success.style = 'background-color:#32cd32; border:1px solid #32cd32; color:#fff; font-family:san serif;';
  }

  // Date of birth
  const today = new Date();
  const birth = new Date(Dob.value);
  const age = today.getFullYear() - birth.getFullYear();
  if (Dob.checked == false && Dob.value == '') {
    DobError.innerHTML = 'Select Date of Birth';
    DobError.style = 'color:red';
    Dob.style.border = '1px solid red';
    Dob.focus();
    isValid = false;
  } else if (age < 1) {
    DobError.innerHTML = ' Too young for test ';
    DobError.style = 'color:red';
    Dob.style.border = '1px solid red';
    Dob.focus();
    isValid = false;
  } else if (age > 150) {
    DobError.innerHTML = 'Too old for test ';
    DobError.style = 'color:red';
    Dob.style.border = '1px solid red';
    Dob.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registered Successfully';
    success.style = 'background-color:#32cd32; border:1px solid #32cd32; color:#fff; font-family:san serif;';
  }

  // Residence.
  const studentResidence = Residence.value.trim();
  if (studentResidence == ' ') {
    residenceError.innerHTML = 'Field Required';
    residenceError.style = 'color:red';
    Residence.stye.border = '1px solid red';
    Residence.focus();
    isValid = false;
  } else if (!(studentResidence.length > 1 && studentResidence.length < 20)) {
    residenceError.innerHTML = 'Invalid Input';
    residenceError.style = 'color:red';
    Residence.stye.border = '1px solid red';
    Residence.focus();
    isValid = false;
  } else if (!(studentResidence.match(nonumber))) {
    residenceError.innerHTML = 'Invalid Input';
    residenceError.style = 'color:red';
    Residence.stye.border = '1px solid red';
    Residence.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registered Successfully';
    success.style = 'background-color:#32cd32; border:1px solid #32cd32; color:#fff; font-family:san serif;';
  }

  // Nationality.
  const studentNationality = Nationality.value.trim();
  if (studentNationality == ' ') {
    nationalityError.innerHTML = 'Field Required';
    nationalityError.style = 'color:red';
    Nationality.stye.border = '1px solid red';
    Nationality.focus();
    isValid = false;
  } else if (!(studentNationality.length > 5 && studentNationality.length < 20)) {
    nationalityError.innerHTML = 'Invalid Input';
    nationalityError.style = 'color:red';
    Nationality.stye.border = '1px solid red';
    Nationality.focus();
    isValid = false;
  } else if (!(studentNationality.match(nonumber))) {
    nationalityError.innerHTML = 'Invalid Input';
    nationalityError.style = 'color:red';
    Nationality.stye.border = '1px solid red';
    Nationality.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registered Successfully';
    success.style = 'background-color:#32cd32; border:1px solid #32cd32; color:#fff; font-family:san serif;';
  }
  // Country.
  const studentCountry = Country.value.trim();
  if (studentCountry == 'default') {
    countryError.innerHTML = 'Field Required';
    countryError.style = 'color:red';
    Country.style.border = '1px solid red';
    Country.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registered Successfully';
    success.style = 'background-color:#32cd32; border:1px solid #32cd32; color:#fff; font-family:san serif;';
  }

  // Gender.

  if (!isValid) {
    event.preventDefault();
    return false;
  }
};

const studentForm = document.getElementById('form-id');
studentForm.addEventListener('submit', (event) => {
  validate(event);
});
