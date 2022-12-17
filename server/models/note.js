const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS comments(
    noteID INT NOT NULL AUTO_INCREMENT,
    noteContent VARCHAR(255),
    UserID INT NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(noteID),
    CONSTRAINT noteFK FOREIGN KEY(noteID) references users(UserID)
    );`
  await con.query(sql);
}
createTable();

async function getAllNotes() {
  const sql = `SELECT * FROM comments;`;
  return await con.query(sql);
//  console.log(comments)
}

async function register(note) {
 
  const sql = `INSERT INTO comments (noteContent,userID)
    VALUES "(${note.noteContent})", "(${note.userID})";
  `
  await con.query(sql);
  
}

async function editNote(note){
  let sql=`update comments SET noteContent ="${note.noteContent}" where noteID=${note.UserID}`;

  await con.query(sql);
  let updatedNote=await getNote(note);

  return updatedNote[0];
}

async function deleteNote(note){
  let sql=`Delete from comments where UserID =${note.UserID}`
  await con.query(sql);

}

async function getNote(note) {
  let sql;
  {
    sql = `
      SELECT * FROM comments
       WHERE UserID = ${note.UserID}
    `
  }
    return await con.query(sql);
  }

module.exports = { getAllNotes,editNote,deleteNote,register};