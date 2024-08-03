
const inputElements = document.querySelectorAll(".card__inputContainer");
const submitButton = document.querySelector(".card__button");

const validatDay = (Day) => {
    if (Day && Day>0 && Day <=31){
        return true;
    }
}

const validatmonth = (month) => {
    if (month && month>0 && month <=12){
        return true;
    }
}

const validatYear = (year) => {

    if (year && year>0 && year <=2024){
        return true;
    }
}

const isDateValid = (dayElement,monthElement ,yearElement ) => {
    let isValid = [false ,false ,false];

    if (!validatDay(dayElement.value)){
        dayElement.classList.add("card__input__erorr")
    }else{
        isValid[0] = true;
        dayElement.classList.remove("card__input__erorr")
    }

    if (!validatmonth(monthElement.value)){
        monthElement.classList.add("card__input__erorr")
    }else{
        isValid[1] = true;
        monthElement.classList.remove("card__input__erorr")
    }

    if (!validatYear(yearElement.value)){
        yearElement.classList.add("card__input__erorr")
    }else{
        isValid[2] = true;
        yearElement.classList.remove("card__input__erorr")
    }

    return isValid.every((element) => element === true);

};

const calculateAge = (year, month, day) => {
    const today = new Date();
    const birthdate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
};

const onClickHandler = () => {
    const dayElement = document.querySelector('.card__input[name="day"]');
    const monthElement = document.querySelector('.card__input[name="month"]');
    const yearElement = document.querySelector('.card__input[name="year"]');
    const resultElement = document.querySelector('.card__resultValue');

      if (!isDateValid(dayElement, monthElement, yearElement)) {
   resultElement.textContent = "--";
   return;
}

    const day = parseInt(dayElement.value, 10);
    const month = parseInt(monthElement.value, 10);
    const year = parseInt(yearElement.value, 10);

    resultElement.textContent = calculateAge(year, month, day);
    console.log("You clicked me");
};

inputElements.forEach(element => {
    element .addEventListener("keydown", event => {
        event.key === "Enter" && onClickHandler();
    })
});

submitButton.addEventListener("click", onClickHandler);

