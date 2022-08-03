let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("login");

email.addEventListener("input", fill);
password.addEventListener("input", fill);

function fill() {
  if (email.value.length > 1 && password.value.length > 1) {
    login.disabled = false;
  } else {
    login.disabled = true;
  }
}
