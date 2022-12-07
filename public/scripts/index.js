const usersBtn=document.getElementById("users-btn");

if(usersBtn)usersBtn.addEventListener('click',getUsers);

function getUsers(){
    fetch("http://localhost:3000/users/")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        let ul=document.getElementById("allUsers");

        data.forEach((user)=>{
            let li=document.createElement('li');
            let text=document.createTextNode(user.userName);

            li.appendChild(text);
            ul.appendChild(li);
        })
    })

    .catch((err)=>console.log(`error! ${err}`));
}

const notesBtn=document.getElementById("notes-btn");
if(notesBtn)notesBtn.addEventListener('click',getNotes);

 function getNotes(){
     fetch("http://localhost:3000/notes/")
     .then((res)=>res.json())
     .then((data)=>{
         let ul=document.getElementById("allNotes");

         data.forEach((note)=>{
             let li=document.createElement('li');
             let text=document.createTextNode(note.notecontent);
             li.appendChild(text);
             ul.appendChild(li);

         })


     })
     .catch((err)=>console.log(`Error! ${err}`));
 }