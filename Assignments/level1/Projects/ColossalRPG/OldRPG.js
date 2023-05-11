const readlineSync = require('readline-sync');  //allows use readline-sync to be used so program doesn't require html or css files.

//player constructor.
function Explorer(name, attackPoints, health, hitPoints) { //defines player function as Explorer and defines objects to Explorer. 
    this.name = name;                               // assigns name to the name of the explorer.
    this.attackPoints = attackPoints;               // assigns value of attack points to the explorer.
    this.health = health;                           // assign health value point to explorer. hit point deducted from to determine when dies.
    this.hitPoints = hitPoints;                     // assigns value of strength for attacking enemy.
    this.inventory = [];                            // assigns empty array to inventory for allowing enemy objects added as inventory items.
};

// enemy constructor.
function WalkingEnemy(name, attackPoints, health, hitPoints) { //creates WalkingEnemy as a function and assigns objects to each walking enemy.
    this.name = name;                                   //assigns value of name to walking enemy.
    this.attackPoints = attackPoints;                         //assigns value of attack point of walking enemy being battled.
    this.health = health;                               //assigns value of health strength of enemy to determine when it will die.
    this.hitPoints = hitPoints;                          //assigns value of amount of strength points in use as hit points against player.
};

// function VillageEnemy(name, attackPoints, health, HitPoints) {
//     this.name = name;
//     this.attackPoints = attackPoints;
//     this.health = health;
//     this.hitPoints = hitPoints;
// };

//defines my initial 3 random enemies player will encounter.
const walkingEnemies = [                                //assigns walkingEnemies as a constant varialbe.
    new WalkingEnemy('Bear', 60, 100, 50),              //assigns name of first enemy, attack points, health value and strength points to first enemy.
    new WalkingEnemy('Walking Tree', 40, 100, 25),      //assigns name of second enemy, attack points, health value and strength points to second enemy.
    new WalkingEnemy('Fighting Chicken', 30, 100, 20),  //assigns name of third enemy, attack points, health value and strength points to third enemy.
];

// //const villageEnemies = [
//     new Enemy2('Boxing Kangaroo', 50, 100, 50),
//     new Enemy2('Wizard' 40, 100, 30),
//     new Enemy2('Strong Man', 80, 100, 60),
//     new Enemy2('Evil Orc' 40, 100, 40),
//     new Enemy2('Ghost' 20, 100, 20),
//     new Enemy2('Thief', 20, 100, 20),
//     new Enemy2('Troll' 40, 100, 30),
//     new Enemy2('Crazy Person', 20, 100, 25),
// ];

//defines the inventory.
const walkingEnemyInventory = ['Bear Pelt', 'Fishing Pole', 'Chicken']; //declares walkingEnemyInventory as a constant variable and assigns inventory items accordingly. 
// const VillageEnemyInventory = ['Boxing Gloves', 'knife', 'club', 'Healing Potion', 'Super Strength', 'Cattle Prod', 'Immobilizing Spell', 'Wand']; //declares VillageEnemyInventory as a constant variable and assigns inventory items accordingly.

//create player object.
//const player = readlineSync.question('Lets enjoy an old fashioned RPG. First though what is your Name? '); 
//const Explorer = new Explorer(explorerName, 80, 100, 80); // assigning values to player object.

// //create enemy object
// const randomEnemies = [enemy1, enemy2, enemy3];             //declares randomEnemies as a constant variable and assigns appropriately data to it.    
// const Enemy1 = new Enemy('Bear', 20, 100, 60);              //assigns first random enemy as enemy1 with the name, attack point value, health value and attack strenght.
// const Enemy2 = new Enemy('Walking Tree', 20, 100, 60);      //assigns second random enemy as enemy1 with the name, attack point value, health value and attack strenght.
// const Enemy3 = new Enemy('Fighting Chicken', 20, 100, 60);  //assigns third random enemy as enemy1 with the name, attack point value, health value and attack strenght.


const gameOptions = ['walk', 'print', 'quit'];
const locationChoices = ['tavern', 'homes', 'church', 'hotel', 'store', 'park', 'zoo', 'hospitals'];

readlineSync.question(`\nHello ${playerName}, welcome to The Wizards Village where you can partake in a little old fashioned RPG fun...Hit Enter and let's play.`);    //displays the name entered and explains to the user what is going to take place.            

//map of play area.
const gridWidth = 34;
const gridHeight = 14;
const grid = [];

//Create the grid
for (let row = 0; row < gridHeight; row++) {
  grid[row] = [];
  for (let col = 0; col < gridWidth; col++) {
    grid[row][col] = ".";
  }
};

//Place some objects on the grid
//path location on grid.
grid[0][3] = "p"; grid[0][4] = "p"; grid[1][2] = "p"; grid[1][3] = "p"; grid[2][0] = "p"; grid[2][1] = "p"; grid[2][2] = "p"; grid[3][0] = "p"; grid[3][1] = "p"; 
grid[3][2] = "p"; grid[4][2] = "p"; grid[4][3] = "p"; grid[5][3] = "p"; grid[5][4] = "p"; grid[5][5] = "p"; grid[6][4] = "p"; grid[6][5] = "p";

//village top border location on grid.
grid[0][6] = "v"; grid[0][7] = "v"; grid[0][8] = "v"; grid[0][9] = "v"; grid[0][10] = "v"; grid[0][11] = "v"; grid[0][12] = "v"; grid[0][13] = "v"; grid[0][14] = "v"; 
grid[0][15] = "v"; grid[0][16] = "v"; grid[0][17] = "v"; grid[0][18] = "v"; grid[0][19] = "v"; grid[0][20] = "v"; grid[0][21] = "v"; grid[0][22] = "v"; grid[0][23] = "v"; 
grid[0][24] = "v"; grid[0][25] = "v"; grid[0][26] = "v"; grid[0][27] = "v"; grid[0][28] = "v"; grid[0][29] = "v"; grid[0][30] = "v"; grid[0][31] = "v"; grid[0][32] = "v"; 
grid[0][33] = "v";  

//village left border location on grid
grid[1][6] = "v"; grid[2][6] = "v"; grid[3][6] = "v"; grid[4][6] = "v"; grid[5][6] = "v"; grid[6][6] = "v"; grid[7][6] = "v"; grid[8][6] = "v"; grid[9][6] = "v"; 
grid[10][6] = "v"; grid[11][6] = "v"; grid[12][6] = "v"; grid[13][6] = "v";

//village right border location on grid.
grid[1][33] = "v"; grid[2][33] = "v"; grid[3][33] = "v"; grid[4][33] = "v"; grid[5][33] = "v"; grid[6][33] = "v"; grid[7][33] = "v"; grid[8][33] = "v";
grid[9][33] = "v"; grid[10][33] = "v"; grid[11][33] = "v"; grid[12][33] = "v";

//village bottom border location on grid.
grid[13][7] = "v"; grid[13][8] = "v"; grid[13][9] = "v"; grid[13][10] = "v"; grid[13][11] = "v"; grid[13][12] = "v"; grid[13][13] = "v"; grid[13][14] = "v"; 
grid[13][15] = "v"; grid[13][16] = "v"; grid[13][17] = "v"; grid[13][18] = "v"; grid[13][19] = "v"; grid[13][20] = "v"; grid[13][21] = "v"; grid[13][22] = "v"; 
grid[13][23] = "v"; grid[13][24] = "v"; grid[13][25] = "v"; grid[13][26] = "v"; grid[13][27] = "v"; grid[13][28] = "v"; grid[13][29] = "v"; grid[13][30] = "v"; 
grid[13][31] = "v"; grid[13][32] = "v"; grid[13][33] = "v";  

//tavern location on grid.
grid[2][8] = "t"; grid[2][9] = "a"; grid[2][10] = "v"; grid[2][11] = "e"; grid[2][12] = "r"; grid[2][13] = "n"; 
grid[3][8] = "t"; grid[3][9] = "a"; grid[3][10] = "v"; grid[3][11] = "e"; grid[3][12] = "r"; grid[3][13] = "n";

//church location on grid.
grid[2][16] = "c"; grid[3][16] = "h"; grid[4][16] = "u"; grid[5][16] = "r"; grid[6][16] = "c"; grid[7][16] = "h"; 
grid[2][17] = "c"; grid[3][17] = "h"; grid[4][17] = "u"; grid[5][17] = "r"; grid[6][17] = "c"; grid[7][17] = "h";

//hotel location on grid
grid[2][20] = "h"; grid[2][21] = "o"; grid[2][22] = "t"; grid[2][23] = "e"; grid[2][24] = "l"; 
grid[3][20] = "h"; grid[3][21] = "o"; grid[3][22] = "t"; grid[3][23] = "e"; grid[3][24] = "l"; 

//store location on grid.
grid[2][27] = "s"; grid[2][28] = "t"; grid[2][29] = "o"; grid[2][30] = "r"; grid[2][31] = "e"; 
grid[3][27] = "s"; grid[3][28] = "t"; grid[3][29] = "o"; grid[3][30] = "r"; grid[3][31] = "e";

//zoo location on grid
grid[5][29] = "z"; grid[5][30] = "o"; grid[5][31] = "o";
grid[6][29] = "z"; grid[6][30] = "o"; grid[6][31] = "o";
grid[7][29] = "z"; grid[7][30] = "o"; grid[7][31] = "o"; 

//park location on grid
grid[5][20] = "p"; grid[5][21] = "a"; grid[5][22] = "r"; grid[5][23] = "k"; grid[5][24] = "p"; grid[5][25] = "a"; grid[5][26] = "r"; grid[5][27] = "k"; 
grid[6][20] = "p"; grid[6][21] = "a"; grid[6][22] = "r"; grid[6][23] = "k"; grid[6][24] = "p"; grid[6][25] = "a"; grid[6][26] = "r"; grid[6][27] = "k"; 
grid[7][20] = "p"; grid[7][21] = "a"; grid[7][22] = "r"; grid[7][23] = "k"; grid[7][24] = "p"; grid[7][25] = "a"; grid[7][26] = "r"; grid[7][27] = "k"; 

//bank location on grid
grid[10][20] = "b"; grid[10][21] = "a"; grid[10][22] = "n"; grid[10][23] = "k"; 
grid[11][20] = "b"; grid[11][21] = "a"; grid[11][22] = "n"; grid[11][23] = "k";

//hospital location on grid
grid[10][16] = "h"; grid[10][17] = "o"; grid[10][18] = "s"; grid[10][19] = "p"; grid[10][20] = "i"; grid[10][21] = "t"; grid[10][22] = "a"; grid[10][23] = "l";
grid[11][16] = "h"; grid[11][17] = "o"; grid[11][18] = "s"; grid[11][19] = "p"; grid[11][20] = "i"; grid[11][21] = "t"; grid[11][22] = "a"; grid[11][23] = "l";

//homes location on grid
grid[5][9] = "h"; grid[5][10] = "o"; grid[5][11] = "m"; grid[5][12] = "e"; grid[5][13] = "s";
grid[6][9] = "h"; grid[6][10] = "o"; grid[6][11] = "m"; grid[6][12] = "e"; grid[6][13] = "s";
grid[7][9] = "h"; grid[7][10] = "o"; grid[7][11] = "m"; grid[7][12] = "e"; grid[7][13] = "s";
grid[8][9] = "h"; grid[8][10] = "o"; grid[8][11] = "m"; grid[8][12] = "e"; grid[8][13] = "s"; 
grid[9][9] = "h"; grid[9][10] = "o"; grid[9][11] = "m"; grid[9][12] = "e"; grid[9][13] = "s"; 
grid[10][9] = "h"; grid[10][10] = "o"; grid[10][11] = "m"; grid[10][12] = "e"; grid[10][13] = "s"; 
grid[11][9] = "h"; grid[11][10] = "o"; grid[11][11] = "m"; grid[11][12] = "e"; grid[11][13] = "s";
grid[9][26] = "h"; grid[9][27] = "o"; grid[9][28] = "m"; grid[9][29] = "e"; grid[9][30] = "s";
grid[10][26] = "h"; grid[10][27] = "o"; grid[10][28] = "m"; grid[10][29] = "e"; grid[10][30] = "s";
grid[11][26] = "h"; grid[11][27] = "o"; grid[11][28] = "m"; grid[11][29] = "e"; grid[11][30] = "s";

// Display the grid
function displayGrid(){
    for (let row = 0; row < gridHeight; row++) {
      console.log(grid[row].join(" "));
    };
}
console.log("\n Please view the layout for The Wizard's Village.");
displayGrid();
readlineSync.question(`\n ${playerName} Press Enter when you are ready to continue.`);
playGame();

function playGame() {
    displayGrid()                       // puts grid at top of each running function, need to call in each function..
    while (true) {
    const list = readlineSync.keyInSelect(gameOptions, `${playerName}, What would you like to do? `);
 
       if (gameOptions[list] == 'walk'){
            console.log(`${playerName}, choose where you would like to go in the village?: `);
            villageChoices();
        } else if(gameOptions[list] == 'print'){
            console.log(`${playerName}\n playerHealth: ${playerHealth}\n inventory: ${inventory}`);
        } else if (gameOptions[list] == 'quit'){
            return playerHealth = 0; 
        }
    };
};


//boxing kangaroo enemy fights in zoo.
//const zooEnemy = {          //declares zooEnemy as a constant variable.
//     enemy: "boxingKangaroo", //assigns boxing kangaroo to zooEnemy.
//     hitPoints: 50            //assigns value of 25 to hitpoints.
// };

// //wizard enemy fights in homes.
// const homeEnemy = {         //declares homeEnemy as a constant variable.
//     enemy: "wizard",        //assigns wizard to homeEnemy.
//     hitPoints: 40           //assigns value of 30 to hitpoints.
// };

// //strong man enemy fights in tavern.
// const tavernEnemy = {       //decalres tavernEnemy as a constant variable.
//     enemy: "strongMan",     //assigns strongMan to tavernEnemy.   
//     hitPoints: 60           //assigns value of 50 to hitpoints.
// };

//evil orc enemy fights in chruch.
// const churchEnemy = {       //declares churchEnemy as a constant variable.
//     enemy: "evilOrc",       //assigns evilOrc to churchEnemy.
//     hitPoints: 30           //assigns value of 30 to hitpoints.
// };

//Ghost enemy fights in hotel.
// const hotelEnemy = {        //declares hotelEnemy as a constant variable.
//     enemy: "ghost",         //assigns ghost to hotelEnemy.
//     hitPoints: 40           //assigns value of 25 to hitpoints.
// };

//theif enemy fights in store.
// const storeEnemy = {        //declares storeEnemy as a constant variable.
//     enemy: "thief",         //assigns thief to storeEnemy.
//     hitPoints: 60           //assigns value of 75 to hitpoints.
// };

//Troll enemy fights in park. 
// const parkEnemy = {         //decalres parkEnemy as a constant variable.
//     enemy: "troll",         //assigns troll to parkEnemy.
//     hitPoints: 80          //assigns value of 100 to hitpoints.
// };

//Crazy person enemy fights in hospital.
// const hospitalEnemy = {     //declares hospitalEnemy as a constant variable.
//     enemy: "crazyPerson",   //assigns crazyPerson to hospitalEnemy.
//     hitPoints: 60           //assigns value of 30 to hitpoints.
// };

//const enemies = [enemyOne, enemyTwo, enemyThree];

// const enemies = [enemyOne, enemyTwo, enemyThree];
//     const enemyOne = {
//         enemy: 'rabbidDog',
//         hitPoints: 20
//     };
    
//     const enemyTwo = {
//         enemy: 'crazedRaccoon',
//         hitPoints: 20
//     };
    
//     const enemyThree = {
//         enemy: 'fightingChicken',
//         hitPoints: 20
//     };

//     enemy = enemies[0];
function villageChoices(){
    const list2 = readlineSync.keyInSelect(locationChoices, ' Choose where you would like to go.');
    displayGrid();
    let enemy = null;         //user initializes enemy when they choose to go to the tavern.
    if (locationChoices[list2] === 'tavern') {
        //enemy = enemies[0];
        //enemy = enemies[Math.floor(Math.random() * 3)];
      console.log(`Ok, ${playerName}, A walk about to the tavern it shall be. Get a drink and rest a little.`);
    } else if (locationChoices[list2] === 'homes') {
      console.log(`Ok, ${playerName}, A walk about to a villagers home it shall be. Possibly get something to eat and a little rest.`);
    } else if (locationChoices[list2] === 'church') {
      console.log(`Ok, ${playerName}, A walk about to the church it shall be. Take a little rest, say a prayer and freshen up the spiritual energy a little.`);
    } else if (locationChoices[list2] === 'hotel') {
      console.log(`Ok, ${playerName}, A walk about to the hotel it shall be. Finally get a good nights rest.`);
    } else if (locationChoices[list2] === 'store') {
      console.log(`Ok, ${playerName}, A walk about to the village store it is. Get some needed groceries and exploring supplies that are much needed.`);
    } else if (locationChoices[list2] === 'park') {
      console.log(`Ok, ${playerName}, A walk about to the village park it shall be. Maybe do a little fishing at the pond, rest on a bench and relax.`);
    } else if (locationChoices[list2] === 'zoo') {
      console.log(`Ok, ${playerName}, A walk about to the village zoo it is. Be nice to see a few different critters from the normal ones during your explorations.`);
    } else if (locationChoices[list2] === 'hospital') {
      console.log(`Ok, ${playerName}, Take a walk over to the village hospital it is. Get a much needed check up done.`);
    }
  
    if (enemy) {
      console.log(`\nOh no! While walking towards the ${locationChoices[list2]}, you have been attacked by a ${enemy.enemy}.`);
  
      let battles = 0;
      while (battles < 5 && enemy.hitPoints > 0 && playerHealth > 0) {
        const playerDamage = Math.floor(Math.random() * playerAttackDamage) + 1;
        const enemyDamage = Math.floor(Math.random() * enemy.hitPoints) + 1;
  
        console.log(`\n${playerName} attacks the ${enemy.enemy} and deals ${playerDamage} damage.`);
        enemy.hitPoints -= playerDamage;
        console.log(`The ${enemy.enemy} has ${enemy.hitPoints} hit points left.`);
  
        console.log(`The ${enemy.enemy} attacks ${playerName} and deals ${enemyDamage} damage.`);
        playerHealth -= enemyDamage;
        console.log(`${playerName} has ${playerHealth} hit points left.`);
  
        battles++;
      }
  
      if (enemy.hitPoints <= 0) {
        console.log(`\n${playerName} has defeated the ${enemy.enemy}.`);
      } else if (playerHealth <= 0) {
        console.log(`\n${playerName} has been defeated by the ${enemy.enemy}.`);
        return playerHealth = 0;
      }
    }

    function enemyRandomizer() {            //declares enemyRandomizer function.
        if (currentEnemy === 1) {           //if currentEnemy is = 1 then assigns enemyOne.
            selectedEnemy.enemy = enemyOne.enemy;       //assigns enemyOne to selectedEnemy.
            selectedEnemy.hitPoints = enemyOne.hitPoints;       //assigns enemyOne to selectedEnemy.
        } else if (currentEnemy === 2) {    //if currentEnemy is = 2 then assigns enemyTwo.
            selectedEnemy.enemy = enemyTwo.enemy;       //assigns enemyTwo to selectedEnemy.
            selectedEnemy.hitPoints = enemyTwo.hitPoints;       //assigns enemyTwo to selectedEnemy.
        } else if (currentEnemy === 3) {    //if currentEnemy is = 3 then assigns enemyThree.
            selectedEnemy.enemy = enemyThree.enemy;     //assigns enemyThree to selectedEnemy.
            selectedEnemy.hitPoints = enemyThree.hitPoints;     //assigns enemyThree to selectedEnemy.
        };
    };
};
villageChoices(); 
console.log("The enemy lays a critical hit on you. So long partner, you have died! Game Over!");