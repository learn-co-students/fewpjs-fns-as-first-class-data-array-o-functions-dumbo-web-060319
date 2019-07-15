function wakeDog(dogName, dogBreed) {
  const doggy = (`Wake ${dogName} the ${dogBreed}`);
  console.log(doggy)
  return doggy
}

function leashDog(dogName, dogBreed) {
  const doggy = (`Leash ${dogName} the ${dogBreed}`);
  console.log(doggy)
  return doggy
}

function walkToPark(dogName, dogBreed) {
  const doggy = (`Walk to the park with ${dogName} the ${dogBreed}`);
  console.log(doggy)
  return doggy
}

function throwFrisbee(dogName, dogBreed) {
  const doggy = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(doggy)
  return doggy
}

function walkHome(dogName, dogBreed) {
  const doggy = (`Walk home with ${dogName} the ${dogBreed}`);
  console.log(doggy)
  return doggy
}

function unleashDog(dogName, dogBreed) {
  const doggy = (`Unleash ${dogName} the ${dogBreed}`);
  console.log(doggy)
  return doggy
}


const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

function exerciseDog(dogName, dogBreed) {
  let emptyResults = []
  for (let i = 0; i < routine.length; i++) 
  { 
    let result = routine[i](dogName, dogBreed)
    emptyResults.push(result)
  }
  return emptyResults
}