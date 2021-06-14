var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;

//create feed and lastFed variable here
var feed,lastfeed;

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);  

  //create feed the dog button here
  
  feedDog=createButton("Feed the Dog");
  feedDog.position(875,95);
  feedDog.mousePressed(feedDog);
 
}

function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 
  
 
  //write code to display text lastFed time here

 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);
  foodS--;
  console.log(foodS);
  database.ref('/').update({
    Food:foodS
  })

  //write code here to update food stock and last fed time

/*  var food_stock_val = foodObj.getFoodStock();
  if (food_stock_val <=0){
    foodObj.updateFoodStock(food_stock_val *0);
  
  } else {
    foodObj.updateFoodStock(food_stock_val -1);
  }*/

}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}


