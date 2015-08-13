angular.module('myApp',[]).controller('MyController', function ($scope, $compile){
    $scope.showNodes = false;
    $scope.nodeName = '';
    $scope.hideInputBox = true;
    $scope.addNode = false;
    $scope.showInputBoxes = true;
    $scope.expand = function(){
        if($scope.hideInputBox){
            $scope.hideInputBox = false;
            $scope.addNode = true;
        }else{
            $scope.hideInputBox = true;
            $scope.addNode = false;
        }
    };
    $scope.watchInput = function (event, nodeName){
        console.log(event.keyCode);
        if(event.keyCode === 13){
            console.log(nodeName);
            $scope.showNodes = true;
            $scope.nodeName = nodeName;
        }
    };
}).directive('myNode', function (){
    return {
        restrict: 'A',
        templateUrl: '_node.html',
        link: function(scope, element, attrs){
            console.log('myNode attributes object', attrs);
            console.log('myNode element', element);
            console.log(scope.nodeName);
        }
    }
});
