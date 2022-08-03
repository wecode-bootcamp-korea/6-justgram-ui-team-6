let idin = document.querySelector("#userId");
let pwin = document.querySelector("#userPw");
let btn = document.querySelector("#btnLogin");
/*
function pushValue() {
  pwin.addEventListener("keyup", () => {
    if (idin.value && pwin.value) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });
}

pushValue();
*/
idin.addEventListener("keyup", actEvent);
pwin.addEventListener("keyup", actEvent);

function actEvent() {
  switch (!(idin && pwin)) {
    case true:
      btn.disabled = true;
      break;
    case false:
      btn.disabled = false;
      break;
  }
}
