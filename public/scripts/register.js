const User_name = document.getElementById("comReg");
if(User_name) User_name.addEventListener("submit", User_Object);


function User_Object(e){
    e.preventDefault();
    let Firstname = ((document.getElementById("first_name")||{}).value)||"";
    let Lastname = ((document.getElementById("last_name")||{}).value)||"";
    let Username = ((document.getElementById("user_name")||{}).value)||"";
    let Password = ((document.getElementById("password")||{}).value)||"";
    let Note = ((document.getElementById("comp_note")||{}).value)||"";
    const newUser = new User(Firstname,Lastname,Username,Password,Note);
    console.log(newUser);
}

function User(first_name,last_name,user_name,password,note){
    this.first_name = first_name;  
    this.last_name = last_name; 
    this.user_name = user_name; 
    this.password = password; 
    this.note = note;
}

User.prototype.getfirst_Name = function(){
    return this.first_name;
}

User.prototype.getlast_Name = function(){
    return this.last_name;
}

User.prototype.getuser_name = function(){
    return this.user_name;
}

User.prototype.getnote = function(){
    return this.note;
}


User.prototype.setfirst_Name = function(first_name){
    this.first_name = first_name;
}

User.prototype.setlast_Name = function(last_name){
    this.last_name = last_name;
}

User.prototype.setuser_name = function(user_name){
    this.user_name = user_name;
}

User.prototype.setnote = function(note){
    this.note = note;
}