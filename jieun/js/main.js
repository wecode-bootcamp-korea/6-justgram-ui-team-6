const inputBtn = document.getElementsByClassName("btn");
const newCmt = document.getElementsByClassName("new-content");

// 댓글 입력창 범위 전체, Enter event에 필요
const addCmtSpace = document.getElementsByClassName("add-comment");

// 피드에 댓글이 등록되는 div 태그
const commentList = document.getElementsByClassName("comment-list");

// '게시'버튼을 눌러 comment 등록할 때
Array.from(inputBtn).forEach((addBtn, index) => {
  addBtn.addEventListener("click", () => {
    let addComment = newCmt[index].value;

    if (addComment !== "") {
      //댓글 input이 빈 공간 아닐 때
      const divElement = document.createElement("div");
      const spanElement = document.createElement("span");

      divElement.className = "feed-margin-top";
      spanElement.className = "feed-font-style";

      spanElement.textContent = addComment;

      divElement.append(spanElement);
      commentList[index].appendChild(divElement);
    }
  });
});

// Enter로 comment 등록할 때
Array.from(addCmtSpace).forEach((putEnter, index) => {
  putEnter.addEventListener("keyup", (e) => {
    let addComment = newCmt[index].value;

    if (addComment !== "") {
      //댓글 input이 빈 공간 아닐 때
      if (e.keyCode === 13) {
        const divElement = document.createElement("div");
        const spanElement = document.createElement("span");

        divElement.className = "feed-margin-top";
        spanElement.className = "feed-font-style";

        spanElement.textContent = addComment;

        divElement.append(spanElement);
        commentList[index].appendChild(divElement);
      }
    }
  });
});
