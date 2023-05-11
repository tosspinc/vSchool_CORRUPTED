const readlineSync = require('readline-sync');                  //imports the readlinesync module.

function Explorer(name, attackPoints, health, hitPoints) {      //declares function constructor called Explorer and handle four arguments. 
  this.name = name;                                             //assigns the name arguments to the name property.
  this.attackPoints = attackPoints;                             //assigns the attackPoints argument to the attackPoints property.
  this.health = health + 200;                                   //assigns health argument to the health property and add 200 points to ensure defeating all enemies.
  this.hitPoints = hitPoints + 30;                              //assigns hitPoints argument to the hitPoints property and adds 30 points to help in maintaining positive hitPoint blance.
  this.inventory = [];                                          //assigns the empty array of inventory to the Explorer function so inventory items can be added to Explorer.
};

function WalkingEnemy(name, attackPoints, health, hitPoints) { 
  this.name = name;
  this.attackPoints = attackPoints;
  this.health = health;
  this.hitPoints = hitPoints;
};

const playerName = readlineSync.question("Please enter your name: ");   //asks user to enter their name and assigns it to playerName.
const player = new Explorer(playerName, 10, 100, 5);                    //creates a new instance of playerName and handles 4 default arguments.
const walkingEnemies = [                                                //declares walkingEnemies as a constant variable that is an array.  
  new WalkingEnemy('Bear', 60, 100, 50),                                //assigns a new instance of walkingenemy array and assigns it to walkingEnemies with default values assigned to it. it has the name of Bear.
  new WalkingEnemy('Walking Tree', 40, 100, 25),                        //assigns a new instance of walkingenemy array and assigns it to walkingEnemies with default values assigned to it. it has the name of Walking Tree.
  new WalkingEnemy('Fighting Chicken', 30, 100, 20),                    //assigns a new instance of walkingenemy array and assigns it to walkingEnemies with default values assigned to it. it has the name of FIghting Chicken.                    
];

const walkingEnemyInventory = ['Bear Pelt', 'Fishing Pole', 'Chicken']; //creates a constant array called walkingEnenmyInventory and gives it assigned values.


while (player.health > 0 && walkingEnemies.length > 0) {                //initializes the while loop and allows it run as long as both player and enemy are alive.    
    const walkingRandomEnemy = walkingEnemies[Math.floor(Math.random() * walkingEnemies.length)];   //randomly chooses one of the walkingEnemies from the array.
      
    console.log(`\n${player.name}, you have been attacked by ${walkingRandomEnemy.name} and you received ${walkingRandomEnemy.hitPoints} hit points.\n`); //displays that the player has been attacked and taken a number of hit points.
  
    const aeDecision = ['Attack', 'Escape'];                            //declares aeDecision as a constant array with two assigned possible decisions available for the player to choose from.
    
    while (walkingRandomEnemy.health > 0 && player.health > 0) {        //initializes while loop and runs while player and enemy health levels are positive.
      const decision = readlineSync.keyInSelect(aeDecision, 'What do you want to do? Attack or Escape?');  //asks user to make a decision of what action to take.
      if (decision === 0) {                                             //if chooser chooses to attack then this if statement runs.
        console.log(`You attacked ${walkingRandomEnemy.name} and dealt ${player.attackPoints} damage.`); //displays attack information on screen.
        const numAttacks = readlineSync.questionInt(`How many times would you like to attack ${walkingRandomEnemy.name}? `); //asks player to decide if they want how many attacks they want to use at one time - help game go faster.
        for (let i = 0; i < numAttacks; i++){                           //for loop/statement that increments 
          const damage = Math.floor(Math.random() * player.hitPoints);  //generates random damage point number that is between 0 and 1. math.floor rounds the number to a whole number. * player.hitPoints allows for maximum possible amount of hit points to be delivered in a single attack. 
          walkingRandomEnemy.health -= damage;                          //takes aways the determined max points generated from above line of code.
          console.log(`You attacked ${walkingRandomEnemy.name} and dealt ${damage}. ${walkingRandomEnemy.name} has ${walkingRandomEnemy.health} of health remaining.`);
        }
      } else {
          console.log(`\nYou have escaped from ${walkingRandomEnemy.name}`);    //displays that if the first part of the if statements does not execute then this does and it shows the player escaped from battling the enemy.
          break;     //pauses code or breaks the loop.
      } 
    }
    
    if (player.health <= 0) {                                                   // if statement runs if players health points fall below 0.
      console.log(`\nYou were defeated by ${walkingRandomEnemy.name} and the game has ended. `); //displays defeated as previous line of code was determined value of less than or equal to zero.
      break;                                                                   //pauses code or breaks the loop.
    } else if (walkingRandomEnemy.health <= 0) {                                //runs if enemh health points are at or below 0.
      console.log(`\nCongratulations ${player.name}, You have defeated the ${walkingRandomEnemy.name}. `); //dispalys that you have beaten the enemy as previous line of code determined that the player health points was at or below 0 points value.
      player.health += 50;                                                  //adds an additional 50 points to player health -- Heals player after defeating the enemy to keep game running longer.
      walkingEnemies.splice(walkingEnemies.indexOf(walkingRandomEnemy), 1); //removes the defeated enemy from the array and lets the array continue with remaining enemies until they are all beaten. Each enemy is removed from array as it is defeated.
    }
  }
  
  if (walkingEnemies.length === 0) {                                        //runs once walkingEnemies array is empty or once all the enemies have been removed by the previous line of code once defeated.
    player.inventory = player.inventory.concat(walkingEnemyInventory);      //removes and adds together the inventory items originally assigned to to enemyarray and adds them to the players inventory array.
    console.log(`\nCongratulations, ${player.name}! You have defeated all the enemies.`); //dispalys message with players name that they defeated all enemies and won game.
    console.log(`Your inventory: ${player.inventory.join(', ')}`);          //displays all the enemies inventory items that were added to the players invetory array from line 63 of the code.
    console.log(`Your health: ${player.health}`);                           //displays the final value of the players health after defeating the enemy in the game.
  }
  