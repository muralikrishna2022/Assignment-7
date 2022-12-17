import { fetchData, getCurrentUser } from './main.js'

// user class
class User {
  constructor(noteContent,userID) {
      this.noteContent = noteContent;
      this.userID = userID;
  }
}

// login functionality
let noteForm = document.getElementById("note_form");
if(noteForm) noteForm.addEventListener('submit', save);

let user_ = getCurrentUser();
console.log(user_)

function save(e) {
  e.preventDefault();
  console.log(user_)
  let userID = user_.UserID;
  let noteContent = document.getElementById("comp_note").value;
  let note = new User(noteContent,userID);

  fetchData("/notes/register", note, "POST")
  .then((data) => {
    window.location.href = "Notes.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}