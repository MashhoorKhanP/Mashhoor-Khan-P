

const form=document.getElementById('submit-form');
const username=document.getElementById('name-input');
const emailId=document.getElementById('email-input');
const messagesInbox=document.getElementById('message-input');



form.addEventListener('submit',e =>{

    e.preventDefault();
    validateInput();
});
  
const setError= (element , message)=>{

    const inputControl =element.parentElement;
    // const errorDisplay = inputControl.querySelector('.error');
    // errorDisplay.innerText=message;
    
    element.placeholder = message;
    username.style.border="1px solid red";
    emailId.style.border="1px solid red";
    messagesInbox.style.border="1px solid red";
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    
}

const setSuccess=element=>{

    const inputControl=element.parentElement;
    // const errorDisplay= inputControl.querySelector('.error');
    // errorDisplay.innerText='';
    element.placeholder = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidName=username=>{

    const rename=/^[a-zA-Z]/;
    return rename.test(String(username));
}

const isValidEmail=emailId=>{

    const re=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return re.test(String(emailId).toLowerCase());
}

const validateInput = ()=>{

    const usernameValue=username.value.trim();
    const emailIdValue=emailId.value.trim();
    const messagesInboxValue=messagesInbox.value.trim();


    if(usernameValue===''){

        setError(username,'Username is required');
    }else if(! isValidName(usernameValue)){
        //setError(username);
        document.getElementById('message-error').innerHTML='Name should be alphabets';
        

    }else{

        setSuccess(username);
    }

    if(emailIdValue===''){

        setError(emailId,'Email is required');
    }else if(! isValidEmail(emailIdValue)){
        alert('Provide a valid Email address')
        setError(emailId,'Provide a valid email address');
    }else {

        setSuccess(emailId);
    }
    

    if(messagesInboxValue===''){

        setError(messagesInbox,'Message is mandatory');
    }else if(messagesInboxValue.split(' ').length<10){

        document.getElementById('message-error').innerHTML='Messages should be atleast 10 words';
        // setError(messagesInbox,'Messages should be atleast 10 words')
    }else{

        setSuccess(messagesInbox);
    }

    //FOR SUBMISSION:

    const inputs = [username, emailId, messagesInbox];
  if (inputs.every(input => input.parentElement.classList.contains('success'))) {
    form.submit();
    alert('Form Submitted Successfully');
   
        
  }

}


