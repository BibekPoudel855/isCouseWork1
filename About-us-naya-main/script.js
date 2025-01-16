//Feedback-Form validation//
function validateForm(){
const firstname =document.getElementById('firstname').value;//Select HTML elemens with the id attribute set to "firstname"//
const lastname =document.getElementById('lastname').value;//Select HTML elemens with the id attribute set to "lastname"//
const email =document.getElementById('Email').value;//Select HTML elemens with the id attribute set to "Email"//
const suggestion =document.getElementById('suggestion').value;//Select HTML elemens with the id attribute set to "Suggestion"//
console.log(firstname,lastname,email,suggestion);//It is used for debugging or viewing variable values//


if (firstname =='' || lastname =='' || suggestion ==''){
    alert("Firstname cannot be empty.");
}else{

    alert('Form valid');
} 
}









