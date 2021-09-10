const express = require("express");
const router = require("express").Router();
const axios = require("axios").default;
const {Author, Book } = require("../db.js");
const { conn } = require("../db.js");
const { Op } = require("sequelize");


router.get("/", (req, res) => {
  res.send("<h1>Welcome to Soamee</h1>");
});

router.get("/books", async (req, res) => {
  try {
     const book = await Book.findAll();
      if (book) {
        return res.json(book);
      }
  } catch (err) {
    return res.status(400).send("<h1>Books not found</h1>");
  }
});


router.get('/book/:id', async (req, res) => {
    let {id} = req.params;
    const bookFind = await Book.findByPk(id);
    if(bookFind) {
    const authorFind = await Author.findByPk(bookFind.authorId);
    authorFind ?  res.json({bookFind, authorFind}) : res.json(bookFind)
    }
});

router.get("/authors", async (req, res) => {
  try {
     const author = await Author.findAll();
      if (author) {
        return res.json(author);
      }
  } catch (err) {
    return res.status(400).send("<h1>author not found</h1>");
  }
});

router.get('/author/:id', async (req, res) => {
  let {id} = req.params;
  const authorFind = await Author.findByPk(id);
  authorFind && res.json(authorFind)
});

router.post("/author", async (req, res) => {
  const { first_name, last_name} = req.body;
  try {
    const author = await Author.findOrCreate({
      where: { first_name, last_name},
    });
    res.json(author)
  } catch (error) {
    res.sendStatus(404 + error);
  }
});

router.post("/book", async (req, res) => {
  const { name, isbn, authorId} = req.body;
  try {
    const book = await Book.findOrCreate({
      where: { name, isbn, authorId},
      include: { model: Author },
    });
    res.json(book)
  } catch (error) {
    res.sendStatus(404 + error);
  }
});

module.exports = router;
