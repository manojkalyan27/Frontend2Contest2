const mail = document.querySelector("#mail");
const word = document.querySelector("#password");
const passwordSection = document.querySelector('#passwordSection')
const validationMessage = document.querySelector(".validationMessage");
const btn = document.querySelector('button');

let isEmail = false;
let isPassword = false;


mail.addEventListener("change",()=>{
const errorEmailMessage = document.querySelector(".emailError");
let Email = mail.value;
let isChar = false;
if((Email.split('@')[0].length > 3) && (/[a-zA-Z]/.test(Email.split('@')[0]))){
    isChar = true;
}
    if(!(Email.includes("@") && Email.includes(".") && isChar)){
        errorEmailMessage.style.display = 'block';
    }else{
        errorEmailMessage.style.display ='none';  
        isEmail = true;  
    }
})

word.addEventListener('change', (e)=>{
const errorMessage = document.querySelector(".error");
    if(e.target.value.length < 8){           
        errorMessage.style.display ='block';
    }else if(e.target.value.length >=8){
        errorMessage.style.display ='none'; 
        isPassword = true;
        if(isEmail && isPassword){
            validationMessage.style.display='block';
        }
        
    }
})

btn.addEventListener('click',()=>{
    let result = confirm("Press OK to proceed");
            if (result === true) {
                alert("successful signup!");
            }
});


