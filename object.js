// object literal
 const mySym = Symbol("key1");
 const abuser = {
    name: "abhay",
    age: 19,
    "full name": "abhayraj doot",
    [mySym]: "my name is abhay ",
    location: "jaipur",
    email: "abhay@g.com",
    IsLoggedIn: false,
    lastLoginDays: ["monday", "sunday"]

 }
 console.log(abuser.email);
 console.log(abuser["full name"]);
 console.log(abuser[mySym]);
  abuser.greeting = function(){
    console.log("helloo abuser");
  }
  abuser.greetingtwo = function(){
    console.log('hellooo abhay raj ,${this.name}');
  }
  console.log(abuser.greeting());
  console.log(abuser.greetingtwo());