
// =========================================================================
// =========================== Home Controller =============================
// =========================================================================
app.controller('homeController', function($scope, userFactory, questionFactory, $cookieStore, $location){
  $scope.user = $cookieStore.get('user');
  $scope.message = '';
  $scope.allQuestions = [];
  $scope.showPrompt = $cookieStore.get('hideMask');


  if($cookieStore.get('user')){
    $scope.showPrompt = false;
  } else {
    $scope.showPrompt = true;
  }

  $scope.user=$cookieStore.get('user');
  if(!$scope.user){
    $location.url('/');
  }


  $scope.regUser = function(){
    // console.log('Register Button Clicked');
    // console.log($scope.reg);


    if($scope.reg.name){
      //call Factory method to register user
      userFactory.register($scope.reg, function(output){
        // console.log(output);
        // console.log("Back from factory ---> finished registering");
        $scope.user = output.data;

        if(output.data.error){
          $scope.error = output.data.error;
        } else {
          // console.log('this is the outputtttt');
          // console.log(output.data);
          $cookieStore.put('user', output.data);
          $scope.user=$cookieStore.get('user');
          $cookieStore.put('hideMask', false);
          $scope.showPrompt = false;
          $location.url('/');
        }
      });
    } else {
      $scope.error= "Passwords do not match!"
    }
    //Clear input
    $scope.reg = {};
  }

  function getAllQ (){
    questionFactory.getAllQuestions(function(output){
      $scope.allQuestions = output;
      // console.log(output);
    });
  }
  getAllQ();

  $scope.addNewPage = function(){
    $location.url('/new');
  }


  $scope.vote = function(qID){
    $cookieStore.put('question', qID);
    $location.url('/vote');
  }


  $scope.deletePoll = function(qID){
    // console.log(qID + '  <----qID');
    questionFactory.deletePoll(qID, function(output){
      // console.log('Back from factory');
      if(output.err){
        $scope.message = output.error;
      } else {
        getAllQ();
      }
    });
  }



  $scope.logout = function(){
    $cookieStore.remove('user');
    $cookieStore.remove('question');
    $cookieStore.remove('hideMask');
    $location.url('/home');
  } // End Logout


}); //End of Game Controller


// =========================================================================
// =========================== Question Controller =============================
// =========================================================================
app.controller('questionController', function($scope, userFactory, questionFactory, $cookieStore, $location){
  $scope.user = $cookieStore.get('user');



  $scope.submitNewQuestion = function(){
    // console.log('button Clicked');
    // console.log($scope.newQuestion);
    $scope.message = '';

    if($scope.newQuestion == undefined){
      // console.log('Nothing entered');
      $scope.message = 'Please enter a new question';
    } else if ($scope.newQuestion.question == undefined){
        $scope.message = 'Please enter a new question';
    } else if ($scope.newQuestion.question.length <8){
      $scope.message = 'Question must be at least 8 characters long';
    } else if ($scope.newQuestion.opt1 == undefined){
      $scope.message = "Option 1 can't be empty";
    } else if ($scope.newQuestion.opt1.length < 3){
      $scope.message = 'Option 1 must be at least 3 characters long';
    } else if ($scope.newQuestion.opt2 == undefined){
      $scope.message = "Option 2 can't be empty";
    } else if ($scope.newQuestion.opt2.length < 3){
      $scope.message = 'Option 2 must be at least 3 characters long';
    } else if ($scope.newQuestion.opt3 == undefined){
      $scope.message = "Option 3 can't be empty";
    } else if ($scope.newQuestion.opt3.length < 3){
      $scope.message = 'Option 3 must be at least 3 characters long';
    } else if ($scope.newQuestion.opt4 == undefined){
      $scope.message = "Option 4 can't be empty";
    } else if ($scope.newQuestion.opt4.length < 3){
      $scope.message = 'Option 4 must be at least 3 characters long';
    } else {
      $scope.newQuestion.userID = $scope.user._id;
      // console.log($scope.newQuestion);
      // console.log('1');
      questionFactory.submitNewQuestion($scope.newQuestion, function(output){
        // console.log('Back from factory');
        // console.log(output);
        if (output.error){
          $scope.message = output.error;
        } else {
          $location.url('/');
        }
      })
    }
  } // End Submit New Question





  $scope.backHome = function(){
    $location.url('/');
  } // End Back Home



}); //End of Game Controller


// =========================================================================
// =========================== Vote Controller =============================
// =========================================================================
app.controller('voteController', function($scope, userFactory, questionFactory, $cookieStore, $location){
  $scope.questionID = $cookieStore.get('question')
  $scope.message = '';
  $scope.question = {};

  // console.log($scope.questionID);
  function getQuestion(){
    questionFactory.getOneQuestion($scope.questionID, function(output){
      // console.log('Back from factory');
      // console.log(output);
      if(output.error){
        $scope.message = output.error;
      } else {
        $scope.question = output;
      }
    }); // End Get One Question
  }

  getQuestion();

  $scope.voteOpt1 = function(){
    // console.log('Voted on opt1');
    questionFactory.voteOpt1($scope.questionID, function(output){
      // console.log('Back from factory');
      if(output.error){
        $scope.message = output.error;
      } else {
        getQuestion();
      }
    });
  } // End Vot Opt 1

  $scope.voteOpt2 = function(){
    // console.log('Voted on opt2');
    questionFactory.voteOpt2($scope.questionID, function(output){
      // console.log('Back from factory');
      if(output.error){
        $scope.message = output.error;
      } else {
        getQuestion();
      }
    });
  } // End Vot Opt 2


  $scope.voteOpt3 = function(){
    // console.log('Voted on opt3');
    questionFactory.voteOpt3($scope.questionID, function(output){
      // console.log('Back from factory');
      if(output.error){
        $scope.message = output.error;
      } else {
        getQuestion();
      }
    });
  } // End Vot Opt 3


  $scope.voteOpt4 = function(){
    // console.log('Voted on opt4');
    questionFactory.voteOpt4($scope.questionID, function(output){
      // console.log('Back from factory');
      if(output.error){
        $scope.message = output.error;
      } else {
        getQuestion();
      }
    });
  } // End Vot Opt 4





  $scope.logout = function(){
    $cookieStore.remove('user');
    $cookieStore.remove('question');
    $cookieStore.remove('hideMask');
    $location.url('/home');
  } // End Logout


  $scope.backHome = function(){
    $location.url('/');
  } // End Back Home


}); // End Vote Controller
