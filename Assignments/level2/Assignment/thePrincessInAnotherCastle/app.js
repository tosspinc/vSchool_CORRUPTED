let gameInterval;                                                       //declares gameIntervals as a variable.
let playerOne;                                                          //declares playerOne as a variable.
let number;                                                             //declares number as a variable.
let attackNumber;

function randomNumber(min, max) {
    number = Math.floor(Math.random() * (max - min) + min);             //randomly selects the number to determine players name.
    if (number === 1) {                                                 //if the number is equal to one then runs line of code below.
        namePicked = 'Mario';                                           //if equal to one name is Mario.
    } else {                                                            //if the number is now equal to one then runs the line of code below.
        namePicked = 'Luigi';                                           //if not equal to one then the name is going to be Luigi.
    };
};

randomNumber(1, 2);                                                     //randomNumber is set to either one or two. 

class  Player {                                                         //declares Player constructor class.
    constructor(namePicked, message, status, totalCoins, hasStar){      //assigns objects to constructor.
        this.message = message;                                         //assigns message to current player.
        this.name = this.setName(namePicked);                           //assigns name picked from above code to current player in constructor.
        this.status = status;                                           //assigns status to player to current player.
        this.totalCoins = totalCoins;                                   //assigns total coins to current player.
        this.hasStar = hasStar;                                         //if player has achieved a star then assigns message to current player.
    };
    
    setName(namePicked){                                                //declares setName and passes namePicked to it.
        if (namePicked === 'Mario'){                                    //if number 1 is randomly selected then assigns mario to player.
            this.name = 'Mario';                                        //assigns the name Mario to name
        } else if (namePicked === "Luigi"){                             //if number 2 is randomly selected then assigns mario to player.
            this.name = 'Luigi';                                        //assigns the name Luigi to name.
        }
        return this.name;
    };

    gotHit(){
        if (this.status === "Powered Up") {                             //if status of player equals Powered Up then following lines of code execute.
            if (this.hasStar === true) {                                //validates if player has a star.
                this.status = "Powered Up";                             //if player has a star then message Powered up displays.
                this.hasStar = false;                                   //validate if player does not have a star.
                this.message = "Your star protected you!"               //if player does not have a star then message is displayed.
            } else {
                this.status = "Big";                                    //status is equal to Big and no message is displayed.
                this.message = "";
            };            
        } else if (this.status === "Big") {                             //if Big is validated as true then following code is executed.
            this.status = "Small";                                      //if status us player is validated as small.
            this.message = "";                                          //no message is displayed.
        } else if (this.status === "Small") {                           //if status of player is validated as small.
            this.status = "Dead";                                       //status of player is set to dead.
            this.message = "Your final score was ";                     //game over message is your final score was.
            clearInterval(gameInterval);                                //ends the game as it stops repeating.
        };
    };

    gotPowerUp(){                                                       //declares gotPowerUp funciton.
        if (this.status === "Small") {                                  //validates if players status is small.
            this.status = "Big";                                        //changes player status to big.
        } else if (this.status === "Big") {                             //if player status validated as Big then following code executes.
            this.status = "Powered Up";                                 //player status set to big Powered Up message is displayed.
        } else if (this.status === "Powered Up") {                      //if player status is equal to Powered Up following code executes.
            this.hasStar = true;                                        //sets hasStar object to true.
            this.message = "Congratulations! You got a star!";          //player has a star and message is displayed to console.
        };
    };

    addCoin(){
        this.totalCoins = Math.floor(this.totalCoins + 1);              //adds coins to players coin status value.
        this.message = "";
    };

    print(){
        if (this.hasStar === true) {                                    //if has star is true then the following lines of code run.
            console.log(                                                //displays to console.
                "\n",                                                   //blank line is printed.
                this.message + "\n",                                    //prints message then a new line.
                "Name: " + this.name + "\n",                            //prints name of player.
                "TotalCoins: " + this.totalCoins + "\n",                //number of coins player has achieved.
                "Status: " + this.status + "\n",                        //displays status of player.
                "You have a star" + "\n",                               //prints your have a star and then a new line.
                );                
        } else if (this.hasStar === false) {
            if (this.status === "Powered Up") {                         //if powered up is true then following lines of code print to console.
                console.log(                                            //displays to console.
                    "\n",                                               //new line.
                    this.message + "\n",                                //message then a new line.
                    "Name: " + this.name + "\n",                        //name of player and a new line.
                    "TotalCoins: " + this.totalCoins + "\n",            //displays total number of coins player has.
                    "Status: " + this.status + "\n"                     //displays status of player.
                )   ;                 
            } else if (this.status === "Dead") {                        //when player dies this set of code displays.
                console.log(                                            //displays to console.
                    "\n",                                               //new line.
                    "Name: " + this.name + "\n",                        //displays name of player and a new line.
                    "TotalCoins: " + this.totalCoins + "\n",            //displays total number of coins player has.
                    "Status: " + this.status + "\n",                    //displays player status.
                    this.message + " " + this.totalCoins +              //display message.
                    "\n"                                                //displays a new line.
                );                    
            } else {
                console.log(                                            //displays to console.
                    "\n",                                               //displays new line.
                    "Name: " + this.name + "\n",                        //displays name of player.
                    "TotalCoins: " + this.totalCoins + "\n",            //displays total number of coins player has.
                    "Status: " + this.status +                          //displays status of player.
                    "\n"                                                //displays new blank line.
                );
            };
        };
    };

    attackRandomNumber(min, max) {                                          //attackRandomNumber function declared.
        attackNumber = Math.floor(Math.random() * (max - min) + min);       //random number generated.
        console.log('\n' + 'your roll was a ' + attackNumber + '.' + '\n'); //prints to screen what the number rolled was.
        if (attackNumber < 1){                                              //if the number rolled equals zero then calls gotHit function.
            this.gotHit();                                                  //gotHit function called.
        } else if (attackNumber > 1){                                       //if the number rolled is two then calls potPowerUp function.
            this.gotPowerUp();                                              //gotPowerUp function called.
        } else {                                                            //if the number is equal to one then calls the addCoin function.
        this.addCoin();                                                     //addCoin function called.
        }
        this.print();                                                       //prints results to screen.
    };
};

playerOne = new Player(namePicked, 0, 'Big',  0, false,)                    //sets initial player chosens, no message, player status to big, zero coins and player does not initially have a star.

gameInterval = setInterval(function(){                                      //declares gameInterval function and passes the setInterval function to it.
    playerOne.attackRandomNumber(0, 3);                                     //sets the value of attackRandomNumber to 2.    
}, 1000);                                                                   //this interval is set to 1000 miliseconds or one second.
