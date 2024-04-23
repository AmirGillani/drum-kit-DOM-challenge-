function add(num1,num2)
{
    return num1+num2;
}
function sub(num1,num2)
{
    return num1-num2;
}
function mul(num1,num2)
{
    return num1*num2;
}
function div(num1,num2)
{
    return num1/num2;
}


function highOrderFunction(num1,num2,operator)
{
    // third function is called its value is returned then that value is return by this function

    return operator(num1,num2);
}

console.log(highOrderFunction(1,2,add));

// objects

var object= { name:"Amir", age:12, city:"Lahore"};

// this is constructor function which is similar to class declaration

function ObjectConstructor(name,age,city)
{
    // object variables = paramer value
this.name=name;
this.age=age;
this.city=city;
}

var object= new ObjectConstructor("Amir", 12,"Lahore");