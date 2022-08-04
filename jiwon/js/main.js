// 댓글 달면 추가 되는 로직
const commentInput = document.getElementById("comment"); // 댓글 input
const commentBtn = document.getElementById("submit"); // 게시 등록 버튼

//댓글생성 구현
const onSubmit = (add) => {
  const addComment = document.getElementById("comments");
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
  addComment.append(addComment_list);

  commentInput.value = "";
};

// Enter키로 댓글 추가 이벤트 구현
commentInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13 && commentInput.value.length > 2) {
    onSubmit(commentInput.value);
  }
});

// 게시버튼 눌렀을때 댓글 추가 구현
commentBtn.addEventListener("click", () => {
  let comment = commentInput.value;
  if (comment.length > 2) {
    onSubmit(comment);
  }
});
