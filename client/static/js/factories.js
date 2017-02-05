// =========================================================================
// ========================= User Factory =================================
// =========================================================================
app.factory('userFactory', function ($http){
  var factory = {};
  var user = {};
  var message = {};


  // // Register User method
  factory.register = function(input, callback){
    $http.post('/user/regUser', input).then(function(output){
      // console.log('Made it back to factory');
      // console.log(output);
      callback(output);
    });
  }

  //Login method
  factory.login = function(input, callback){
    $http.post('/user/login', input).then(function(output){
      // console.log('Made it back to factory');
      // console.log(output);
      callback(output);
    });
  }


  return factory;
}); // End Login Factory




// =========================================================================
// ========================= Question Factory ==============================
// =========================================================================
app.factory('questionFactory', function ($http){
    var factory = {};
    var user = {};

    factory.submitNewQuestion = function(input, callback){
      $http.post('/question/new', input).then(function(output){
        // console.log('Back from factory');
        callback(output.data);
      });
    } // End Submit New Question


    factory.getAllQuestions = function(callback){
      $http.get('/question/getAll').then(function(output){
        callback(output.data);
      });
    } // End Get All Questions


    factory.getOneQuestion = function(qID, callback){
      $http.post('/question/getOne', {qID:qID}).then(function(output){
        // console.log('Back at factory from server');
        callback(output.data);
      });
    } // End Get One Question


    factory.voteOpt1 = function (qID, callback){
      // console.log('At Factory');
      $http.post('/question/voteOpt1', {qID:qID}).then(function(output){
        // console.log('back from server');
        callback(output);
      });
    } // End voteOpt1

    factory.voteOpt2 = function (qID, callback){
      // console.log('At Factory');
      $http.post('/question/voteOpt2', {qID:qID}).then(function(output){
        // console.log('back from server');
        callback(output);
      });
    } // End voteOpt2

    factory.voteOpt3 = function (qID, callback){
      // console.log('At Factory');
      $http.post('/question/voteOpt3', {qID:qID}).then(function(output){
        // console.log('back from server');
        callback(output);
      });
    } // End voteOpt3

    factory.voteOpt4 = function (qID, callback){
      // console.log('At Factory');
      $http.post('/question/voteOpt4', {qID:qID}).then(function(output){
        // console.log('back from server');
        callback(output);
      });
    } // End voteOpt4

    factory.deletePoll = function(qID, callback){
      // console.log('======== At Factory ========');
      // console.log(qID + '  <-----qID');
      $http.post('/question/delete', {id: qID}).then(function(output){
        // console.log('Back from server');
        callback(output.data);
      });
    }


  return factory;
}); // End Question Factory
