const age = document.getElementById("age");
const email = document.getElementById("email");
const favoriteWine = document.getElementById("favorite-wine");
const userName = document.getElementById("user-name");
const results = document.getElementById("results");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  if (userName.value && age.value && email.value && favoriteWine.value) {
    results.innerHTML = `
    <p>You're name is ${userName.value}. Your age is ${age.value}. Your email is ${email.value}. Your favorite wine is ${favoriteWine.value}.</p>
    `;
  } else {
    results.innerHTML = `
  <p>You need to bla bla</p>
  `;
  }
});
