/*******************************Getting user input and store it in a variable for validation***************************************** */

const username = document.getElementById("usermailid");
const parentname=document.getElementById("parentmailid")
const logincode = document.getElementById("loginCode");
const parentlogincode = document.getElementById("parentloginCode");
const logincodebutton = document.getElementById("login-code-button");
const parentlogincodebutton=document.getElementById("parentlogin-code-button")
const loginbutton = document.getElementById("login-button");
const parentloginbutton = document.getElementById("parentloginbutton");
const juniorname=document.getElementById("junioruserName")
const juniorloginbutton=document.getElementById("juniorloginbutton")
var randomNumber; //Global variable to store randomcode
var parentrandomNumber;


/*******************************show junior section  by default on page load***************************************** */


window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('juniorlink').click()
});
// ANOTHER WAY
// window.onload=function(){
//   document.getElementById('juniorlink').click();

//  }
/******************************* function to create random codes***************************************** */
// For Explorer
function randomlogincode() {

// Math.rondom () function to generate random number

randomNumber=Math.floor(Math.random() * 1000000) + 1; 

// prompt(randomNumber) - TO CHECK RANDOM NUMBER IN CONSOLE

// Showing generated code for 5 seconds on screen using setInterval and clearInterval

var timeleft = 5;
var downloadTimer = setInterval(function(){//start  the countdown for 5 sec using setInterval
  if(timeleft <= 0){
    clearInterval(downloadTimer); //stop  the countdown after 5 sec using clearInterval
    document.getElementById("countdown").style.display="none" //show and hide generated code 
  }else{
    document.getElementById("countdown").style.display="block"
    document.getElementById("displaylogincode").innerHTML = randomNumber;		
    document.getElementById("timer").innerHTML = "0.0"+timeleft +"s";
  }
  timeleft -= 1;
}, 1000);
}


// For Parent
function randomlogincodeparent() {
  parentrandomNumber=Math.floor(Math.random() * 1000000) + 1;
  // prompt(parentrandomNumber)
  var timeleftparent = 5;
  var downloadTimerparent = setInterval(function(){
    if(timeleftparent <= 0){
      clearInterval(downloadTimerparent);
      document.getElementById("parentcountdown").style.display="none"
    } else {
      document.getElementById("parentcountdown").style.display="block"
      document.getElementById("parentdisplaylogincode").innerHTML = parentrandomNumber;		
      document.getElementById("parenttimer").innerHTML = "0.0"+timeleftparent +"s";
    }
    timeleftparent -= 1;
  }, 1000);
  }
  
// Validate users input and randomcode

function explorerloginconformation() {
  // prompt(randomNumber)
  if (randomNumber != logincode.value || username.value == ""){
    alert("Please enter correct values");
    location.reload(true) 
  } else {
    // alert("Loggedin")
    // displayusername.innerHTML = "Hi" + " " + username.value + " ;)";
      window.location.replace("index.html");
  }
}

function parentloginconformation() {
  // prompt(randomNumber)
  if (parentrandomNumber != parentlogincode.value || parentname.value == ""){
    alert("Please enter correct values");
    location.reload(true) 
  } else {
    // alert("Loggedin")
    // displayusername.innerHTML = "Hi" + " " + username.value + " ;)";
      window.location.replace("login.html");
  }
}
function juniorloginconformation() {
  // prompt(randomNumber)
  if (juniorname.value == ""){
    alert("Please enter correct values");
    location.reload(true) 
  } else {
    // alert("Loggedin")
    // displayusername.innerHTML = "Hi" + " " + username.value + " ;)";
      window.location.replace("login.html");
  }
}
// Button functions on click
logincodebutton.addEventListener("click", randomlogincode);
parentlogincodebutton.addEventListener("click", randomlogincodeparent);
loginbutton.addEventListener("click", explorerloginconformation);
parentloginbutton.addEventListener("click", parentloginconformation);
juniorloginbutton.addEventListener("click", juniorloginconformation);


/**********************************END of login page ************************************************** */
