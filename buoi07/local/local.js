// let fullname = document.getElementById('fullname').value;
// let namee = document.getElementById('name').value;
// let phone = document.getElementById('phone').value;
// let job = document.getElementById('Job').value;

// let form = localStorage.getItem("form-site") ? JSON.parse(localStorage.getItem("form-site")) : [];

// form.push({
//     fullname: fullname,
//     Name: namee,
//     Phone: phone,
//     job: job,
// })

// localStorage.setItem('form-site', JSON.stringify(form));

function validateinput(){
    let formElement = document.getElementById('container')
    let inputElement = formElement.querySelectorAll('.form-input')
    for (let i = 0; i < inputElement.length; i++){
        if (inputElement[i].value === "" ){
            inputElement[i].parentElement.querySelector('.error-message').innertext = `please enter your ${inputElement[i].id}`
        }else{
            inputElement[i].parentElement.querySelector('.error-message').innertext = ""
        }
    }
}