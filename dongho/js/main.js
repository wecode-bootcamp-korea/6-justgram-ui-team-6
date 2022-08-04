let comment_unstaged = document.getElementsByClassName("input-comments");
let feedCommentsLeft = document.getElementsByClassName("feed-comments-left");
let buttonUpload = document.getElementsByClassName("feed-comments-plus-name");

Array.from(buttonUpload).forEach((element, index) => {
  element.addEventListener("click", function () {
    let comment = comment_unstaged[index].value;
    let writer = "lee";

    if (comment !== "") {
      upload(comment, writer, index);
      comment_unstaged[index].value = "";
    }
  });
});

Array.from(comment_unstaged).forEach((element, index) => {
  element.addEventListener("keyup", function (event) {
    let comment = element.value;
    let writer = "lee";
    buttonUpload[index].style.color = "blue";
    if (event.keyCode === 13 && comment !== "") {
      upload(comment, writer, index);
      comment_unstaged[index].value = "";
    } else if (comment === "") {
      buttonUpload[index].style.color = "rgb(187, 187, 216)";
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
