const readlineSync = require('readline-sync');

function explorer(name, attackPoints, health, hitPoints) {
  this.name = name;
  this.attackPoints = attackPoints;
  this.health = health + 200;
  this.hitPoints = hitPoints + 30;
  this.inventory = [];
};

function WalkingEnemy(name, attackPoints, health, hitPoints) {
  this.name = name;
  this.attackPoints = attackPoints + 20;
  this.health = health + 50;
  this.hitPoints = hitPoints + 10;
};

const playerName = readlineSync.question("Please enter your name: ");
const player = new explorer(playerName, 10, 100, 5); // assign some default values for the Explorer
const walkingEnemies = [
  new WalkingEnemy('Bear', 60, 100, 50),
  new WalkingEnemy('Walking Tree', 40, 100, 25),
  new WalkingEnemy('Fighting Chicken', 30, 100, 20),
];

const walkingEnemyInventory = ['Bear Pelt', 'Fishing Pole', 'Chicken'];


while (player.health > 0 && walkingEnemies.length > 0) {
    const walkingRandomEnemy = walkingEnemies[Math.floor(Math.random() * walkingEnemies.length)];
      
    console.log(`\n${player.name}, you have been attacked by ${walkingRandomEnemy.name} and you received ${walkingRandomEnemy.hitPoints} hit points.\n`);
  
    const aeDecision = ['Attack', 'Escape'];
    
    while (walkingRandomEnemy.health > 0 && player.health > 0) {
      const decision = readlineSync.keyInSelect(aeDecision, 'What do you want to do? Attack or Escape?');
      if (decision === 0) {
        console.log(`You attacked ${walkingRandomEnemy.name} and dealt ${player.attackPoints} damage.`);
        const numAttacks = readlineSync.questionInt(`How many times would you like to attack ${walkingRandomEnemy.name}? `);
        for (let i = 0; i < numAttacks; i++){
          const damage = Math.floor(Math.random() * player.hitPoints);
          walkingRandomEnemy.health -= damage;
          console.log(`You attacked ${walkingRandomEnemy.name} and dealt ${damage}. ${walkingRandomEnemy.name} has ${walkingRandomEnemy.health} of health remaining.`);
        }
      } else {
          console.log(`\nYou have escaped from ${walkingRandomEnemy.name}`);
          break;
      } 
    }
    
    if (player.health <= 0) {
      console.log(`\nYou were defeated by ${walkingRandomEnemy.name} and the game has ended. `);
      break;
    } else if (walkingRandomEnemy.health <= 0) { 
      console.log(`\nCongratulations ${player.name}, You have defeated the ${walkingRandomEnemy.name}. `);
      player.health += 50; //Heals player after defeating the enemy.
      walkingEnemies.splice(walkingEnemies.indexOf(walkingRandomEnemy), 1);
    }
  }
  
  if (walkingEnemies.length === 0) {
    player.inventory = player.inventory.concat(walkingEnemyInventory);
    console.log(`\nCongratulations, ${player.name}! You have defeated all the enemies.`);
    console.log(`Your inventory: ${player.inventory.join(', ')}`);
    console.log(`Your health: ${player.health}`);
  }
  