var number = "Hello World"; //string
var classRoom = ["Johanna", "Jens", "Victory", "Lidia", "Michael", "Eve", "Tapiwa", "Kingsley", "Sören", "Trang"]; //strings
var numbers = [1,2,4,5]; //Integers Array
var sign = "$"; //char
var isRaining = false; //Boolean true/false
var weight = 57.11; //float comma Integer

console.log(classRoom[0] + " " + sign + " " + numbers[0])

/*"var" is obsolete - use "let" instead to add the following classes ass a variable, caching the elements to give them action
document.getElementsByClassName()       //let's you target .classes (but doesn't let pass values)
document.getElementById()               //let's you target #ids
document.getElementsByTagName()         //let's you target HTMLtags
document.querySelector()                //let's you target #ids .classes and HTMLtags (+passes values)*/


let valueDisplayVar = document.querySelector(".valueDisplay");
let addValueBtn = document.querySelector(".addV");
let subValueBtn = document.querySelector(".subV");

let theDefaultValue = 0;

showValue();            //show the default value by calling the function first

addValueBtn.addEventListener("click", ()=>{             //as soon as an event happens (click, hover, etc.) it will cause action
    //function body
    console.log("HELLO WORLD")
    theDefaultValue++;
    console.log(theDefaultValue);
    showValue();
});

subValueBtn.addEventListener("click", ()=>{
    console.log("HELLO WORLD")
    theDefaultValue--;
    console.log(theDefaultValue)
    showValue();
});

/*
asking the html element to replace its content with the
value from theDefaultValue variable
*/
function showValue() {
valueDisplayVar.innerHTML = theDefaultValue;
}

//Function to send email from Input field
function sendMail() {
    window.location.href = "mailto:aggrow@hotmail.de" +
        "?cc=" +
        "&Subject=" + encodeURIComponent("Placeholder Subject") +
        "&body=" + encodeURIComponent(document.querySelector(".form-control").value)
   /* let tV = document.querySelector(".form-control").value;
    console.log(tV);*/
}