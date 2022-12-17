const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (_req, res) => {
    try {
      const Note = await Notes.getAllNotes();
      res.send(Note);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .put('/edit', async (req, res) => {
    try {
      let note = await Note.editNote(req.body);
      res.send({...note});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .post('/register', async(req, res) => {
    try{
    let note = await Note.register(req.body);
      res.send({...note});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      Note.deleteNote(req.body);
      res.send({success: "data is missing... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
module.exports = router;