(function(){
  'use strict';
angular.module('myApp')
.controller('lunchController',lunchController)
.controller('breakfastController',breakfastController)
.controller('buffetController',buffetController)
.controller('signUpController',signUpController)
.controller('infoController',infoController);

//LUNCH CONTROLLER
lunchController.$inject=['DBService'];
function lunchController(DBService){

  var lunchItems=DBService.displayLunchItems();
  this.lunchItems=lunchItems;

  this.deleteLunchItem=function(index){
    console.log("Index",index);
    DBService.deleteItem(index);
  }
  this.showPrice=function(index){
      console.log("index",index);
      DBService.showPriceService(index);
  }
}
//END OF LUNCH controller
//BEGINNING OF breakfastController
breakfastController.$inject=['DBService'];

function breakfastController(DBService){
  this.breakfastItems=DBService.displayBreakfastItems();

  this.deleteBreakfastItem=function(index){
    DBService.deleteBreakfastItemService(index);
  }
  this.showPriceBreakfastItem=function(index){
    DBService.showPriceBreakfastItemService(index);
  }
}
//END OF breakfastController

//BEGINNING OF buffetController
buffetController.$inject=['DBService'];
function buffetController(DBService){
  this.buffetItems=DBService.displayBreakfastItemsService();
  this.deleteBuffetItem=function(index){
    DBService.deleteBuffetItemService(index);
  };
  this.showPriceBuffetItem=function(index){
    DBService.showPriceBuffetService(index);
  }
}

//END OF buffetController
//BEGINNING OF SIGNUP CONTROLLER
function signUpController($scope,$rootScope,DBService){
  $scope.loggedIn=false;
  $scope.submit=function(){
    DBService.getRegistrationService($scope.firstName,$scope.password,$scope.lastName,$scope.email);
    $scope.showForm=DBService.displayRegFormService();
      $scope.firstName='';
      $scope.password='';
      $scope.lastName='';
      $scope.email='';
      $scope.loggedIn=true;
      $rootScope.loged=true;
  }

}
//END OF SIGNUP CONTROLLER
//BEginning of Info CONTROLLER
function infoController($scope,$rootScope,DBService){



   $scope.loged=$rootScope.loged;
   $scope.items=DBService.displayRegFormService();


}
//End of Info Controller

})();
