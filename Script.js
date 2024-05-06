document.addEventListener('DOMContentLoaded', () => {

    let showpass = document.getElementById("flexCheckDefault");
    showpass.addEventListener('click',()=>{
        var pass = document.getElementById('floatingPassword');
        if(pass.type === "password"){
            pass.type = "text";
        }
        else{
            pass.type = "password";
        }
    })


    let AccountDetails = JSON.parse(localStorage.getItem('account')) || [];

    let login_submit = document.getElementById('login'); // LOGIN FORM EVENT
    if (login_submit) { 
        login_submit.addEventListener('click', submitlogin);
    }

    let SignUp = document.getElementById('signup');  // SIGNUP FORM EVENT
    if(SignUp){
        SignUp.addEventListener('submit',signupSubmit);
    }


    // ------- SIGN UP LOGIN --------
    function signupSubmit(event) { 
        event.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let Account = { username: email, password: password };
        let exist = false;

        let loginemail = document.getElementById('email').value; // INPUT
        let loginpassword = document.getElementById('password').value; //INPUT

        AccountDetails.forEach(element => { // CHECK EXISTING USER
            if (loginemail === element.username && loginpassword === element.password){
                alert("user already exist");
                exist = true;
            }
        });

        if(exist == false)
        {
            AccountDetails.push(Account);
            console.log(AccountDetails);
            console.log(Account);
    
            localStorage.setItem('account',JSON.stringify(AccountDetails));
        }

    }

    
    AccountDetails.forEach(element => {
        console.log(element);
    });


    // ---------LOGIN LOGIC ---------
    function submitlogin(event){
        event.preventDefault();
        let loginemail = document.getElementById('floatingInput').value;
        let loginpassword = document.getElementById('floatingPassword').value;
        let found = false;
        // AccountDetails.forEach(element => {
        //     console.log(element.username);
        // });
        AccountDetails.forEach(element => {
            if (loginemail === element.username && loginpassword === element.password){
                found = true;
            }
        });

         if (found) {
            alert("Login Scuccess");
            window.location.href="MainPage.html";
        }
        else {
            alert("Email or Password is incorrect");
        }
    }

});