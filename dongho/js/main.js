let mainSearch = document.getElementById("search");

let comment_unstaged = document.getElementsByClassName("input-comments");
let feedCommentsLeft = document.getElementsByClassName("feed-comments-left");
let buttonUpload = document.getElementsByClassName("input-comments-button");
let jsonUserName = document.getElementsByClassName("userName");
let jsonUserImage = document.getElementsByClassName("userImage");
let jsonFeedImage = document.getElementsByClassName("feedImage");
let jsonCountLiked = document.getElementsByClassName("countLiked");
let jsonFeedTime = document.getElementsByClassName("feedTime");
let addWrapper = document.getElementsByClassName("add-wrapper");
let add = document.getElementsByClassName("add");
let user = document.getElementsByClassName("user");
let drop = document.getElementById("drop");
let userInterface = document.getElementsByClassName("user-interface");
let userInterfaceWrapper = document.getElementsByClassName("user-interface-wrapper");

fetch("http://localhost:8000/feeds", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    let jsonFeeds = data.feeds;
    jsonFeeds.forEach((element, index) => {
      jsonUserName[index].textContent = element.userName;
      jsonUserImage[index].src = element.userImage;
      jsonFeedImage[index].src = element.feedImage;
      jsonCountLiked[index].textContent = element.countLiked;
      jsonFeedTime[index].textContent = element.feedTime;

      for (let i = 0; i < 2; i++) {
        let newDiv1 = document.createElement("div");
        let newDiv2 = document.createElement("div");
        let newDiv3 = document.createElement("div");
        let newSpan1 = document.createElement("span");
        let newSpan2 = document.createElement("span");
        let aDelete = document.createElement("a");

        newDiv1.className = "heart";
        newSpan1.className = "feed-favor-name";
        newSpan1.style.fontWeight = "bold";
        newSpan1.textContent = element.comments[i].user;

        newSpan2.className = "feed-favor-name";
        newSpan2.textContent = element.comments[i].content;

        newDiv3.className = "feed-comments-right-wrapper flex-center";
        let img = document.createElement("img");
        img.className = "feed-favor-image check";
        img.src = "./images/notfill.png";

        aDelete.textContent = "댓글삭제";
        aDelete.className = "cursor";

        newDiv3.append(aDelete, img);
        newDiv2.append(newSpan1, newSpan2);
        newDiv1.append(newDiv2, newDiv3);

        feedCommentsLeft[index].append(newDiv1);

        check(img);
        commentDelete(aDelete);
      }
    });
  });

fetch("http://localhost:8000/profiles", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    let users = data.users;
    mainSearch.addEventListener("keyup", function () {
      deleteSearch();
      let serachValue = mainSearch.value;
      for (let i = 0; i < users.length; i++) {
        if (users[i].id.includes(serachValue) && serachValue !== "") {
          let div1 = document.createElement("div");
          div1.className = "user";
          div1.textContent = users[i].id + " - " + users[i].userName;
          addWrapper[0].append(div1);
          continue;
        }
        if (users[i].userName.includes(serachValue) && serachValue !== "") {
          //내부작업
          let div2 = document.createElement("div");
          div2.className = "user";
          div2.textContent = users[i].id + " - " + users[i].userName;
          addWrapper[0].append(div2);
        }
      }
      if (user.length !== 0) {
        addWrapper[0].style.display = "block";
        add[0].style.display = "block";
      } else {
        addWrapper[0].style.display = "none";
        add[0].style.display = "none";
      }
    });
  });

Array.from(buttonUpload).forEach((element, index) => {
  element.addEventListener("click", function () {
    let comment = comment_unstaged[index].value;
    let writer = "lee";

    if (comment !== "") {
      upload(comment, writer, index);
      comment_unstaged[index].value = "";
    }

    buttonUpload[index].style.color = "rgb(187, 187, 216)";
    buttonUpload[index].style.cursor = "default";
  });
});

Array.from(comment_unstaged).forEach((element, index) => {
  element.addEventListener("keyup", function (event) {
    let comment = element.value;
    let writer = "lee";
    buttonUpload[index].style.color = "blue";
    buttonUpload[index].style.cursor = "pointer";
    if (event.keyCode === 13 && comment !== "") {
      upload(comment, writer, index);
      comment_unstaged[index].value = "";
      buttonUpload[index].style.color = "rgb(187, 187, 216)";
      buttonUpload[index].style.cursor = "default";
    } else if (comment === "") {
      buttonUpload[index].style.color = "rgb(187, 187, 216)";
      buttonUpload[index].style.cursor = "default";
    }
  });
});

function upload(content, writer, index) {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let contentTag = document.createElement("span");
  let writerTag = document.createElement("span");
  let img = document.createElement("img");
  let aDelete = document.createElement("a");

  div1.className = "heart";
  div3.className = "feed-comments-right-wrapper flex-center";

  writerTag.style.fontWeight = "bold";
  writerTag.style.marginRight = "5px";

  contentTag.className = "feed-favor-name";
  writerTag.className = "feed-favor-name";

  contentTag.innerHTML = content;
  writerTag.innerHTML = writer;

  img.className = "feed-favor-image check";
  img.src = "./images/notfill.png";

  aDelete.textContent = "댓글삭제";
  aDelete.className = "cursor";

  div3.append(aDelete, img);
  div2.append(writerTag, contentTag);
  div1.append(div2, div3);

  feedCommentsLeft[index].appendChild(div1);
  check(img);
  commentDelete(aDelete);
}

function check(img) {
  img.addEventListener("click", function () {
    if (img.src === "http://127.0.0.1:5500/dongho/images/notfill.png") {
      img.src = "http://127.0.0.1:5500/dongho/images/fill.png";
    } else if (img.src === "http://127.0.0.1:5500/dongho/images/fill.png") {
      img.src = "http://127.0.0.1:5500/dongho/images/notfill.png";
    }
  });
}

function commentDelete(aDelete) {
  aDelete.addEventListener("click", function () {
    aDelete.parentNode.parentNode.remove();
  });
}

function deleteSearch() {
  while (addWrapper[0].firstChild) {
    addWrapper[0].removeChild(addWrapper[0].firstChild);
  }
}

function dropDown() {
  if (userInterface[0].style.display === "none" || userInterface[0].style.display === "") {
    console.log("test");
    userInterface[0].style.display = "block";
    userInterfaceWrapper[0].style.display = "block";
  } else {
    console.log("test");
    userInterface[0].style.display = "none";
    userInterfaceWrapper[0].style.display = "none";
  }
}
