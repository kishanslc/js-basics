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
    get openingHours() {
        return this._openingHours;
    },
    set openingHours(value) {
        this._openingHours = value;
    },
};

const {
    name,openingHours,location
} = restaurant;
console.log(name,openingHours,location);
//name changing
const{name:restaurantName,openingHours:hours,location:address} = restaurant;
console.log(restaurantName,hours,address);
//default values

const { menu =[],startermenu:starters=[]}= restaurant;
console.log(menu,starters);
//switching
let a=1;
let b=2;
const obj = {a:20,b:30,c:14};
({a,b} = obj);
console.log(a,b);
//nested objects
//const {wed:{open,close}} = hours;
//console.log(open,close);

restaurant.orderDelivery({
    starterindex:1,
    address:`near pvp vijayawada `,
});

