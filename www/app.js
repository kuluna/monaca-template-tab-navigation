'use strict';

ons.bootstrap()
  .controller('AppController', function() {
    // Root Controller
  })
  .controller('HomeMasterController', function($scope) {
    // Pass from javascript to html
    $scope.numbers = number100();

    // Define Event function
    $scope.showDetail = function(number) {
      // Push page with params
      home.nav.pushPage('view/home/detail.html', { data: { num: number } });
    };


    function number100() {
      var box = [];
      for (var i=1; i <= 100; i++) {
        box.push(i);
      }
      return box;
    }
  })
  .controller('HomeDetailController', function($scope) {
    // Get the params from pushed page
    var extra = home.nav.topPage.data;
    $scope.num = extra.num;
    
    // Dialog function
    $scope.showDialog = function(message) {
      navigator.notification.alert(message);
    };
  })
  .controller('AccountController', function($scope, $http) {
    // Get the OnsenUI GitHub
    $http.get('https://api.github.com/users/OnsenUI').then(function(response) {
      if (response.status === 200) {
        $scope.onsenui = response.data;
      } else {
        alert('Error http: ' + response.status);
      }
    });
  });


// Cordova ready
ons.ready(function() {
  // Nifty Mobile Backend(Push notification)
  /*
  window.NCMB.monaca.setDeviceToken(
    "", // Nifty application key
    "", // Nifty client key
    ""  // Firebase ID
  );
  window.NCMB.monaca.setReceiptStatus(true);
  */
});
