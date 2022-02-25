let acc = document.getElementsByClassName("accordion");
// accordion
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#register");

const NAME_REQUIRED = "Enter full name";
const COMPANY_NAME_REQUIRED = "Enter company name";
const PHONE_CODE_REQUIRED = "Code";
const PHONE_REQUIRED = "Phone number";
const EMAIL_REQUIRED = "work email";
const EMAIL_INVALID = "Enter a valid email format";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["fullname"], NAME_REQUIRED);
  let companyValid = hasValue(form.elements["companyname"], COMPANY_NAME_REQUIRED);
  let phoneCodeValid = hasValue(form.elements["phonecode"], PHONE_CODE_REQUIRED);
  let phoneNumberValid = hasValue(form.elements["phonenum"], PHONE_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);

	// if valid, submit the form.
	if (nameValid && emailValid && companyValid && phoneCodeValid && phoneNumberValid ) {
		alert("Demo only. No form was posted.");
	}
});