// 댓글 달면 추가 되는 로직
const commentInput = document.querySelectorAll(".comment-write-input"); // 댓글 input
const commentBtn = document.querySelectorAll(".comment-write-button"); // 게시 등록 버튼
const commentList = document.querySelectorAll(".comment-idd"); //댓글 추가 공간

//댓글생성 구현
const onSubmit = (add, i) => {
  const addComment_list = document.createElement("div");
  const userId = document.createElement("span");
  const likesBtn = document.createElement("button");
  const wrapperComment = document.createElement("div");

  userId.innerText = "zioni_o";

  likesBtn.innerHTML = '<i class="fa-solid fa-heart"></i>'; // 하트아이콘
  likesBtn.classList.add("heart");
  wrapperComment.classList.add("comments-list");
  addComment_list.classList.add("wrapperComments");

  wrapperComment.append(userId);
  wrapperComment.append(add);
  addComment_list.append(wrapperComment);
  addComment_list.append(likesBtn);
  commentList[i].append(addComment_list);

  commentInput[i].value = "";
};

// 게시버튼 눌렀을때 댓글 추가 구현
commentBtn.forEach((ei, i) => {
  ei.addEventListener("click", () => {
    let comment = commentInput[i].value;
    if (comment.length > 2) {
      onSubmit(comment, i);
    }
  });
});

// Enter키로 댓글 추가 이벤트 구현
commentInput.forEach((ei, i) => {
  ei.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 && commentInput[i].value.length > 2) {
      onSubmit(commentInput[i].value, i);
      console.log(i);
    }
  });
});
