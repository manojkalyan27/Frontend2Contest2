const mail = document.querySelector("#mail");
const word = document.querySelector("#password");
const validationMessage = document.querySelector(".validationMessage");
const btn = document.querySelector('button');
const errorMessage = document.querySelector(".error");
const errorEmailMessage = document.querySelector(".emailError");



let isEmail = false;
let isPassword = false;


mail.addEventListener("change",()=>{
let Email = mail.value;
let isChar = false;
if((Email.split('@')[0].length > 3) && (/[a-zA-Z]/.test(Email.split('@')[0]))){
    isChar = true;
}
    if(!(Email.includes("@") && Email.includes(".") && isChar)){
        errorEmailMessage.style.display = 'block';
        isEmail = false;  
    }else{
        errorEmailMessage.style.display ='none';  
        isEmail = true;  
    }
})

word.addEventListener('change', (e)=>{
    if(e.target.value.length < 8){           
        errorMessage.style.display ='block';
        isPassword = false;
    }else if(e.target.value.length >=8){
        errorMessage.style.display ='none'; 
        isPassword = true;
        if(isEmail && isPassword){
            validationMessage.style.display='block';
        }
        
    }
})

btn.addEventListener('click',()=>{
    
    if(isEmail && isPassword){
        // validationMessage.style.display='block';
        
        let result = confirm("Press OK to proceed");
            if (result === true) {
                alert("successful signup!");
            }
    }else{
        if(!(isEmail)){
            errorEmailMessage.style.display = 'block';
        }
        else if(!(isPassword)){
            errorMessage.style.display ='block';
        }
    }
});


