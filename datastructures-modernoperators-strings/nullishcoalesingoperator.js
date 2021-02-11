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


restaurant.numguests=0;
const guests = restaurant.numguests ?? 10;
console.log(guests);