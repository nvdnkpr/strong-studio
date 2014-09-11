// Copyright StrongLoop 2014
Landing.directive('slLandingApp', [
  function () {
    return {
      restrict: "E",
      replace: true,
      templateUrl: './scripts/modules/landing/templates/_landing.app.html',
      scope: {
        app: '='
      },
      link: 'scope'
    };
  }
]);


Landing.directive('slAppSelector', [
  function(){
    return {
      restrict: "E",
      replace: true,
      templateUrl: './scripts/modules/landing/templates/_landing.app.selector.html',
      scope: {},
      controller: function($scope, $attrs, LandingService){
        LandingService.getApps()
          .then(function(data){
            $scope.apps = data;
          });
      }
    }
  }
]);
