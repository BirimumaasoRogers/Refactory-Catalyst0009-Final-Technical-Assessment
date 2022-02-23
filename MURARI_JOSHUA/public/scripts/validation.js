const fsurname = document.register.surname;
const fgivenname = document.register.givenname;
const fgender = document.register.gender;
const fdob = document.register.dob;
const fcountry = document.register.country;
const fresidence = document.register.residence;
const fnation = document.register.nation;

//validation constants
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const alphabet = /^[A-Za-z]+$/;



const validate = (e) => {
    let isValid = true;

    //validating surname
    const surname = fsurname.value.trim();
    if (surname == ''){
        fsurname.style.border = '2px solid red';
        surnameerr.innerHTML = 'Please enter stage name'
        surnameer.style = 'color:red';
        fsurname.focus();
        isValid = false;
        
    }
    if (!isValid){
        e.preventDefault();
        return false;
    }
}

const form = document.getElemetById('form')
form.addEventListener('submit', (e) => {
    validate(e);
});