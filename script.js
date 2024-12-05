let min = 1;
let max = 100;

let answer = Math.floor(Math.random()*(max-min+1)+ min);

let attempt = 0;
let guess;
let running = true;

while (running){
    let guess = window.prompt(`please enter the number between ${min} and ${max}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
        continue;
    }
    else if(guess < min || guess > max)
{
    alert(`Please enter a number between ${min} and ${max}`);
    continue;
}
else{
    attempt++;
    if(guess === answer){
        running = false;
        window.alert(`Congratulations! The answers is ${answer} You found the number in ${attempt} attempts`);
    }
    else if(guess < answer){
        window.alert("Too low. Try again.");
    }
    else{
        window.alert("Too high. Try again.");
    }
 
}

}