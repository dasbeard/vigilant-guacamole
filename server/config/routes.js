// =========================================================================
// ========================= Required Models ===============================
// =========================================================================
var users = require('./../controllers/users.js');
var questions = require('./../controllers/questions.js');

module.exports = function(app){
// =========================================================================
// =========================== User Routes =================================
// =========================================================================
app.post('/user/regUser', function(req,res){
  users.new(req,res)
});

app.post('/user/login', function(req,res){
  users.login(req,res)
});



// =========================================================================
// =========================== User Routes =================================
// =========================================================================
app.post('/question/new', function(req,res){
  questions.new(req,res)
});

app.post('/question/delete', function(req,res){
  questions.delete(req,res)
});

app.get('/question/getAll', function(req,res){
  questions.getAll(req,res)
});

app.post('/question/getOne', function(req,res){
  questions.getOne(req,res)
});

app.post('/question/voteOpt1', function(req,res){
  questions.voteOne(req,res)
});

app.post('/question/voteOpt2', function(req,res){
  questions.voteTwo(req,res)
});

app.post('/question/voteOpt3', function(req,res){
  questions.voteThree(req,res)
});

app.post('/question/voteOpt4', function(req,res){
  questions.voteFour(req,res)
});

}; // End Routes
