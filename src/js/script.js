// show more text function
const readMore = document.querySelector(".more-click");
const text = document.querySelector(".text");

if (readMore) {
  readMore.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMore.innerHTML === "წაიკითხეთ სრულად") {
      readMore.innerHTML = "შეამცირეთ ტექსტი";
    } else {
      readMore.innerHTML = "წაიკითხეთ სრულად";
    }
  });
}

const readMores = document.querySelector(".for-second-more");
const text2 = document.querySelector(".second-text-txt");

if (readMores) {
  readMores.addEventListener("click", (e) => {
    text2.classList.toggle("show-more");
    if (readMores.innerHTML === "წაიკითხეთ სრულად") {
      readMores.innerHTML = "შეამცირეთ ტექსტი";
    } else {
      readMores.innerHTML = "წაიკითხეთ სრულად";
    }
  });
}
// end of show more text function

// Form Validation

const sendButton = document.getElementById("sendButton");
if (sendButton) {
  sendButton.addEventListener("click", () => {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
    const emptyValue = [nameField, emailField, messageField].filter(
      (item) => !item.value
    );
    const filledValue = [nameField, emailField, messageField].filter(
      (item) => item.value
    );
    emptyValue.forEach((item) => {
      item.classList.add("errorBorder");
      item.nextSibling.nextSibling.classList.remove("hidden");
    });
    filledValue.forEach((item) => {
      item.classList.remove("errorBorder");
      item.nextSibling.nextSibling.classList.add("hidden");
    });
  });
}

// End of Form Validation

// new term script
const newTermInput = document.getElementById("new-term");
const btnAddNewTerm = document.getElementById("addNewTerm");
if (newTermInput) {
  btnAddNewTerm.addEventListener("click", () => {
    if (!newTermInput.value) {
      newTermInput.classList.add("errorBorder");
      newTermInput.nextSibling.nextSibling.classList.remove("hidden");
    } else {
      newTermInput.classList.remove("errorBorder");
      newTermInput.nextSibling.nextSibling.classList.add("hidden");
    }
  });
}
// end of new term script

// ------ function for success send message ---------
function callIsEmpty() {
  const nameEl = document.getElementById("name").value;
  const emailEl = document.getElementById("email").value;
  const messageEl = document.getElementById("message").value;

  if (nameEl !== "" && emailEl !== "" && messageEl !== "") {
    const element = document.querySelector(".contact-info");
    const element2 = document.querySelector(".form");
    const element3 = document.querySelector(".success-msg");
    element.classList.add("form-hide");
    element2.classList.add("form-hide");
    element3.classList.add("not-hide");
  }
}
// -------- end of isEMpty() function --------

// -------- toggle login and signup forms -------
// select elements
const signInBtn = document.querySelector(".btn-login");
const signUpBtn = document.querySelector(".btn-signup");
const signInForm = document.querySelector(".login");
const signUpForm = document.querySelector(".signup");
// click on buttons
if (signUpBtn) {
  signUpBtn.addEventListener("click", () => {
    signUpBtn.classList.add("active-tab");
    signUpBtn.classList.remove("inactive-tab");
    signUpForm.classList.remove("hidden");
    signInBtn.classList.remove("active-tab");
    signInBtn.classList.add("inactive-tab");
    signInForm.classList.add("hidden");
  });
}
if (signInBtn) {
  signInBtn.addEventListener("click", () => {
    signInBtn.classList.add("active-tab");
    signInBtn.classList.remove("inactive-tab");
    signInForm.classList.remove("hidden");
    signUpBtn.classList.remove("active-tab");
    signUpBtn.classList.add("inactive-tab");
    signUpForm.classList.add("hidden");
  });
}

// -------- end of toggle login and signup forms -------

// -------- change autorisation form to registration form --------
function changeAutoToRegistr() {
  signUpBtn.classList.add("active-tab");
  signUpBtn.classList.remove("inactive-tab");
  signUpForm.classList.remove("hidden");
  signInBtn.classList.remove("active-tab");
  signInBtn.classList.add("inactive-tab");
  signInForm.classList.add("hidden");
}
// -------- end of function --------

// -------- Login Validation -------
const loginBtn = document.querySelector(".submit-login");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const usernameInput = document.querySelector(".username");
    const passwordInput = document.querySelector(".psw");
    const emptyInput = [usernameInput, passwordInput].filter(
      (item) => !item.value
    );
    const filledInput = [usernameInput, passwordInput].filter(
      (item) => item.value
    );
    emptyInput.forEach((item) => {
      item.classList.add("errorBorder");
      item.nextSibling.nextSibling.classList.remove("hidden");
    });
    filledInput.forEach((item) => {
      item.classList.remove("errorBorder");
      item.nextSibling.nextSibling.classList.add("hidden");
    });
  });
}
// --------- Registration Validation ------------
const registrationBtn = document.querySelector(".submit-registration");
if (registrationBtn) {
  registrationBtn.addEventListener("click", () => {
    const emailRegInput = document.querySelector(".email-reg");
    const nameRegInput = document.querySelector(".name-reg");
    const phoneRegInput = document.querySelector(".phone-reg");
    const pswRegInput = document.querySelector(".psw-reg");
    const pswRepeatRegInput = document.querySelector(".psw-repeat-reg");
    const emptyRegInputs = [
      emailRegInput,
      nameRegInput,
      phoneRegInput,
      pswRegInput,
      pswRepeatRegInput,
    ].filter((item) => !item.value);
    const FilledRegInputs = [
      emailRegInput,
      nameRegInput,
      phoneRegInput,
      pswRegInput,
      pswRepeatRegInput,
    ].filter((item) => item.value);

    emptyRegInputs.forEach((item) => {
      item.classList.add("errorBorder");
      item.nextSibling.nextSibling.classList.remove("hidden");
    });
    FilledRegInputs.forEach((item) => {
      item.classList.remove("errorBorder");
      item.nextSibling.nextSibling.classList.add("hidden");
    });
  });
}


//------------- recovery password validation--------------//
const recoveryButton = document.querySelector(".submit-recovery");
if (recoveryButton) {
  recoveryButton.addEventListener("click", () => {
    const recoverPass = document.querySelector(".psw-recovery");
    const recoveryPassRpt = document.querySelector(".psw-recovery-rpt");
    const emptyValue = [recoverPass, recoveryPassRpt].filter(
      (item) => !item.value
    );
    const filledValue = [recoverPass, recoveryPassRpt].filter(
      (item) => item.value
    );
    emptyValue.forEach((item) => {
      item.classList.add("errorBorder");
      item.nextSibling.nextSibling.classList.remove("hidden");
    });
    filledValue.forEach((item) => {
      item.classList.remove("errorBorder");
      item.nextSibling.nextSibling.classList.add("hidden");
    });
  });
}
// click text "პაროლის აღდგენა"
const tglFrom = document.querySelector(".toggle-form");
const recPassForm = document.querySelector(".recovery-password");
function showRecPass(){
  tglFrom.classList.add("click-recovery");
  recPassForm.classList.add("show-recovery-form");
}