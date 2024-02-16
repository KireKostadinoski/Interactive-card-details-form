function cardInput() {
  let cardHolderNameInput = document.getElementById("cardHolderName").value;
  let cardNumberInput = document.getElementById("cardNumber").value;
  let expMonthInput = document.getElementById("exp-month").value;
  let expYearInput = document.getElementById("exp-year").value;
  let cvcInput = document.getElementById("cvc").value;

  // Format card number input to have groups of four digits separated by spaces
  cardNumberInput = cardNumberInput.replace(/\s+/g, ''); // Remove existing spaces
  cardNumberInput = cardNumberInput.match(/.{1,4}/g).join(' '); // Insert spaces after every four characters

  let debitCardPattern = /\b(?:\d[ -]*?){13,16}\b/;

  document.getElementById("cardNumb").innerHTML = cardNumberInput;
  document.getElementById("cardHold").innerHTML = cardHolderNameInput;
  document.getElementById("cardMonth").innerHTML = expMonthInput;
  document.getElementById("cardYear").innerHTML = expYearInput;
  document.getElementById("cardCvc").innerHTML = cvcInput;

  let nameError = document.getElementById("card-name-error");
  let cardNumberError = document.getElementById("card-number-error");
  let expMonthError = document.getElementById("exp-month-error");
  let expYearError = document.getElementById("exp-year-error");
  let cvcError = document.getElementById("cvc-error");

  let form = document.getElementById("formToHide");
  let completed = document.getElementById("completed");

  if (cardHolderNameInput.trim() === "") {
      nameError.style.display = "block";
  } else if (!debitCardPattern.test(cardNumberInput)) {
      cardNumberError.style.display = "block";
  } else if (expMonthInput.trim() === "") {
      expMonthError.style.display = "block";
  } else if (expYearInput.trim() === "") {
      expYearError.style.display = "block";
  } else if (cvcInput.trim() === "") {
      cvcError.style.display = "block";
  } else {

  }

  form.style.display = 'none';
  completed.style.display = 'block';
}
