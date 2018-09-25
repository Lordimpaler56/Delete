console.log("Using array-data-strucutre, write a function(s) to switch the content of both arrays in the second element ... the last name.")

// Your Function Goes here
let lastName1 = memory;
let lastName2 = memory;

function rewriteLastNameMercer (lastName1, lastName2){
  return MarkMercer[1] = lastName2
}
function rewriteLastNameSpence (lastName1, lastName2){
  return lastName1[1] = lastname2;

}


let MarkMercer = [];
let MeganSpence = [];

// firstName, lastName, age, ageAfraid, hair, male, female
MarkMercer = ["Mark", "Mercer", 13, 29, null, true, false];
MeganSpence = ["Megan", "Spence", 14, null, true, false, true];

//Your code goes here
rewriteLastNameMercer (MarkMercer[1], MeganSpence[1]);
rewriteLastNameSpence (MarkMercer[1], MeganSpence[1]);

// Print first names only
console.log("Last Name of MarkMercer is: " + MarkMercer[1]); //Should return Spence
console.log("Last Name of MeganSpence is: " + MeganSpence[1]); //Should return Mercer
