// The following code was for the first prac for SIT737

// This is an example of an asynchronous function.
var async = function(){
    setTimeout(function(){log("I will appear last even though I was called first!")}, 1500) 
}

// This is a basic addition function.
var adder=function(first,second){
    var sum=first+second
    return sum   
}

// This function logs a message to the console.
var log=function(msg){
    console.log("[Log] : ",msg)
}

// This part of the app calls the created functions.
log("Hello World")
log("Welcome to SIT737")
log("The sum is "+adder(11,123))

async();
log("This is going to come out before the async text!")