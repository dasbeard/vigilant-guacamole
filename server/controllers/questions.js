// =========================================================================
// ============================== Require ==================================
// =========================================================================
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const Question = mongoose.model('Question');

module.exports = (function(){
  return {

    new: function(req, res){
      console.log('At server Question controller for new'.yellow);
      console.log(req.body);

      var newQuestion = new Question({question: req.body.question, opt1: req.body.opt1, opt2: req.body.opt2, opt3: req.body.opt3, opt4: req.body.opt4, opt1Votes: 0, opt2Votes: 0, opt3Votes: 0, opt4Votes: 0, _user: req.body.userID});
      newQuestion.save(function(err){
        if(err){
          console.log('===== Error Saving New Question ====='.red);
          console.log(err);
          res.json({error: 'Error saving new question'});
        } else {
          console.log('===== New Question Saved ====='.cyan);
          // console.log(newQuestion);
          res.json({success: 'New Question Added'});
        }
      })
    }, // End Login


    getAll: function(req,res){
      Question.find({}).populate(['_user']).exec(function(err, questions){
        if(err){
          console.log('=============== Error Getting All Questions ==============='.red);
          console.log(err);
          res.json({error: 'Problem getting all questions'});
        } else {
          console.log('=============== All questions Sent ==============='.cyan);
          // console.log(questions);
          res.json(questions);
        }
      });
    }, // End Get All


    getOne: function(req,res){
      Question.findOne({_id: req.body.qID}, function(err, oneQ){
        if(err){
          console.log('==== Error Finding Question ===='.red);
          console.log(err);
          res.json({error: 'Error finding Question'})
        } else {
          res.json(oneQ);
        }
      });
    }, // End Get One


    voteOne: function(req,res){
      Question.findOne({_id: req.body.qID}, function(err, oneQ){
        if(err){
          console.log('==== Error Finding Question ===='.red);
          console.log(err);
          res.json({error: 'Error finding Question'})
        } else {
          oneQ.opt1Votes += 1;
          oneQ.save(err);
            if (err){
              console.log('===== ERROR Adding Vote to Opt 1 ====='.red);
              console.log(err);
              res.json({error: 'Problem adding vote to opt1'});
            } else {
              res.json(oneQ);
            }
          }
        });
    }, // End Vote One


    voteTwo: function(req,res){
      Question.findOne({_id: req.body.qID}, function(err, oneQ){
        if(err){
          console.log('==== Error Finding Question ===='.red);
          console.log(err);
          res.json({error: 'Error finding Question'})
        } else {
          oneQ.opt2Votes += 1;
          oneQ.save(err);
            if (err){
              console.log('===== ERROR Adding Vote to Opt 2 ====='.red);
              console.log(err);
              res.json({error: 'Problem adding vote to opt2'});
            } else {
              res.json(oneQ);
            }
          }
        });
    }, // End Vote Two

    voteThree: function(req,res){
      Question.findOne({_id: req.body.qID}, function(err, oneQ){
        if(err){
          console.log('==== Error Finding Question ===='.red);
          console.log(err);
          res.json({error: 'Error finding Question'})
        } else {
          oneQ.opt3Votes += 1;
          oneQ.save(err);
            if (err){
              console.log('===== ERROR Adding Vote to Opt 3 ====='.red);
              console.log(err);
              res.json({error: 'Problem adding vote to opt3'});
            } else {
              res.json(oneQ);
            }
          }
        });
    }, // End Vote Three

    voteFour: function(req,res){
      Question.findOne({_id: req.body.qID}, function(err, oneQ){
        if(err){
          console.log('==== Error Finding Question ===='.red);
          console.log(err);
          res.json({error: 'Error finding Question'})
        } else {
          oneQ.opt4Votes += 1;
          oneQ.save(err);
            if (err){
              console.log('===== ERROR Adding Vote to Opt 4 ====='.red);
              console.log(err);
              res.json({error: 'Problem adding vote to opt4'});
            } else {
              res.json(oneQ);
            }
          }
        });
    }, // End Vote Three


    delete: function(req,res){
      console.log('===== This is the remove action ====='.yellow);
      Question.remove({_id:req.body.id}, function(err, oneQuestion){
        if(err){
          console.log('====== Error ======'.red);
          console.log(err);
          res.json({error: 'ERROR. Question was not removed'});
        } else {
          res.json({success: 'Poll Removed'});
        }
      });
    } // End Delete


  } // --------------------------- End Return --------------------------------
})(); // End Export
