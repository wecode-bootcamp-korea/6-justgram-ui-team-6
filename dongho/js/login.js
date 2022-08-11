let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("login");
let loginForm = document.getElementById("loginform");

const regexId = /@/;
const regexPw = /^.{5,}$/;

email.addEventListener("input", fill);
password.addEventListener("input", fill);

function fill(id, pw) {
  if (email.value.length > 1 && password.value.length > 1) {
    login.disabled = false;
  } else {
    login.disabled = true;
  }
}

function valid(id, pw) {
  if (!regexId.test(id.value) || !regexPw.test(pw.value)) {
    alert("아이디나 비밀번호 형식이 맞지않습니다.");
    return false;
  }
}

fetch("http://localhost:8000/feeds")
  .then((res) => res.json())
  .then((feedData) => {
    console.log(feedData);
  });
