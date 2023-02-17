const age = document.getElementById("age");
const email = document.getElementById("email");
const favoriteWine = document.getElementById("favorite-wine");
const userName = document.getElementById("user-name");
const results = document.getElementById("results");
const resetButton = document.getElementById("reset-button");
const submitButton = document.getElementById("submit-button");

const inputElements = [age, email, favoriteWine, userName];

submitButton.addEventListener("click", () => {
  if (userName.value && age.value && email.value && favoriteWine.value) {
    results.innerHTML = `
    <p>
      You're name is ${userName.value}.
      Your age is ${age.value}.
      Your email is ${email.value}.
      Your favorite wine is ${favoriteWine.value}.
    </p>
    `;
  } else {
    results.innerHTML = `
  <p>You need to bla bla</p>
  `;
  }

  inputElements.forEach((element) => {
    if (!element.value) {
      element.classList.add("input-error");
      element.addEventListener("change", () => {
        element.classList.remove("input-error");
      });
    }
  });
});

resetButton.addEventListener("click", () => {
  inputElements.forEach((element) => {
    element.value = "";
  });
});

// if (!userName.value) {
//   userName.classList.add("input-error");
// }
// if (!age.value) {
//   age.classList.add("input-error");
// }
// if (!email.value) {
//   email.classList.add("input-error");
// }
// if (!favoriteWine.value) {
//   favoriteWine.classList.add("input-error");
// }

// userName.addEventListener("change", () => {
//   userName.classList.remove("input-error");
// });

// age.addEventListener("change", () => {
//   age.classList.remove("input-error");
// });

// email.addEventListener("change", () => {
//   email.classList.remove("input-error");
// });

// favoriteWine.addEventListener("change", () => {
//   favoriteWine.classList.remove("input-error");
// });
