const readlineSync = require('readline-sync');                  //imports the readlinesync module.

const aeDecision = ['Attack', 'Escape', 'Print', 'End Game'];   //declares aeDecision as constant array with decisions for player to choose from.

//declares player function constructor.
function Explorer(name, attackPoints, health, hitPoints) {      //declares Explorer constructor and handle four arguments. 
  this.name = name;                                             //assigns the name arguments to the name property.
  this.attackPoints = attackPoints;                             //assigns the attackPoints argument to the attackPoints property.
  this.health = health;                                    //assigns health argument to the health property.
  this.hitPoints = hitPoints;                              //assigns hitPoints argument to the hitPoints property.
  this.inventory = '';                                          //assigns the empty string of inventory to the Explorer constructor.
};

//declares Enemy function Constructor.
function WalkingEnemy(name, attackPoints, health, hitPoints, inventoryItem) { //declares walkingEnemy constructor, handles 5 arguments.
  this.name = name;                                                             //assigns name argumetn to name property.
  this.attackPoints = attackPoints;                                             //assigns attackPoints to attackPoints property.
  this.health = health;                                                         //assigns health to health propery.
  this.hitPoints = hitPoints;                                                   //assigns hitPoints to hitPoints property.
  this.inventoryItem = inventoryItem;                                           //assigns inventoryItem to inventoryItem property.
};

//meets fun opening statment for RPG Game.
const playerName = readlineSync.question('\nIt is 1985 and school has just ended. Pack your bags and head off on an awesome outdoor journey through the wilderness. Ok, that actually sounds like fun. \n\nInstead, lets play a little old fashioned RPG and enjoy some of your precious free time playing this short mindless game. \n\nWhile playing this game you will encounter 3 different enemies that you must defeat. \n\nDuring this short and exciting adventure you will have the option to attack, be a wimp and run away or just quit the game. \n\nI will bet that you will take on the challenge and enjoy the most awesome and courageous battles your mind could ever contemplate....JK.  \n\nLets enjoy some mindless fun and conquer these enemies. What is your name?: ');   

//assigns explorer as player.
const player = new Explorer(playerName, 25, 150, 30);              //declares player as a constant and assigns a new instance of explorer to it and handles 4 arguments.
const walkingEnemies = [                                            //declares walkingEnemies as a constant variable.
    new WalkingEnemy('Bear', 15, 100, 20, 'Bear Pelt'),             //assigns Bear as an enemy.
    new WalkingEnemy('Walking Tree', 15, 100, 20, 'Fishing Pole'),  //assigns Walking tree as an enemy
    new WalkingEnemy('Fighting Chicken', 15, 100, 20, 'Chicken'),   //assigns Fighting chicken as an enemy.        
];

const initialGameOptions = ['walk', 'print', 'quit'];                      //assigns Walk, Print and Quit as game options and meets RPG Requirements.

const enemyCounters = {
'Bear Pelt' : 0,
'Fishing Pole': 0,
'Chicken': 0,
};

let battleCount = 0;                                                    //sets variable battleCount value to zero.
let gameOver = false;                                                   //sets variable gameOver to false.

//meets game requirements.
while (player.health > 0 && walkingEnemies.length > 0) {            //intiates while loop as player and enemy are alive.
    const walkingRandomEnemy = walkingEnemies[Math.floor(Math.random() * walkingEnemies.length)];   //randomly assigns one of the three enemies listed above.
    const list = readlineSync.keyInSelect(initialGameOptions, `${player.name}, What would you like to do? `, { cancel: false }); //removes cancel option from list: sets to false.
    if (initialGameOptions[list] == 'walk') {                       //verifies if player chooses option one.
        console.clear();                                            //clears the screen.
        playGame(walkingRandomEnemy);                               //if player chooses to walk then calls playGame function.
    } else if (initialGameOptions[list] == 'print') {               //verifies if player chooses option 2 (print).
        console.clear();                                            //clears the screen.
        console.log(`${player.name}\n playerHealth: ${player.health}\n inventory: ${player.inventory}`);  //displays players name, health and inventory.
    } else if (initialGameOptions[list] == 'quit') {                //verifies if player chooses to quit game.
        console.clear();                                            //clears the screen.
        break;                                                      //ends game.
    }
};

function playGame(enemy) {
    let enemyCounter = enemyCounters[enemy.inventoryItem];
    
    
    while (player.health > 0 && enemy.health > 0 && battleCount < 15 && enemyCounter < 3) {    //checks to ensure both enemy and player health points are more than zero. checks there are no more than 15 battles and makes sure the number of enemies defeated are under 4.
        battleCount++;
        console.log(`\nWhile out exploring on your walk you have encountered a ${enemy.name}! They have attacked you and you received ${enemy.hitPoints} hit points.\n`);
  
        const innerGameDecision = ["Attack", "Escape"];     //declares innerGameDecision as a constant variable with only two options.
  
        while (enemy.health > 0 && player.health > 0) {  //game continues as long as enemy and player health points are > zero.
        const decision = readlineSync.keyInSelect(innerGameDecision, "What do you want to do?", { cancel: false }); //removes the cancel option from the list.
        console.clear();    //clears the screen.
        if (innerGameDecision[decision] == "Attack") {  //attack portion of game initiates when user selects attack option.
            console.log(`You attacked the ${enemy.name} back and the ${enemy.name} received ${player.attackPoints} hit points.`);
            enemy.health = enemy.health - player.attackPoints;  //subtracks player attack points from enemy health points.
            
            if (enemy.health > 0) { //runs as long as enemy health points are above zero.
              console.log(`The ${enemy.name} has ${enemy.health} health points left.`);
              
              console.log(`The ${enemy.name} attacked you back and you received ${enemy.hitPoints} hit points.`);
              player.health = player.health - enemy.hitPoints; //subtracts enemy hit points from player health points.
              console.log(`You have ${player.health} health points left.`); //displays the players current health points.
              
            } else {
              console.log(`You defeated the ${enemy.name}!`);   //runs if enemy health points are below zero.
              enemyCounter++;                                   //counts the number of enemies defeated. 
              player.health += 50;                              //adds 50 health points to the player after defeating an enemy.
              player.inventory += `, ${enemy.inventoryItem}`;
              console.log(`You have acquired a ${enemy.inventoryItem}.`);
              walkingEnemies.splice(walkingEnemies.indexOf(enemy), 1);  //removes an enemy from array once defeated.
              
              if (defeatedEnemies == 3) {                   //checks to verify if all 3 enemies have been defeated.
                console.log(`Congratulations ${player.name}! You have defeated all three enemies!`);
                console.log(`Player: ${player.name}\nHealth: ${player.health}\nInventory: ${player.inventory}`);
                gameOver = true;
              }
                break;
            }
          } else if (innerGameDecision[decision] == "Escape") { //verifies if player selects option to escape in game.
            const randomChance = Math.random() < .5;            //calculatea a 50% chance for player to escape enemy when selected.
            if (randomChance) {                                 //if player is able to escape then this runs.
                console.log(`\n${player.name}, You were able to successfuly escape from the ${enemy.name}.`);
                return;
            }else {                                             //if player is not able to escape enemy this code runs.
                console.log(`\n${player.name}, You were unable to escape from the ${enemy.name}. The ${enemy.name} has attacked you and you have received ${enemy.attackPoints} hit points.`);
                player.health = player.health - enemy.attackPoints;
                console.log(`\n${player.name}, You have ${player.health} health points left.`);
            };
            
          };
        };
    
        };
        
    if (player.health > 0 && enemy.health <= 0) {               //verifies that player health points are higher than enemy health points.
        //console.log(`You have defeated the ${enemy.name}!`);
        player.inventory = enemy.inventoryItem;                 //assigns enemy inventoryItem to player inventory.
        enemyCounters[enemy.inventoryItem]++;
        defeatedEnemies++;
        walkingEnemies.splice(walkingEnemies.indexOf(enemy), 1);    //removes enemy defeated from enemy array.
    } else if (player.health <= 0) {                                //if player health points less than zero player loses.
        console.log(`You have been defeated by the ${enemy.name}.`);
        gameOver = true;
    } else if (battleCount >= 15 || enemyCounter >= 10) {   //if battlCount is higher than 15 or enemyCounter is higher than 10 then verifies is true and runs the line of code below.           
        console.log(`You have fought long enough against the ${enemy.name}.`);
        walkingEnemies.splice(walkingEnemies.indexOf(enemy), 1); //removes current enemy battling from enemy array.
    };

};