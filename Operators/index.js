// Hello World Function
function greet (firstName, lastName){ //parameters
 console.log('Hello ' + firstName + ' World '  + lastName);
}

function square (number) {
  return number*number;
}


//firstName, middleName, lastName, height, age, eyeColour, hair, hairColour, favouriteFood, favouriteHobby, favouriteBook, male
let LoganCuthbertson = ["Logan", "Cael", "Cuthbertson", 16, "6 feet", "Light Blue", "Curly", "Brown", "Lasagna", "Videogames", null, true];

//Calling Functions, with arguements
greet (LoganCuthbertson[0], LoganCuthbertson[2]) //Arguement
greet (square(LoganCuthbertson[2]));
