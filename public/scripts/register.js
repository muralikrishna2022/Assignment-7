import { fetchData,setCurrentUser } from './main.js';

class User {
    constructor(Username,password,){ 
    this.Username = Username; 
    this.password = password; 
    
}

getuserName (){
    return this.Username;
}

getpassword(){
    return this.password;
}

}

let registerForm = document.getElementById("register_page");
if(registerForm) registerForm.addEventListener('submit',register);

function register(e) {
  e.preventDefault();

  let Username = document.getElementById("user_name").value;
  let password = document.getElementById("password").value;
  let user = new User(Username, password);

  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "login_page.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}

let sign_inForm = document.getElementById("login_page");
if(sign_inForm) sign_inForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let Username = ((document.getElementById("user_name")||{}).value)||"";
  let password = ((document.getElementById("password")||{}).value)||"";
  let user = new User(Username, password);
  
  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "Notes.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
