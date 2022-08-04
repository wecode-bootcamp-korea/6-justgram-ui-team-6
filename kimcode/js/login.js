function checkInputId() {

    const target = document.getElementById('login_btn');
    var s = document.getElementById('id_input').value;
    
    if(s.length > 0){
        target.disabled = false;
        
    } else {
        target.disabled = false;
    }
    

}