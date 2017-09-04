var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope, $http){

	$scope.formData = {};

	$http.get('/api/todos').then(function(success){
		$scope.todos = success.data;
	});

	$scope.deleteTodo = function(id){
		$http.delete('/api/todos/' + id).then(function(success){
			$scope.todos = success.data;
		});
	}

	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData).then(function(success){
			//clear data
			$scope.formData = {};
			$scope.todos = success.data;
		});
	}

});



///////////////////////////// onsen //////////////////////////////

document.addEventListener('init', function(event) {
  var page = event.target;
  if (page.matches('#helloworld-page')) {
    page.querySelector('ons-toolbar .center').innerHTML = 'My app';
    page.querySelector('ons-button').onclick = function() {
      ons.notification.alert('Hello world!');
    };
  }
});


////pull to refresh

ons.ready(function() {
  var pullHook = document.getElementById('pull-hook');

  pullHook.addEventListener('changestate', function(event) {
    var message = '';

    switch (event.state) {
      case 'initial':
        message = 'Pull to refresh';
        break;
      case 'preaction':
        message = 'Release';
        break;
      case 'action':
        message = 'Loading...';
        break;
    }

    pullHook.innerHTML = message;
  });

  pullHook.onAction = function(done) {
    setTimeout(done, 1000);
  };
});


////pop up

var showDialog = function (id) {
  document
    .getElementById(id)
    .show();
};

var hideDialog = function (id) {
  document
    .getElementById(id)
    .hide();
};

var fromTemplate = function () {
  var dialog = document.getElementById('dialog-3');

  if (dialog) {
    dialog.show();
  }
  else {
    ons.createDialog('dialog.html')
      .then(function (dialog) {
        dialog.show();
      });
  }
};

function toggleToast() {
  document.querySelector('ons-toast').toggle();
};


//////

var showDialog = function (id) {
  document
    .getElementById(id)
    .show();
};

var hideDialog = function (id) {
  document
    .getElementById(id)
    .hide();
};

var fromTemplate = function () {
  var dialog = document.getElementById('dialog-3');

  if (dialog) {
    dialog.show();
  }
  else {
    ons.createDialog('dialog.html')
      .then(function (dialog) {
        dialog.show();
      });
  }
};

function toggleToast() {
  document.querySelector('ons-toast').toggle();
};
