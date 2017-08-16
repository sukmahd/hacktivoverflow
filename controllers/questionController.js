'use strict'

const Question = require('../models/Question')


function getAllQuestion(req,res){
  Question.find()
  .populate('author', 'name username email')
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function getOneQuestion(req,res){
  Question.findById(req.params.id)
  .populate('author', 'name username email')
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function createQuestion(req,res){
  Question.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    answer: [],
    upvotes: [],
    downvotes: []
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function deleteQuestion(req,res){
  Question.deleteOne({
    _id: req.params.id
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function editQuestion(req,res){
  Question.where({
    _id:req.params.id
  })
  .update({
    title:req.body.title,
    content: req.body.content
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function addAnswer(req,res){
  Question.where({
    _id: req.params.id
  })
  .update({
    $push:{
      answer: {
        author: req.body.author,
        content: req.body.content,
        upvotes: [],
        downvotes: []
      }
    }
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}


module.exports = {
  getAllQuestion,
  getOneQuestion,
  createQuestion,
  addAnswer,
  deleteQuestion
};
