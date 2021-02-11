const restaurant = {
    name:`sweet magic`,
    location: [`vijayawada`,`hyderabad`,`vizag`],
    mainmenu: [`chickendumbiryani`,`muttonCurry`,`prawns biryani`],
    startermenu:[`dragonchicken`,`chilli chicken`,`chicken lollipop`],
    order: function(starterindex,mainindex){
        return[this.startermenu[starterindex],this.mainmenu[mainindex]];
    },
    orderDelivery:function({starterindex=1,mainindex=2,address,}){
        console.log(`order recieved ${this.startermenu[starterindex]} and ${this.mainmenu[mainindex]} and will be delivered to ${address}`);
    },
    orderChilli:function(mainIngredients,...otheringredients){
        console.log(mainIngredients);
        console.log(otheringredients);
        },
    openingHours: {
        mon: {
            open: 9,
            close: 12,
        },
        tue: {
            open: 9,
            close: 12,
        },
        wed: {
            open: 10,
            close: 2,
        },
    },
}
//rest pattern sample
const [a,b,...others] = [9,6,3,1];
console.log(a,b);
console.log(others);

const [chickendumbiryani, ,muttonCurry,...otherfoods] = [...restaurant.mainmenu,...restaurant.startermenu];
console.log(otherfoods);

//objects 

const {tue,...otherdays} =restaurant.openingHours;
console.log(otherdays);

//functions 
const add = function(...numbers){
    let sum = 0;
    for (let i = 0; i <numbers.length;i++)
    sum += numbers[i];
    console.log(sum);
}
const x = [9,99,999,9999]
add(...x);

restaurant.orderChilli(`chicken`,`mushroom`,`tandoori`);