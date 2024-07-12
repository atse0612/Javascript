// MysteryOperation function

function mysteryOperation(){
    let randomOut = Math.random(); // Random number between 0 and 1
    if (randomOut < 0.5){
        console.log("Completed in a successful manner");
    }
    else{
        throw new Error("Failed. Try again");
    }
}

let daysInit = 0; //Initial vacation days
const numberOfMissions = 20; //number of missions given
const daysGiven = 13; //number of days for vacation
const daysOff = 1; //days failed
const daysAttended = 3; //days attended

for (let d = 0; d < numberOfMissions; d++){
    try{
        mysteryOperation(); //Implementing the mysteryOperation function
        daysInit += daysGiven; //If successful, add thirteen vacation days
    }
    catch(error){
        daysInit += daysOff; //If failed, add one vacation day
    }
    finally{
        daysInit += daysAttended; //If neutral, add three vacation days 
    }
}

console.log(daysInit);