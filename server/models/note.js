const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS comments(
    noteID INT NOT NULL AUTO_INCREMENT,
    Note VARCHAR(255) NOT NULL UNIQUE,
    FOREIGN KEY (Note) REFERENCES users(userName)
    );`
  await con.query(sql);
}
createTable();

// grabbing all users in database
async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let comments = await con.query(sql);
  console.log(comments)
}

// Read User -- login user
async function login(note) { // {userName: "sda", password: "gsdhjsga"}
  let cUser = await getUser(note); //[{userName: "cathy123", password: "icecream"}]
  
  if(!cUser[0]) throw Error("Username not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

// Update User function
async function editNotes(notes) {
  let sql = `UPDATE notes 
    SET Note = "${user.userName}"
    WHERE noteID = ${note.noteID}
  `;

  await con.query(sql);
  let updatedNote = await getNotes(note);
  return updatedNote[0];
}

// Delete User function
async function deletenotes(notes) {
  let sql = `DELETE FROM notes
    WHERE noteID = ${note.noteID}
  `
  await con.query(sql);
}

// Useful Functions
async function getNotes(notes) {
  let sql;

  if(notes.noteID) {
    sql = `
      SELECT * FROM notes
       WHERE noteID = ${note.noteID}
    `
  } else {
    sql = `
    SELECT * FROM notes
      WHERE Note = "${notes.NoteId}"
  `;
  }
  return await con.query(sql);  
}


const notes = [
    {
        NoteId: 1,
        notetake:"hi" 
    },
    {
        NoteId: 2,
        notetake:"hello Murali" 
    }
];

function getAllNotes() {

    return notes;
    
  }

module.exports = { getAllNotes};