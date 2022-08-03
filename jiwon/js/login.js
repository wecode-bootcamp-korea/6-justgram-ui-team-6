const email = document.getElementById("emailInput");
const pw = document.getElementById("pwInput");
const loginBtn = document.getElementById("login");

const isActiveLogin = () => {
  const emailValue = email.value;
  const pwValue = pw.value;

  if (emailValue.includes("@") && pwValue.length > 4) {
    // 버튼활성화
    loginBtn.disabled = false;
    loginBtn.style.cursor = "pointer";
  } else {
    // 버튼비활성화
    loginBtn.disabled = true;
    loginBtn.style.cursor = "not-allowed";
  }
};

email.addEventListener("keyup", isActiveLogin);
pw.addEventListener("keyup", isActiveLogin);
