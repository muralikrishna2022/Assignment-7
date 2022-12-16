import { fetchData,setCurrentUser } from "./main";

class User {
    constructor(first_name,last_name,userName,password,){
    this.first_name = first_name;  
    this.last_name = last_name; 
    this.user_name = userName; 
    this.password = password; 
    
}
getFirstName() {
    return this.first_name;
}

getlast_Name (){
    return this.last_name;
}

getuser_name (){
    return this.user_name;
}

getpassword(){
    return this.password;
}

}




const User_name = document.getElementById("comReg");
if(User_name) User_name.addEventListener("submit", User_Object);


function User_Object(e){
    e.preventDefault();
    let Firstname = ((document.getElementById("first_name")||{}).value)||"";
    let Lastname = ((document.getElementById("last_name")||{}).value)||"";
    let userName = ((document.getElementById("user_name")||{}).value)||"";
    let Password = ((document.getElementById("password")||{}).value)||"";
    
    const newUser = new User(Firstname,Lastname,userName,Password);
   
    fetchData("/user/register", newUser, "POST")
    .then((data) => {
      console.log(data)
      setCurrentUser(data);
      window.location.href = "Notes.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })

}





let signinForm = document.getElementById("login");
if(signinForm) signinForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let userName = ((document.getElementById("user_name")||{}).value)||"";
  let Password = ((document.getElementById("password")||{}).value)||"";
  let user = new User(null,null,userName, Password);
  console.log(user);
  fetchData("/user/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}import { fetchData,setCurrentUser } from "./main";

class User {
    constructor(first_name,last_name,userName,password,){
    this.first_name = first_name;  
    this.last_name = last_name; 
    this.user_name = userName; 
    this.password = password; 
    
}
getFirstName() {
    return this.first_name;
}

getlast_Name (){
    return this.last_name;
}

getuser_name (){
    return this.user_name;
}

getpassword(){
    return this.password;
}

}




const User_name = document.getElementById("comReg");
if(User_name) User_name.addEventListener("submit", User_Object);


function User_Object(e){
    e.preventDefault();
    let Firstname = ((document.getElementById("first_name")||{}).value)||"";
    let Lastname = ((document.getElementById("last_name")||{}).value)||"";
    let userName = ((document.getElementById("user_name")||{}).value)||"";
    let Password = ((document.getElementById("password")||{}).value)||"";
    
    const newUser = new User(Firstname,Lastname,userName,Password);
   
    fetchData("/user/register", newUser, "POST")
    .then((data) => {
      console.log(data)
      setCurrentUser(data);
      window.location.href = "Notes.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })

}





let signinForm = document.getElementById("login");
if(signinForm) signinForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let userName = ((document.getElementById("user_name")||{}).value)||"";
  let Password = ((document.getElementById("password")||{}).value)||"";
  let user = new User(null,null,userName, Password);
  console.log(user);
  fetchData("/user/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}