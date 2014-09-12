UI.directive('slUiSelect', [
  function(){
    return {
      restrict: "E",
      replace: true,
      templateUrl: './scripts/modules/ui/templates/_ui.select.html',
      scope: {
        list: '=',
        selected: '='
      },
      controller: function($scope, $attrs) {
        $scope.selectItem = function(item){
          $scope.selected = item;
        }
      }
    }
  }
]);
