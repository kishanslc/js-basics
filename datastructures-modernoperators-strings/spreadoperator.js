const restaurant = {
    name:`sweet magic`,
    location: [`vijayawada`,`hyderabad`,`vizag`],
    mainmenu: [`chicken dumbiryani`,`mutton curry`,`prawns biryani`],
    startermenu:[`dragon chicken`,`chilli chicken`,`chicken lollipop`],
    order: function(starterindex,mainindex){
        return[this.startermenu[starterindex],this.mainmenu[mainindex]];
    },
    orderDelivery:function({starterindex=1,mainindex=2,address,}){
        console.log(`order recieved ${this.startermenu[starterindex]} and ${this.mainmenu[mainindex]} and will be delivered to ${address}`);
    },
    orderPasta:function(ing1,ing2,ing3)
    {
        console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
    },
};

const arr = [`raja`,`kishan`,`vamsi`];
//const newArr = [`pradeep`,`harsha`,arr[0],arr[1],arr[2]];
//console.log(newArr);
//console.log(...newArr);
const newArr =[`pradeep`,`harsha`,...arr];
console.log(newArr);

//copying
const mainMenuCopy = [...restaurant.mainmenu]
console.log(mainMenuCopy);
//copying objects and adding new objects
const newRestaurant = { founder : `kishan`,...restaurant,foundedIn:1998,};
console.log(newRestaurant);

const ingredients = [prompt("lets make pasta with ingredient 1?"), prompt("ingredient2?"),prompt("ingredient3?"),];
console.log( ingredients);

restaurant.orderPasta(...ingredients);




