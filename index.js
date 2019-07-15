function wakeDog(dogName, dogBreed){
    let message = `Wake ${dogName} the ${dogBreed}`;
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return message;
}

function leashDog(dogName, dogBreed){
    let message = `Leash ${dogName} the ${dogBreed}`;
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return message;
}

function walkToPark(dogName, dogBreed){
    let message = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return message;
}

function throwFrisbee(dogName, dogBreed){
    let message = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return message;
}

function walkHome(dogName, dogBreed){
    let message = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return message;
}

function unleashDog(dogName, dogBreed){
    let message = `Unleash ${dogName} the ${dogBreed}`;
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return message;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];


function exerciseDog(dogName, dogBreed){
    let dogArray = [];
    for(let i=0; i < routine.length; i++){
        //const newRoutine = routine[i]
        dogArray.push(routine[i](dogName, dogBreed));
    }
    return dogArray;
}