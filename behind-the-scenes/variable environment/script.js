//console.log(me);
//console.log(age);
//console.log(year);


//var me ='jones';
//let age = 23;
//const year =1991;

//console.log(addDecl(2,3));
//console.log(addExp(2,3));
//console.log(addArrow(2,3));




//function addDecl(a,b){
    //return a + b;
//}
//const addExp = function(a,b){
  //  return a+b;
//}

//var addArrow = (a,b) => a+b;

if (!numProducts)  deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart(){
    console.log('ALL products deleted');
}

const jonas ={
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037-this.year);
    }
};
jonas.calcAge();