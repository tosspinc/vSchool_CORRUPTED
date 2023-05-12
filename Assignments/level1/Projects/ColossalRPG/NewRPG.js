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
function WalkingEnemy(name, attackPoints, health, hitPoints, inventoryItem) { 
  this.name = name;
  this.attackPoints = attackPoints;
  this.health = health;
  this.hitPoints = hitPoints;
  this.inventoryItem = inventoryItem;
};

//meets fun opening statment for RPG Game.
const playerName = readlineSync.question('\nIt is 1985 and school has just ended. Pack your bags and head off on an awesome outdoor journey through the wilderness. Ok, that actually sounds like fun. \n\nInstead, lets play a little old fashioned RPG and enjoy some of your precious free time playing this short mindless game. \n\nWhile playing this game you will encounter 3 different enemies that you must defeat. \n\nDuring this short and exciting adventure you will have the option to attack, be a wimp and run away or just quit the game. \n\nI will bet that you will take on the challenge and enjoy the most awesome and courageous battles your mind could ever contemplate....JK.  \n\nLets enjoy some mindless fun and conquer these enemies. What is your name?: ');   

//assigns explorer as player.
const player = new Explorer(playerName, 25, 150, 30);              
const walkingEnemies = [                                          
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

let defeatedEnemies = 0;
let battleCount = 0;
let gameOver = false;

while (player.health > 0 && walkingEnemies.length > 0) {            //intiates while loop as player and enemy are alive.
    const walkingRandomEnemy = walkingEnemies[Math.floor(Math.random() * walkingEnemies.length)];   //randomly assigns one of the three enemies listed above.
    const list = readlineSync.keyInSelect(initialGameOptions, `${player.name}, What would you like to do? `, { cancel: false }); //removes cancel option from list: sets to false.
    if (initialGameOptions[list] == 'walk') {                              //verifies if player chooses option one.
        console.clear();                                            //clears the screen.
        playGame(walkingRandomEnemy);                               //if player chooses to walk then calls playGame function.
    } else if (initialGameOptions[list] == 'print') {                      //verifies if player chooses option 2 (print).
        console.clear();                                            //clears the screen.
        console.log(`${player.name}\n playerHealth: ${player.health}\n inventory: ${player.inventory}`);  //displays players name, health and inventory.
    } else if (initialGameOptions[list] == 'quit') {                       //verifies if player chooses to quit game.
        console.clear();                                            //clears the screen.
        break;                                                     //ends game.
    }
};

function playGame(enemy) {
    let enemyCounter = enemyCounters[enemy.inventoryItem];
    
    while (player.health > 0 && enemy.health > 0 && battleCount < 15 && enemyCounter < 10) {
        battleCount++;
        console.log(`\nWhile out exploring on your walk you have encountered a ${enemy.name}! They have attacked you and you received ${enemy.hitPoints} hit points.\n`);
  
        const innerGameDecision = ["Attack", "Escape", "Print your stats", "Quit game"];
  
        while (enemy.hitPoints > 0 && player.health > 0) {
            const decision = readlineSync.keyInSelect(innerGameDecision, "What do you want to do?", { cancel: false });
            console.clear();
            if (innerGameDecision[decision] == "Attack") {
                console.log(`You attacked the ${enemy.name} back and the ${enemy.name} received ${enemy.attackPoints} hit points.`);
                enemy.health = enemy.health - player.attackPoints;
                    if (enemy.health > 0) {
                    console.log(`The ${enemy.name} has ${enemy.health} health points left.`);
                    console.log(`The ${enemy.name} has attacked you back and you received ${enemy.attackPoints} hit points.`);
                    player.health = player.health - enemy.attackPoints;
                    console.log(`You have ${player.health} health points left.`);
                    const decision = readlineSync.keyInSelect(innerGameDecision, "What do you want to do?", { cancel: false });
                    const numAttacks = readlineSync.questionInt(`${player.name}, How many times would you like to attack the ${enemy.name}?`);
                        for (let i = 0; i < numAttacks; i++){
                            const damage = Math.floor(Math.random() * player.hitPoints);
                            enemy.health -= damage;
                            console.log(`\nYou hit ${enemy.name} with ${damage} hit points. The ${enemy.name} now has ${enemy.health} health points remaining.`);
                                if (enemy.health <= 0) {
                                player.inventory += `, ${enemy.inventoryItem}`;
                                defeatedEnemies++;
                                console.log(`\nYou have now defeated the ${enemy.name} and have added a ${enemy.inventoryItem} to your inventory list.`);
                                const index = walkingEnemies.indexOf(enemy);
                                walkingEnemies.splice(index, 1);
                                enemyCounter++;
                                break;
                            }
                        }
                    } else if (innerGameDecision[decision] == "Escape") {
                        const randomChance = Math.floor(Math.random() * 2); // 50% chance of escaping
                        if (randomChance === 0) {
                            console.log(`You have escaped from the ${enemy}}`);
                            walkingEnemies.push(enemy); // add the escaped enemy back to the list
                            return;
                        } else {
                            console.log(`You were unable to escape from ${enemy.name}.`);
                            console.log(`The ${enemy.name} attacked you with ${enemy.attackPoints} hit points.`);
                            player.health = player.health - enemy.attackPoints;
                            console.log(`You have ${player.health} health points left.`);
                        }
                    }
                else if (innerGameDecision[decision] == "Print your stats") 
                {
                    console.log(`Your name is ${player.name}. Your health is at ${player.health} points. Your inventory contains: ${player.inventory}.`);
                } 
                else if (innerGameDecision[decision] == "Quit game") {
                    console.clear;
                    gameOver = true;
                                    }
            };
            if (player.health <= 0) {
                console.log(`Game over! You have been killed by the ${enemy.name}!`);
                return;
            };
            if (enemy.health <= 0) {
                console.log(`Congrats! You have defeated the ${enemy.name}.\n`);
                defeatedEnemies++;
                walkingEnemies.splice(walkingEnemies.indexOf(enemy), 1);
                break;
            };
  
        };
    };
};