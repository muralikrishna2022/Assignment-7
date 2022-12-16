const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS comments(
    noteID INT NOT NULL AUTO_INCREMENT,
    noteContent VARCHAR(255),
    userID INT NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(noteID),
    CONSTRAINT noteFK FOREIGN KEY(noteID) references users(userID)
    );`
  await con.query(sql);
}
createTable();

async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let comments = await con.query(sql);
  console.log(comments)
}

async function register(note) {
 
  const sql = `INSERT INTO notes (noteID,noteContent,userID)
    VALUES ("${note}", "${noteContent}", "${userID}"));
  `
  await con.query(sql);
  return await login(note);
}


async function editNote(note){
  let sql=`update notes SET note="${note.note}" where noteID=${note.noteID}`;

  await con.query(sql);
  let updatedNote=await getNote(note);

  return updatedNote[0];
}

async function deleteNote(note){
  let sql=`Delete from notes where noteID=${note.noteID}`;
  await con.query(sql);

}

async function getAllNotes(note) {
  let sql;

  if(note.noteID) {
    sql = `
      SELECT * FROM notes
       WHERE noteID = ${note.noteID}
    `
  } else {
    sql = `
    SELECT * FROM notes 
      WHERE noteContent = "${note.noteContent}}"
  `;
  }
  return await con.query(sql);  
}

module.exports = { getAllNotes,editNote,deleteNote,register};