function validateform(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    if(name == null || name==""){
        alert("name cannot be blank")
    }
    else if (password.length<5){
        alert("password much be 5 character long")
    }
}