const smallbutton = document.querySelector(".buysmallBtn");
const mediumbutton = document.querySelector(".buymediumBtn");
const largerbutton = document.querySelector(".buylargeBtn");
const theInput = document.querySelector(".theInput");
const message = document.querySelector(".message");
const checkout=  document.querySelector(".orderBtn");

const smallprice= document.querySelector(".smallPrice");


smallbutton.addEventListener("click", function(){
    
message.innerHTML= "You ordered small, Enter Total amount and check out"


});


mediumbutton.addEventListener("click", function(){
    
    message.innerHTML=  "You ordered medium pizza, Enter Total amount and check out"
    
    });

largerbutton.addEventListener("click", function(){
    
        message.innerHTML=  "You ordered large pizza, Enter Total amount and check out"
        
        });

        checkout.addEventListener("click", function(){
    
            message.innerHTML= "Enjoy your pizzas"
            
            });


