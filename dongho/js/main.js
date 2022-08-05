let comment_unstaged = document.getElementsByClassName("input-comments");
let feedCommentsLeft = document.getElementsByClassName("feed-comments-left");
let buttonUpload = document.getElementsByClassName("input-comments-button");
let jsonUserName = document.getElementsByClassName("userName");
let jsonUserImage = document.getElementsByClassName("userImage");
let jsonFeedImage = document.getElementsByClassName("feedImage");
let jsonCountLiked = document.getElementsByClassName("countLiked");
let jsonFeedTime = document.getElementsByClassName("feedTime");

fetch("./data/mock.json", { method: "GET" })
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
        let newDiv = document.createElement("div");
        let newSpan1 = document.createElement("span");
        let newSpan2 = document.createElement("span");
        newSpan1.className = "feed-favor-name";
        newSpan1.style.fontWeight = "bold";
        newSpan1.textContent = element.comments[i].user;

        newSpan2.className = "feed-favor-name";
        newSpan2.textContent = element.comments[i].content;

        newDiv.append(newSpan1);
        newDiv.append(newSpan2);
        feedCommentsLeft[index].append(newDiv);
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
  let div = document.createElement("div");
  let contentTag = document.createElement("span");
  let writerTag = document.createElement("span");
  writerTag.style.fontWeight = "bold";
  writerTag.style.marginRight = "5px";

  contentTag.className = "feed-favor-name";
  writerTag.className = "feed-favor-name";

  contentTag.innerHTML = content;
  writerTag.innerHTML = writer;

  div.append(writerTag, contentTag);
  feedCommentsLeft[index].appendChild(div);
}
