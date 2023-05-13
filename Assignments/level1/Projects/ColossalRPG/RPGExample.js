const readlineSync = require(`readline-sync`);

console.log(`Welcome, can you defeat the monsters?`);               //1. greet user w message \\

const userName = readlineSync.question(`What is your name: `);      //2. ask players name & store it \\

let userHP = 100;
const userInvetory = [];                                                // initializing variables \\
const monsters = ["Dragon", "Wizard", "Ninja"];

// game loop \\

while (userHP > 0){
  readlineSync.question("Press 'w' to walk.");                                  // asks user to enter 'w' to walk \\
  const monsterAppeared = Math.random() < 0.25;                                 // 1/4 chance of monster appearing \\

  if (monsterAppeared){
    const monster = monsters[Math.floor(Math.random() * monsters.length)];         // selecting random monster using math.random and * by the length of monsters \\
    console.log(`A scary ${monster} appeared!`);                                  // console log the random monster appearing - using template literals to keep code cleaner\\

    let monsterHP = Math.floor(Math.random() * 20) + 10;                              // monsters stats \\
    const monsterDamage = Math.floor(Math.random() * 5) + 5;

    while (userHP > 0 && monsterHP > 0){                                               // ask user to attack or run \\
      const action = readlineSync.question("Press 'a' to attack or 'f' to flee.");

      if (action === "a"){                                                               // if user attacks (press 'a') deal random damage to monster \\
        const userDamage = Math.floor(Math.random() * 10) + 5;
        console.log(`You dealt ${userDamage} damage to the ${monster}!`);
        monsterHP -= userDamage;
      } else if (action === "f"){                                                       // if users flees (press 'f') random chance at fleeing \\
        const fleeChance = Math.random() < 0.5;
        if (fleeChance){
          console.log(`You sucessfully flee'd from the ${monster}!`);
          break;
        } else {
          console.log(`You failed to flee from the ${monster} and take ${monsterDamage} damage!`);
          userHP -= monsterHP;
        }
      }
      if (monsterHP > 0){                                                                      // monsters attack \\
        const monsterDamageHit = Math.floor(Math.random() * 5) + 5;
        console.log(`The ${monster} hit ${monsterDamageHit} damage to you!`);
        userHP -= monsterDamageHit;
      }

      if (userHP > 0 && monsterHP <= 0){                                                 // if & else statement determining whether to console log either result \\
        console.log(`You killed the ${monster}!`);
        userHP += 10;
        const item = `${monster} trophy`;
        userInvetory.push(item);
        console.log(`You earned a ${item} from killing the ${monster}!`);
      } else if (userHP <= 0){
        console.log(`The ${monster} killed you, game over.`);
        break;
      }
    }
  }
  const action = readlineSync.question("Press 'p' or 'Print' to show stats.");                // console log players stats and items if in invetory \\
  console.log(`HP:${userHP}`);
  console.log(`${userName} stats:`);                                                     
  console.log(`Invetory:`);
  for (const item of userInvetory) {
    console.log(`-${item}`);
  }
}                                                                 // i cant figure out why when im getting hit for X amount of damage i kill the monster then print stats, and shows incorrect HP \\ 
                                                                