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












console.log(0 || 10);
console.log(``||`jonas`);
console.log(99999 || `jonas`);

console.log(0 || undefined||`jonas`);

//if

//const guests1 = restaurant.numGuests ? restaurant.numGuests:10;
//console.log(guests1);

const  guests1 = restaurant.numGuests||10;
console.log(guests1);

//&&

console.log(0 && 10);
console.log(10 && 20);
console.log(`jonas` && `kishan` && 0);
restaurant.orderChilli && restaurant.orderChilli(`chicken`,`mushroom`);