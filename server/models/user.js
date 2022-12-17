const con = require("./db_connect");

//Table Creation
async function createTable() {     
  let sql=`CREATE TABLE IF NOT EXISTS users (
    UserID INT NOT NULL AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(UserID)
  ); `
  await con.query(sql);
}
createTable();

// grabbing all users in database
async function getAllUsers() {   
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  console.log(users)
}

// Create  User - Registering
async function register(user) {   
  let cUser = await getUser(user);
  if(cUser.length > 0) throw Error("Username already in use");

  const sql = `INSERT INTO users (Username, password)
    VALUES ("${user.Username}", "${user.password}");
  `
  await con.query(sql);
  return await login(user);
}

// Read User -- login user
async function login(user) { 
  let cUser = await getUser(user);  
  if(!cUser[0]) throw Error("Username not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

// Update User function
async function editUser(user) {
  let sql = `UPDATE users 
    SET userName = "${user.Username}"
    WHERE UserID = ${user.UserID}
  `;

  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
}

// Delete User function
async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE UserID = ${user.UserID}
  `
  await con.query(sql);
}

// Useful Functions
async function getUser(user) {
  let sql;

  if(user.UserID) {
    sql = `
      SELECT * FROM users
       WHERE UserID = ${user.UserID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE userName = "${user.Username}"
  `;
  }
  return await con.query(sql);  
}

module.exports = { getAllUsers, login, register, editUser, deleteUser};