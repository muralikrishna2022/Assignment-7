import { fetchData, getCurrentUser } from './main.js'

// user class
class User {
  constructor(noteContent, UserID) {
      this.noteContent = noteContent;
      this.UserID = UserID;
  }
}

// login functionality
let noteForm = document.getElementById("note_form");
if(noteForm) noteForm.addEventListener('submit', save);

let user_ = getCurrentUser();
console.log(user_)

function save(e) {
  e.preventDefault();

  let UserID = user_.UserID;
  let noteContent = document.getElementById("comp_note").value;
  let note = new User(noteContent, UserID);

  fetchData("/notes/register", note, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "Notes.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}