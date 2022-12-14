const con = require("./db_connect");


async function createTable() {     //Table Creation
  let sql=`CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  ); `
  await con.query(sql);
}
createTable();


async function getAllUsers() {   // grabbing all users in database
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  console.log(users)
}


async function register(user) {   // Create  User - Registering
  let cUser = await getUser(user);
  if(cUser.length > 0) throw Error("Username already in use");

  const sql = `INSERT INTO users (userName, password)
    VALUES ("${user.userName}", "${user.password}");
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
    SET userName = "${user.userName}"
    WHERE userID = ${user.userID}
  `;

  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
}

// Delete User function
async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
}

// Useful Functions
async function getUser(user) {
  let sql;

  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE userName = "${user.userName}"
  `;
  }
  return await con.query(sql);  
}

module.exports = { getAllUsers, login, register, editUser, deleteUser};