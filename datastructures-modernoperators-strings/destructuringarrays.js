const arr = [`raja`,`pradeep`,`vamsi`];
//const a = arr[0];
//const b = arr[1];
//const c = arr[2];
//console.log(a,b,c);

const [a,b,c] = [`raja`,`pradeep`,`vamsi`];
console.log(a,b,c);

//nested arrays

const kishan = [1,2,[3,4]];
const [v,y,[x,z]] =[1,2,[3,4]];
console.log(kishan);
console.log(v,y,x,z);

//array method
const restaurant = {
    name:`sweet magic`,
    location: [`vijayawada`,`hyderabad`,`vizag`],
    mainmenu: [`chicken dumbiryani`,`mutton curry`,`prawns biryani`],
    startermenu:[`dragon chicken`,`chilli chicken`,`chicken lollipop`],
    order: function(starterindex,mainindex){
        return[this.startermenu[starterindex],this.mainmenu[mainindex]];
    }
};
let [first,second] = restaurant.location;
console.log(first,second);
//switching
[first,second] = [second,first];
console.log(first,second);
console.log(restaurant.order(2,0));
const [starter,maincourse]=restaurant.order(2,0);
console.log(starter,maincourse);
//default
//let [u,r,w]=[7,8];
//console.log(u,r,w);

let [e=1,r=1,w=1] = [7,8];
console.log(e,r,w);

