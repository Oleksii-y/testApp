(function(){
  'use strict'
angular.module('myApp')
.service('DBService',DBService);

function DBService(){

  //Меню для ланча
  var lunchItems=[
                  {
                      name:'Item1',
                      src:'1.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'10$',
                      available:false
                  },
                  {
                      name:'Item2',
                      src:'2.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'30$',
                      available:false
                  },
                  {
                      name:'Item3',
                      src:'3.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'20$',
                      available:false
                  },
                  {
                      name:'Item4',
                      src:'4.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'15$',
                      available:false
                  },
                  {
                      name:'Item5',
                      src:'5.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'12$',
                      available:false
                  },
                  {
                      name:'Item6',
                      src:'6.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'13$',
                      available:false
                  },
                  {
                      name:'Item7',
                      src:'7.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'19$',
                      available:false
                  },
                  {
                      name:'Item8',
                      src:'8.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'17$',
                      available:false
                  }
                  ];
    //Show the items
    this.displayLunchItems=function(){
      return lunchItems;
    }
    //Delete the items
    this.deleteItem=function(index){
      lunchItems.splice(index,1);
      return lunchItems;
    }

    this.showPriceService=function(index){
      if (lunchItems[index].available==false){
        lunchItems[index].available=true
      } else{
        lunchItems[index].available=false
      }
      // lunchItems[index].available=true;
      return lunchItems;
    }

  //КОНЕЦ МЕНЮ ДЛЯ ЛАНЧА
  //МЕНЮ ДЛЯ ЗАВТРАКА
  var breakfastItems=[
                  {
                      name:'Item1',
                      src:'1.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'10$',
                      available:false
                  },
                  {
                      name:'Item2',
                      src:'2.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'30$',
                      available:false
                  },
                  {
                      name:'Item3',
                      src:'3.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'20$',
                      available:false
                  },
                  {
                      name:'Item4',
                      src:'4.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'15$',
                      available:false
                  },
                  {
                      name:'Item5',
                      src:'5.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'12$',
                      available:false
                  },
                  {
                      name:'Item6',
                      src:'6.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'13$',
                      available:false
                  }
                  ];

      this.displayBreakfastItems=function(){
          return breakfastItems;
          }
      this.deleteBreakfastItemService=function(index){
        breakfastItems.splice(index,1);
        return breakfastItems;
      }
      this.showPriceBreakfastItemService=function(index){
        if (breakfastItems[index].available==false){
          breakfastItems[index].available=true
        } else{
          breakfastItems[index].available=false
        }
        return breakfastItems;
      }
  //КОНЕЦ МЕНЮ ДЛЯ ЗАВТРАКА
  //BEGINNING OF BUFFET menu_items
  var buffetItems=[
                  {
                      name:'Item1',
                      src:'1.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'30$',
                      available:false
                  },
                  {
                      name:'Item2',
                      src:'2.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'34$',
                      available:false
                  },
                  {
                      name:'Item3',
                      src:'3.jpg',
                      description:'Lorem ipsum dolor sit amet,',
                      price:'25$',
                      available:false
                  }
                  ];

  this.displayBreakfastItemsService=function(){
      return buffetItems;
        }
  this.deleteBuffetItemService=function(index){
    buffetItems.splice(index,1);
    return buffetItems;
  }
  this.showPriceBuffetService=function(index){
    if (buffetItems[index].available==false){
      buffetItems[index].available=true
    } else{
      buffetItems[index].available=false
    }
    return buffetItems;
  }
  //END OF BUFFET MENU
  //BEGINNING OF REGISTRATION
  var regForm=[];

  this.getRegistrationService=function(name,password,lastName,email){
    var regLength=regForm.length;
    regForm[regLength]={
              name:name,
              password:password,
              lastName:lastName,
              email:email              
            }
    return regForm;
  }
  this.displayRegFormService=function(){
    return regForm;
  }
  //END OF REGISTRATION
  //BEGINNING OF INFO SERVICE

  //END OF INFO SERVICE
}

})();
