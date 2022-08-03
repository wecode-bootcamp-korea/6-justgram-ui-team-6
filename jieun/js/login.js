const inputBoxs = document.getElementsByClassName("inputBoxs");
const logInBtn = document.getElementsByClassName("loginBtn")[0];

inputBoxs[0].addEventListener("keyup", btnEnabled);
inputBoxs[1].addEventListener("keyup", btnEnabled);

function btnEnabled() {
  if (inputBoxs[0].value !== "" && inputBoxs[1].value !== "") {
    logInBtn.disabled = false;
    logInBtn.style.backgroundColor = "rgb(83, 143, 223)";
  } else {
    logInBtn.disabled = true;
    logInBtn.style.backgroundColor = "rgba(83, 143, 223, 0.3)";
  }
}
