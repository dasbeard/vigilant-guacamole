// =========================================================================
// ============================== Require ==================================
// =========================================================================
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const User = mongoose.model('User');

module.exports = (function(){
  return {

    new: function(req,res){
      console.log('At server User controller for New'.yellow);
      User.findOne({name: req.body.name}, function(err, oneUser){
        if(err){
          console.log('===== ERROR Finding User to Register ====='.red);
          console.log(err);
        } else {
          if(oneUser){
            console.log('===== User aready in System ====='.cyan);
            res.json(oneUser);
          } else {
            console.log('===== Entering New User into Database ====='.blue);
            var newUser = new User({name: req.body.name});
            newUser.save(function(err){
              if(err){
                console.log('===== ERROR saving User ====='.red);
                console.log(err);
              }else {
                console.log('===== User added sucessfully ====='.blue);
                res.json(newUser);
              }
            });
          }
        }
      });
    }, // End New
    //
    // login: function(req, res){
    //   console.log('At server User controller for login'.yellow);
    //   console.log(req.body);
    //   User.findOne({name: req.body.name}, function(err, oneUser){
    //     if(err){
    //       console.log('===== ERROR Finding User to Register ====='.red);
    //       console.log(err);
    //     } else if (!oneUser){
    //       console.log('===== ERROR User not in system ====='.red);
    //       res.json({error: 'User not in the system. Please register.'})
    //     } else {
    //       res.json(oneUser);
    //     }
    //   });
    // }, // End Login




  } // --------------------------- End Return --------------------------------
})(); // End Export

// ========================== BCRYPT TOOLS ===============================
// Encrypt password before saving
// var pw = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));

// Authenticate password
// if(bcrypt.compareSync(req.body.password, oneUser.password)){}
