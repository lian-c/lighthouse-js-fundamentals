const raining = false;
const temperature= 25;
if(raining){
console.log("Don't forget your umbrella!");
} 
if (!raining){
  console.log("Leave your umbrella at home!");
}
if(temperature <-40 || temperature > 40){
console.log("Maybe going outside isn't such a great idea..");
} else {
  console.log("It is okay to go out!");
} 



const isCitizen = true;
const age = 26;
if(isCitizen && age > 18){
  console.log("You are eligible to vote");
}