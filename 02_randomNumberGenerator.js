/*
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number. 
*/

var random ;
let count = 3;
let countStopAt = 0;
function counter(){
     if(countStopAt<count){
          setTimeout(counter,1000);
          console.log(`${count} seconds remaining`);
          count--;
     }else{
     random = Math.random();
     console.log(random);
     }
}
counter();



