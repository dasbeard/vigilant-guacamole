// =========================================================================
// ============================== Require ==================================
// =========================================================================
const mongoose = require('mongoose');


// =========================================================================
// ============================== Schemas ==================================
// =========================================================================
var QuestionSchema = new mongoose.Schema({
  question:{type: String, required: true, minlength: 8},
  opt1:{type: String, required: true, minlength: 3},
  opt1Votes: Number,
  opt2:{type: String, required: true, minlength: 3},
  opt2Votes: Number,
  opt3:{type: String, required: true, minlength: 3},
  opt3Votes: Number,
  opt4:{type: String, required: true, minlength: 3},
  opt4Votes: Number,
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

},{timestamps: true});

// =========================================================================
// ========================== Set Schema Name ==============================
// =========================================================================
mongoose.model('Question', QuestionSchema);
