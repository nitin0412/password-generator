const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!","@","#","$","%","&","_","-","."];

let password1=document.querySelector("#pwd1");
let password2=document.querySelector("#pwd2");

function generate(){
    let length=document.getElementById("dropdown");
    password1.textContent=random(length.value);
    password2.textContent=random(length.value);
}

function copy1(){
    var input=password1.textContent;
    alert("Copy Text : " + input);
}
function copy2(){
    var input=password2.textContent;
    alert("Copy Text : "+input);
}

function random(size){
    let password="";
    for(let i=0;i<size;i++){
        let idx=Math.floor(Math.random()*characters.length);
        password+=characters[idx];
    }
    return password;
}

