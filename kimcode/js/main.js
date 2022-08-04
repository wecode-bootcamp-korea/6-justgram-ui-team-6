function addCommentBtn(num){
    const cmt_list = document.getElementById('cmt_list'+num);
    var s = document.getElementById('cmt_input'+num).value;

    console.log(s);

    cmt_list.innerHTML = s;
}

function addCommentKey(e, num) {

    const cmt_list = document.getElementById('cmt_list'+num);
    var s = document.getElementById('cmt_input'+num).value;

    if(e.keyCode == 13){
        cmt_list.innerHTML = s;
    }
    
}