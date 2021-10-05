class FormValidation{
    formValues ={
        username : "",
        email : "",
        phonenumber: "",
        password: "",
        confirmpassword: ""
    }
    errorValues ={
        usernameErr : "",
        emailErr: "",
        phonenumberErr: "",
        passwordErr: "",
        confirmpasswordErr: ""
    }

    showErrorMsg(index,msg){
        const form_group = document.getElementsByClassName("form-group")[index];
        form_group.classList.add("error");
        document.getElementsByTagName("span")[index].innerText = msg;
        
    }
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName("form-group")[index];
        form_group.classList.remove("error");
        form_group.classList.add("success");
        document.getElementsByTagName("span")[index].innerText = "";
    }

    getInputs(){
    this.formValues.username = document.getElementById('user-name').value.trim();
    this.formValues.email = document.getElementById("user-email").value.trim();
    this.formValues.phonenumber = document.getElementById("user-phone-number").value.trim();
    this.formValues.password = document.getElementById("user-password").value.trim();
    this.formValues.confirmpassword = document.getElementById("user-confirm-password").value.trim();
    }

    validateUsername(){
    if(this.formValues.username === ""){
        this.errorValues.usernameErr = "* Please Enter Your Name";
        this.showErrorMsg(0,this.errorValues.usernameErr);
    }
     else if (this.formValues.username.length <= 4){
         this.errorValues.usernameErr = "* Username must be atleast 5 Characters";
         this.showErrorMsg(0,this.errorValues.usernameErr);
     }
     else if (this.formValues.username.length > 14){
         this.errorValues.usernameErr = "* Username should not exceeds 14 Characters";
         this.showErrorMsg(0,this.errorValues.usernameErr);
     }
    else{
        this.errorValues.usernameErr = "";
        this.showSuccessMsg(0);
    }
    }

    validateEmail(){
    const emailFormat = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/ ;
    if(this.formValues.email === ""){
        this.errorValues.emailErr = "* Please Enter Valid Email";
        this.showErrorMsg(1,this.errorValues.emailErr);
    }
    
    else if(!(emailFormat.test(this.formValues.email))){
        this.errorValues.emailErr = "* Invalide email";
        this.showErrorMsg(1,this.errorValues.emailErr);
        
    }

    else{
        this.showSuccessMsg(1);
    }
    }
    validatePhonenumber(){
     const phoneNo = /^\d{10}$/ ;
     if(this.formValues.phonenumber === ""){
         this.errorValues.phonenumberErr = "* Please Enter Your Phone Number";
         this.showErrorMsg(2,this.errorValues.phonenumberErr);
     }
     else if(phoneNo.test(this.formValues.phonenumber)){
         this.showSuccessMsg(2);
     }
     else{
        this.errorValues.phonenumberErr = "* Invalid Phone Number";
        this.showErrorMsg(2,this.errorValues.phonenumberErr);
     }
    }
    validatePassword(){
        if(this.formValues.password === ""){
            this.errorValues.passwordErr ="* Please Provide a Password";
            this.showErrorMsg(3,this.errorValues.passwordErr);

        }
        else if(this.formValues.password.length <= 4){
            this.errorValues.passwordErr = "* Password must be atleast 5 charecters";
            this.showErrorMsg(3,this.errorValues.passwordErr)
        }
        else if(this.formValues.password.length > 10){
            this.errorValues.passwordErr = "* Password should not exceeds 10 Characters";
            this.showErrorMsg(3,this.errorValues.passwordErr);
        }
        else{
            this.showSuccessMsg(3);
        }
    }
    validateConfirmPassword(){
       if(this.formValues.confirmpassword === ""){
           this.errorValues.confirmpasswordErr = "* Invalid Confirm Password";
           this.showErrorMsg(4,this.errorValues.confirmpasswordErr);
       }
       else if(this.formValues.confirmpassword === this.formValues.password && this.errorValues.passwordErr === ""){
           this.showSuccessMsg(4);
       }
       else if(this.errorValues.passwordErr){
           this.errorValues.confirmpasswordErr = "* An error occured in password field";
           this.showErrorMsg(4,this.errorValues.confirmpasswordErr);
       }
       else{
           this.errorValues.confirmpasswordErr = "* Password Must Match";
           this.showErrorMsg(4,this.errorValues.confirmpasswordErr);
       }
    }
    // alertMessage(){
    //     const {usernameErr,emailErr,phonenumberErr,passworderr,confirmpasswordErr} = this.errorValues
    //      if(usernameErr === "" && emailErr === "" && phonenumberErr === "" && passworderr === "" && confirmpasswordErr === ""){
    //          swal("Registration Successful", "Thankyou, " + this.formValues.username, "success")
    //          console.log(this.formValues);
    //      }
    //      else{
    //          swal("Give Valid Inputs", "Click ok to Continue", "error")
    //      }
    // }
    // removeInputs(){
    //     const form_groups = document.getElementsByClassName("form-group");
    //     // console.log(form_groups);
    //     Array.from(form_groups).forEach
    //     (element=>{
    //         element.getElementsByTagName
    //         ('input')[0].value = ""
    //         element.getElementsByTagName("span")[0] = ""
    //         element.classList.remove("sucessess");
    //     })
    // }

}

const ValidateUserInputs = new FormValidation();
document.getElementById("form-submit-btn").addEventListener('click',() =>{
   ValidateUserInputs.getInputs();
   ValidateUserInputs.validateUsername();
   ValidateUserInputs.validateEmail();
   ValidateUserInputs.validatePhonenumber();
   ValidateUserInputs.validatePassword();
   ValidateUserInputs.validateConfirmPassword();
  
})
