'use strict';

function calcAge(birthYear){
    const age = 2037-birthYear;
    const firstName ='jones';
    

    function printAge()
    {
        const output =  `${firstName},You are ${age},born in ${birthYear}`;
        console.log(output);
    
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const str = `oh, and you are a millenial, ${firstName}`;
            console.log(str);
            function add(a,b){
                return a+b;
            }
            output = 'NEWOUTPUT';
        }

        //console.log(str);
        console.log(millenial);
        //console.log(add(2,3));
        console.log(output);
    }
    printAge();
    return age;
}
const firstName = 'jonas';
calcAge(1991);

