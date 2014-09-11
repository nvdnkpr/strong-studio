UI.directive('slUiSelect', [
  function(){
    return {
      restrict: "E",
      replace: true,
      templateUrl: './scripts/modules/ui/templates/_ui.select.html',
      scope: {
        list: '='
      },
      controller: function($scope, $attrs) {
      }
    }
  }
]);
