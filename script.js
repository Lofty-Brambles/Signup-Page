console.log( `test` );
// Runs a simple console.log refresher

const firstName = document.querySelector( "#first-name" );
const secondName = document.querySelector( "#second-name" );
const phone = document.querySelector( "#phone" );

const email = document.querySelector( "#email" );
const emailError = document.querySelector( ".emailError" );

const password = document.querySelector( "#password" );
const passError = document.querySelector( ".passError" );

const confPass = document.querySelector( "#conf-pass" );
const confPassError = document.querySelector( ".confPassError" );

const button = document.querySelector( ".btn" );
const form = document.querySelector( "form" );
// Fetches the error popups

email.addEventListener( "focusout", () => {
	if ( email.value.trim() !== ""  || email.checkValidity() ) {
		emailError.textContent = "❌ Please enter a valid Email address."
		emailError.style.display = "block";
	}
} );

email.addEventListener( "focusin", () => {
	emailError.textContent = ""
	emailError.style.display = "none";
} );
// Email address checker

confPass.addEventListener( "focusout", () => {
	if ( confPass.value.trim() !== "" || confPass.value !== password.value ) {
		confPassError.textContent = "❌ Password mismatch";
		confPassError.style.display = "block";
	}
} );

confPass.addEventListener( "focusin", () => {
	confPassError.textContent = "";
	confPassError.style.display = "none";
} );
// Confirms Password

const char7 = document.querySelector( ".char" );
const cap1 = document.querySelector( ".capital" );
const num1 = document.querySelector( ".num" );
// Fetches all errors

password.addEventListener( "focusout", () => {
	if (
		( password.value.trim().length >= 7 ) &&
		( /\d/.test( password.value ) ) &&
		( /[A-Z]/.test( password.value ) )
	) {
		passError.style.display = "none";
	} else {
		passError.style.display = "block";
	}
} );

password.addEventListener( "input", () => {

	let counter = 0;

	if ( password.value.trim().length >= 7 ) {
		char7.textContent = "✔";
		counter++;
	} else {
		char7.textContent = "❌";
	}
	if ( /\d/.test( password.value ) ) {
		cap1.textContent = "✔";
		counter++;
	} else {
		cap1.textContent = "❌";
	}
	if ( /[A-Z]/.test( password.value ) ) {
		num1.textContent = "✔";
		counter++;
	} else {
		num1.textContent = "❌";
	}
	if ( counter === 3 ) {
		passError.style.display = "none";
	}

} );
// Added password event listeners

button.addEventListener( "click", () => {
	if (
		( firstName.checkValidity() ) && 
		( secondName.checkValidity() ) &&
		( phone.checkValidity() ) &&
		( email.checkValidity() ) &&
		( password.value.trim().length >= 7 ) &&
		( /\d/.test( password.value ) ) &&
		( /[A-Z]/.test( password.value ) ) &&
		( confPass.value === password.value )
	) {
		form.submit();
	}
} );
// Submit button