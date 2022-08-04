const inputIdByID = document.getElementById("login_input");
const inputPWByID = document.getElementById("login_password");
const loginBTNByID = document.getElementsByClassName("login_button")[0];

function onInput(event) {
  const id = inputIdByID.value;
  const pw = inputPWByID.value;

  if (id.length > 3 && pw.length > 3) {
    //버튼을 활성화하는 로직
    loginBTNByID.style.backgroundColor = "#0095f7";
  } else {
    loginBTNByID.style.backgroundColor = "#d9edfa";
    //버튼을 비활성화하는 로직
  }
}

inputIdByID.addEventListener("input", onInput);
inputPWByID.addEventListener("input", onInput);
