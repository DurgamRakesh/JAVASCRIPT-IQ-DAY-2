function user1(name,id){
    this.name = name;
    this.id = id;
}
let user = new user1('abc', 10001)
console.log(user)

// <----------------------------------------------->

function myfun1(name){
    console.log('hello',name)
}
function myfun2(callback){
    let lang = 'javascript';
    callback(lang)
}
myfun2(myfun1);

// <----------------------------------------------->

function person(name,age){
    this.name = name;
    this.age = age;
}
person.prototype.state = 'ts';
let p = new person('abc', 23);
console.log(p.state);

// <----------------------------------------------->

function emp1(name,age,id){
    this.name = name;
    this.age = age;
    this.id = id;
};

function emp2(name,age,id,state){
    emp1.call(this,name,age,id);
    this.state = state
}

let e1 = new emp1('abc',23,10001);
console.log(e1);
let e2 = new emp2('abc',23,10001,'ts');
console.log(e2);

