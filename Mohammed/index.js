
// 1.

let powerFunction =  function(x, y)
{
    let powerRes = 1;

    for (let i=0; i<y; i++)
    {
        powerRes = powerRes * x;
        console.log(powerRes); 
    }
    
    return powerRes;
}


let numValidation = function(x, y)
{   
    if ( !isNaN(x) && !isNaN(y) )
    {
        console.log(powerFunction(x, y));
    }
    else
    {
        console.log(`The numbers ${x} and ${y} are both Integers`);
    }
}


let x = 2;
let y = 8; 
numValidation(x,y);

// *******************************************

// 2-

let myFavoriteFruit = 'mango';

function printFavoriteFruit()
{
    myFavoriteFruit = 'water milone';
    console.log(`My favorite fruit is ${myFavoriteFruit}`);
}

printFavoriteFruit();

// ==============================================

// 3-

const exponent = (a, b) =>
{
    let result = 1;
    for (let i=0; i<b; i++)
    {
        result = result * a;
    }
    return result;
}

//console.log(result);

/*
Accessing the variable result from outside the function exponent will
throw an error that is because it is outside the scope in which it is declared
*/

 let a = 2;
 let b = 5;
 let po = exponent(a, b);
 console.log(po);