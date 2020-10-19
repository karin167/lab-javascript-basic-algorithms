// Iteration 1: Names and Input

console.log("I'm ready!");
let hacker1 = 'karin'
console.log ('the driver’s name is ' + hacker1);

let hacker2 = 'anna'
console.log ("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if ((hacker2.length > hacker1.length)) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
  };

// Iteration 3: Loops

function upperCase(name) {
    let endResult = "";
    for (let i = 0; i < name.length; i++) {
      endResult = endResult + name[i] + " "
    };
    return endResult;
  };
  upperCase(hacker1.toUpperCase());
  
  
  function reverse(name) {
    let endResult = "";
    for (let i = name.length-1; i >= 0; i--) {
    console.log(endResult);
      endResult = endResult + name[i];
    };
    return(endResult);
  };
  reverse(hacker1);
  
  function alphabetical(name, name2) {
    let alphabeticalOrder = name.localeCompare(name2);
    if (alphabeticalOrder === -1) {
      return "The driver's name goes first.";
    } else if (alphabeticalOrder === 1) {
      return "Yo, the navigator goes first definitely.";
    } else {
      return "What?! You both have the same name?";
    }
  };
  console.log(alphabetical(hacker1, hacker2));