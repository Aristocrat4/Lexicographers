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
// Email validation
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
// --------- Registration Validation ------------
const registrationBtn = document.querySelector(".submit-registration");
if (registrationBtn) {
  registrationBtn.setAttribute('onclick', "location.href='success.html'");
  registrationBtn.addEventListener("click", () => {
    const emailRegInput = document.querySelector(".email-reg");
    const nameRegInput = document.querySelector(".name-reg");
    const phoneRegInput = document.querySelector(".phone-reg");
    const pswRegInput = document.querySelector(".psw-reg");
    const pswRepeatRegInput = document.querySelector(".psw-repeat-reg");
    const emailErrorP = document.querySelector("#email-error-text");
    
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
      item.nextSibling.nextSibling.children[0].children[1].innerText = "ველი სავალდებულოა";
      item.classList.add("errorBorder");
      item.nextSibling.nextSibling.classList.remove("hidden");
    });
    FilledRegInputs.forEach((item) => {
      item.classList.remove("errorBorder");
      item.nextSibling.nextSibling.classList.add("hidden");
      

      if (emailRegInput.value && !validateEmail(emailRegInput.value)) {
        emailErrorP.innerText = "ელ.ფოსტა არ არის ვალიდური";
        item.classList.add("errorBorder");
        item.nextSibling.nextSibling.classList.remove("hidden");
        registrationBtn.removeAttribute('onclick');
      }
      if (phoneRegInput.value && phoneRegInput.value.length != 9) {
        phoneRegInput.nextSibling.nextSibling.children[0].children[1].innerText = "ნომერი არ არის ვალიდური";
        phoneRegInput.classList.add("errorBorder");
        phoneRegInput.nextSibling.nextSibling.classList.remove("hidden");
        registrationBtn.removeAttribute('onclick');
      } 
      if (pswRegInput.value && pswRegInput.value.length < 8) {
        pswRegInput.nextSibling.nextSibling.children[0].children[1].innerText = "შეიყვანეთ მინიმუმ 8 სიმბოლო";
        pswRegInput.classList.add("errorBorder");
        pswRegInput.nextSibling.nextSibling.classList.remove("hidden");
        registrationBtn.removeAttribute('onclick');
      } 
      if (pswRepeatRegInput.value && pswRegInput.value !== pswRepeatRegInput.value) {
        pswRepeatRegInput.nextSibling.nextSibling.children[0].children[1].innerText = "პაროლები არ ემთხვევა";
        pswRepeatRegInput.classList.add("errorBorder");
        pswRepeatRegInput.nextSibling.nextSibling.classList.remove("hidden");
        registrationBtn.removeAttribute('onclick');
      } 
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
    if (recoverPass.value && recoverPass.value.length < 8) {
      recoverPass.nextSibling.nextSibling.children[0].children[1].innerText = "შეიყვანეთ მინიმუმ 8 სიმბოლო";
      recoverPass.classList.add("errorBorder");
      recoverPass.nextSibling.nextSibling.classList.remove("hidden");
    } 
    if (recoveryPassRpt.value && recoverPass.value !== recoveryPassRpt.value) {
      recoveryPassRpt.nextSibling.nextSibling.children[0].children[1].innerText = "პაროლები არ ემთხვევა";
      recoveryPassRpt.classList.add("errorBorder");
      recoveryPassRpt.nextSibling.nextSibling.classList.remove("hidden");
    }
  });
}
// click text "პაროლის აღდგენა"
const tglFrom = document.querySelector(".toggle-form");
const recPassForm = document.querySelector(".recovery-password");
function showRecPass() {
  tglFrom.classList.add("click-recovery");
  recPassForm.classList.add("show-recovery-form");
}

// Dropdown menu
const profile = document.getElementById("profile");
const profileMenu = document.getElementById("profile-menu");
if (profile) {
  profile.addEventListener("click", () => {
    profileMenu.classList.toggle("hidden");
  });
}

// Profile menu
const profileMenuItems = document.querySelector("ul.nav-ul").querySelectorAll('.profile-edit');
const definitionUl = document.querySelector(".sub-ul-definition");
const termUl = document.querySelector(".sub-ul-termin");
function closeDefinitionUL() {
  if (!definitionUl.classList.contains('hidden')) {
    definitionUl.classList.toggle('hidden');
  }
}
function closeTermUL() {
  if (!termUl.classList.contains('hidden')) {
    termUl.classList.toggle('hidden');
  }
}


profileMenuItems.forEach((item, index) => {
  itemSpan = item.children[0];
  itemSpan.addEventListener('click', () => {
    const profileActiveItem = document.querySelector(".profile-active-nav");
    const rightInnerActive = document.querySelector(".right-inner").querySelector('.active');
    
    profileActiveItem.classList.remove('profile-active-nav');
    
    item.children[0].classList.add('profile-active-nav');
    if (index === 1 || index === 2) {
      item.children[1].classList.remove('hidden');
      
    }
    if (index === 0) {
      closeDefinitionUL();
      closeTermUL();
      const myTerms = document.querySelector(".right-inner").querySelector(".profile-edit");
      rightInnerActive.classList.toggle('active');
      rightInnerActive.classList.toggle('hidden');
      
      myTerms.classList.toggle('active');
      myTerms.classList.toggle('hidden');
    }
    if (index === 1) {
      closeTermUL();
      rightInnerActive.classList.remove('active');
      rightInnerActive.classList.toggle('hidden');
      const myTerms = document.querySelector(".profile-termins-result");
      myTerms.classList.toggle('hidden');
      myTerms.classList.toggle('active');
    }
    if (index === 2) {
      closeDefinitionUL();
    }
  })
})