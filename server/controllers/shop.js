const fs = require('fs');
const path = require('path');

const { validationResult } = require("express-validator");

// const Post = require('../models/post');
const User = require('../models/user');

exports.createItem = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed, entered data is incorrect.');
      error.statusCode = 422;
      throw error;
    }
    if (!req.file) {
      const error = new Error('No image provided.');
      error.statusCode = 422;
      throw error;
    }

    const imageUrl = req.file.path;
    const title = req.body.title;
    const content = req.body.content;
    let creator;

    // const post = new Post({
    //   title: title,
    //   content: content,
    //   imageUrl: imageUrl,
    //   creator: req.userId
    // });
    
    // post
    //   .save()
    //   .then(result => {
    //     return User.findById(req.userId);
    //   })
    //   .then(user => {
    //     creator = user;
    //     user.posts.push(post);
    //     return user.save();
    //   })
    //   .then(result => {
    //     res.status(201).json({
    //       message: 'Post created successfully!',
    //       post: post,
    //       creator: { _id: creator._id, name: creator.name }
    //     });
    //   })
    //   .catch(err => {
    //     if (!err.statusCode) {
    //       err.statusCode = 500;
    //     }
    //     next(err);
    //   });
  };
  