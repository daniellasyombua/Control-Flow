// Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.
 
function returnDeliveryType(days){
    days.forEach(day =>{
        switch (day) {
            case 'Mon':
                console.log('Grocery delivery');
                break;

            case 'Tue':
                console.log('Food delivery');
                break;          

            case 'Fri':
                console.log('Parcel delivery');
                break;

            default:
                console.log('Milk delivery');
                break;
                
                  };
                 } )


}
const days = ["Mon","Tue","Fri","Wed"]
returnDeliveryType(days)



// Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".
function bookAvailability(statuses){
    statuses.forEach(status => {
        if(status === "available"){
            console.log("Ready to lend");
            
        }
        else{
            console.log("Checked out"); 
        }
    });     
};
const statuses= ["available", "borrowed", "available", "available", "borrowed"];
bookAvailability(statuses);



// Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.

function checkAges(ages){
    for(let i =0 ; i<ages.length;i++){

        if(ages[i] >= 18){
            console.log("Adult");
            
        }
        else{
            console.log("Minor");
            
        }
    }
}

const ages = [12, 19, 35, 5, 21,18]
checkAges(ages)

// Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.

function livesCountdown(){
    let life = 5;
    while(life<=5 && life >=0){
        console.log(`You have ${life} lives left`);
        life-- ;
    }
};
livesCountdown();


// Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.

function printComment(feedbacks){
    feedbacks.forEach(comment =>{
        do{
            console.log(feedbacks.pop());
            
        }
        while (feedbacks.length !==0) {
            
        }
    });
};

const feedbacks = ["It was amazing", "I liked the experience", "You can do better"];
printComment(feedbacks);
console.log(feedbacks);



// Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
    function checkLoginStatus(loginStatuses){
        loginStatuses.forEach( status=>{
            if(status == "logged in"){
                console.log("Welcome back!");
                
            }
            else{
                console.log("Please log in");
                
            }

        });
    };

    const loginStatuses = ["logged in", "not logged in", "logged in","logged in","not logged in"];
    checkLoginStatus(loginStatuses);


// Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".

function ticketPriority(priorities){
    priorities.forEach(priority => {
        switch(priority){

            case 'high':
                console.log('Process 1st it is of P1 priority');
                break;

            case 'medium':
                console.log('Process next it is of P2 priority');
                break;

            default:
                console.log('Process last it is of P3 priority');
                break;

        }});
};
 const priorities = ['low','medium','high','high','medium','low'];
 ticketPriority(priorities);



// Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
function quizCountdown(){
    let countdown = 10;
    while(countdown!==0){
        console.log(`Quiz starts in ${countdown} seconds`)
        countdown--;
        
    }
}
quizCountdown()