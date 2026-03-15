let password=document.getElementById("password");

password.addEventListener("input",function(){

let pass=password.value;

let strength=0;

if(pass.length>=8){
strength++;
document.getElementById("length").style.color="lightgreen";
}

if(/[A-Z]/.test(pass)){
strength++;
document.getElementById("upper").style.color="lightgreen";
}

if(/[0-9]/.test(pass)){
strength++;
document.getElementById("number").style.color="lightgreen";
}

if(/[@#$%^&*!]/.test(pass)){
strength++;
document.getElementById("special").style.color="lightgreen";
}

let bar=document.getElementById("strength");

let text=document.getElementById("strengthText");

let crack=document.getElementById("crackTime");

if(strength<=1){

bar.style.width="25%";
bar.style.background="red";

text.innerHTML="Weak Password";

crack.innerHTML="Estimated Crack Time: seconds";

}

else if(strength==2){

bar.style.width="50%";
bar.style.background="orange";

text.innerHTML="Medium Password";

crack.innerHTML="Estimated Crack Time: minutes";

}

else if(strength==3){

bar.style.width="75%";
bar.style.background="yellow";

text.innerHTML="Strong Password";

crack.innerHTML="Estimated Crack Time: hours";

}

else{

bar.style.width="100%";
bar.style.background="lightgreen";

text.innerHTML="Very Strong Password";

crack.innerHTML="Estimated Crack Time: centuries";

}

});

function togglePassword(){

let input=document.getElementById("password");

let eye=document.getElementById("eye");

if(input.type==="password"){

input.type="text";

eye.classList="fa-solid fa-eye-slash";

}

else{

input.type="password";

eye.classList="fa-solid fa-eye";

}

}