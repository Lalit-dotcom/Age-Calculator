const buttonEl = document.querySelector("button");
const birthdayEl = document.getElementById("birthday");
const result = document.querySelector("#result");

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue == ""){
        alert("Please Enter your birth date");
    }
    else{
        const age = getAge(birthdayValue);
        result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();  //use new Date() to get the current date.
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();  //different functions of Date().
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){  //if date is greater than currentdate than subtract the age by 1.
        age--;
    }
    return age;
}

buttonEl.addEventListener("click", () => {
    calculateAge();
});