 

Object.create // this is the one way of creating object and use it as a constracter

// Object literals

const userid = Symbol("Aakanksha22");
 const userInfo = {
    [userid] : "Student1",
    name : "Aakanksha",
    age : 22,
    location :"Mumbai",
    email : "aakanksha@gmail.com",
 }

 console.log(userInfo.age);
 console.log(userInfo["location"]);
 console.log(userInfo[userid]);
 console.log(typeof userid);

// To manipulate or override the values

userInfo.email = "Student22@gmail.com";
console.log(userInfo);

// Object.freeze(userInfo);
console.log(userInfo);

userInfo.greeting = function () {
    console.log("hello");
}

console.log(userInfo.greeting());
console.log(userInfo.greeting); // fuction return back but don't excute

userInfo.greetingtwo = function () {
    console.log(`hello Naste ${this.name}`); //this is use to excess the property of the object.
}

console.log(userInfo.greetingtwo()) // greetinhtwo is methos that's why () are imp to add.