
const loginButton = document.querySelector('.login-button');
loginButton.addEventListener('click', loginPrompt);

function loginPrompt() {
    userDetails = {
      "username" : null,
      "password" : null,
    }

    let countToCompleteSignUp = 0;

    let usernamePromptCount = 0;
    for(let i= 0;i >= usernamePromptCount; i++) {
        let usernamePrompt = prompt("Enter your Username");
        if(usernamePrompt.length > 10) {
            alert('Username is too long. Username should not be more than ten characters')
        }
        else if(usernamePrompt === "") {
            alert('You must input username')
        }
        else {
            userDetails.username = usernamePrompt;
            i = -2;
        }
    }

    let passwordPromptCount = 0;
    let comfirmPasswordPrompt;
    for(let i= 0;i >= passwordPromptCount; i++) {
        let passwordPrompt = prompt("Enter your Password");
        if(passwordPrompt === "") {
            alert('NO use me play. Abeg enter your password')
        }
        else if(passwordPrompt.length < 6) {
            alert('Password is too short. Password should not be less than six characters')
        }
        else if (passwordPrompt !== "" && passwordPrompt.length >= 6) {
            comfirmPasswordPrompt = prompt('Confirm your Password');
            if(comfirmPasswordPrompt !== passwordPrompt) {
                alert('Does not match password')
            }
            else {
                userDetails.password = passwordPrompt;
                i = -2
                countToCompleteSignUp++
            }
        }
    }
    if (countToCompleteSignUp > 0) {
        loginButton.style.display = 'none';
        const userProfile = document.querySelector('.user-profile')
        let smileyFace = String.fromCharCode(128512);
        userProfile.innerText = userDetails.username.toUpperCase() + smileyFace;
        userProfile.setAttribute('class','animate-user user-profile');
        console.log(userProfile.classList)
    }

}
console.log(String.fromCharCode(128512));

// let mytry = "good game";
// let confirmMytry = 'good game'
// switch(confirmMytry) {
//    case mytry:
//     console.log('great')
//     break;
//    default:
//     console.log('not')
//     break;  
// }
// if(mytry.length < 10) {
//     console.log('hmmm')
// }

// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends": [1,5,6]
// }; 
// myDog.friends.push(8)
// console.log(myDog.friends)

/*
var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
}; 
// console.log(myDog.friends)

// access properties in an object with . notation
var testobj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "jersey",
    "the drink": "water",
    16: "Montana"
};

var hatValue = testobj.hat;
var shirValue = testobj.shirt;
// console.log(hatValue);

// access properties in an object with bracket notation
var drinkValue = testobj['the drink'];
// console.log(drinkValue);

// access properties in an object with variables
var playerNumber = 16;
// console.log(playerNumber)
var player = testobj[playerNumber];
// console.log(player)

//Updating object properties
testobj.shoes = "heels";
// console.log(testobj.shoes);

//add new properties to an object
testobj.createNewProperty = 'newProperty';
console.log(testobj)
*/















/*
const button = document.querySelector('button');
button.addEventListener('click', test)

function test() {
  let stringAnswer =  prompt("what is your age?");

  let numericAnswer = Number(stringAnswer);
  console.log(stringAnswer);
  console.log(numericAnswer);
  console.log(typeof stringAnswer);
  console.log(typeof numericAnswer);
}
*/