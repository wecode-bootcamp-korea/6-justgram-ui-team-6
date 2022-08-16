// 댓글 달면 추가 되는 로직
const commentInput = document.querySelectorAll(".comment-write-input"); // 댓글 input
const commentBtn = document.querySelectorAll(".comment-write-button"); // 게시 등록 버튼
const commentList = document.querySelectorAll(".comment-box"); //댓글 추가 공간

const image = document.querySelectorAll(".imgs"); // 데이터 이미지 가져오기

const arrNickName = document.querySelectorAll(".nickName"); // 데이터 닉네임 가져오기
const arrContent = document.querySelectorAll(".main-content"); //데이터 내용 가져오기

// json데이터 가져오기(닉네임,내용,이미지)
fetch("../data/comments.json", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    let commentArr = data.comments;
    commentArr.forEach((el, i) => {
      arrContent[i].append(el.content);
      arrNickName[i].append(el.userName);
      image[i].src = el.images;
    });
  });

// 닉네임 데이터
// arrNickName.forEach((name, i) => {
//   fetch("../data/comments.json", {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       name.innerText = data.comments[i].userName;
//     });
// });

// 내용 데이터
// arrContent.forEach((content, i) => {
//   fetch("../data/comments.json", {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       content.innerText = data.comments[i].content;
//     });
// });

// 이미지 데이터
// image.forEach((img, i) => {
//   fetch("../data/comments.json", {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       const images = data["comments"][i].images;
//       img.src = images;
//     });
// });

//댓글생성 구현
const onSubmit = (add, i) => {
  const addComment_list = document.createElement("div");
  const userId = document.createElement("span");
  const likesBtn = document.createElement("button");
  const wrapperComment = document.createElement("div");

  userId.innerText = "zioni_o";
  likesBtn.innerHTML = '<i class="fa-regular fa-heart"></i>'; // 하트아이콘
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
    if (comment.length > 0) {
      onSubmit(comment, i);
    }
  });
});

// Enter키로 댓글 추가 이벤트 구현
commentInput.forEach((ei, i) => {
  ei.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 && commentInput[i].value.length > 0) {
      onSubmit(commentInput[i].value, i);
    }
  });
});

//
