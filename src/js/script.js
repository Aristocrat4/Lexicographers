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
const newTermInput = document.getElementById('new-term');
const btnAddNewTerm = document.getElementById('addNewTerm');
if (newTermInput) {
    newTermInput.addEventListener('input', (event) => {
        if (newTermInput.value) {
            btnAddNewTerm.disabled = false;
        } else {
            btnAddNewTerm.disabled = true;
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
if (signUpBtn){
  signUpBtn.addEventListener("click", () => {
    console.log(signUpBtn);
    signUpBtn.style.background = "transparent";
    signInBtn.style.background = "#798996";
    signUpBtn.style.color = "#798996";
    signInBtn.style.color = "#FFF";
    signInForm.style.display = "none";
    signUpForm.style.display = "flex";
  });
}
if (signInBtn) {
  signInBtn.addEventListener("click", () => {
    console.log(signUpBtn);
    signInBtn.style.background = "transparent";
    signUpBtn.style.background = "#798996";
    signInBtn.style.color = "#798996";
    signUpBtn.style.color = "#FFF";
    signUpForm.style.display = "none";
    signInForm.style.display = "flex";
  });
}

// -------- end of toggle login and signup forms -------


// -------- change autorisation form to registration form --------
function changeAutoToRegistr(){
  signUpBtn.style.background = "transparent";
  signInBtn.style.background = "#798996";
  signUpBtn.style.color = "#798996";
  signInBtn.style.color = "#FFF";
  signInForm.style.display = "none";
  signUpForm.style.display = "flex";
}
// -------- end of function --------

