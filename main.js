angular.module("calculatorElective", []).controller("calculatorController", 
function($scope) {
$scope.answer = "";

$scope.clicks= function(val){
    $scope.answer += val;
};
$scope.equal = function(val) {
    $scope.answer = eval($scope.answer);
};
$scope.clear=function(val){
    $scope.answer = ''
}
$scope.sqrt=function(val){
    $scope.answer = Math.sqrt($scope.answer);
}
// $scope.back=function(val){
//     $scope.answer = val.substring(0,val.length-1);
// }
})
function back(){
    var exp = document.calc.textview.value;
    document.calc.textview.value = exp.substring(0, exp.length-1);
}