

const week = [`mon`,`tue`,`wed`];

openingHours= {
    [week[0]]: {
        open: 9,
        close: 12,
    },
    [week[1]]: {
        open: 9,
        close: 12,
    },
    [week[2]]: {
        open: 10,
        close: 2,
    }
};
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
        openingHours:openingHours,
   
};
console.log(restaurant);