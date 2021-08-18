const smallbutton = document.querySelector(".buysmallBtn");
const mediumbutton = document.querySelector(".buymediumBtn");
const largerbutton = document.querySelector(".buylargeBtn");
const theInput = document.querySelector(".theInput");
const message = document.querySelector(".message");
const checkout=  document.querySelector(".orderBtn");
const payOut=  document.querySelector(".payOut");

const splusBtn = document.querySelector(".splusBtn.small");
const sminusBtn = document.querySelector(".sminusBtn.small");
const mplusBtn = document.querySelector(".mplusBtn.medium");
const mminusBtn = document.querySelector(".mminusBtn.medium");
const lplusBtn = document.querySelector(".lplusBtn.large");
const lminusBtn = document.querySelector(".lminusBtn.large");
const smallPizzaQuantity = document.querySelector(".smallPizzaQuantity");
const mediumPizzaQuantity = document.querySelector(".mediumPizzaQuantity");
const largePizzaQuantity = document.querySelector(".largePizzaQuantity");
const smallPizzaTotal = document.querySelector(".smallPizzaTotal");
const mediumPizzaTotal = document.querySelector(".mediumPizzaTotal");
const largePizzaTotal = document.querySelector(".largePizzaTotal");
const totalCart = document.querySelector(".totalCart");


var smallQuantity = 0;
var mediumQuantity = 0;
var largeQuantity = 0;
var cartTotal= 0;


function BtnClick(event) {
    
  if (event.target.className == "splusBtn small" ||
   event.target.className == "plusBtn small buy") {
      smallQuantity++;
      smallPizzaQuantity.innerHTML = smallQuantity;
  } else if (event.target.className == "mplusBtn medium" ||
   event.target.className == "plusBtn medium buy") {
      mediumQuantity++;
      mediumPizzaQuantity.innerHTML = mediumQuantity;
  } else if (event.target.className == "lplusBtn large" ||
   event.target.className == "plusBtn large buy") {
      largeQuantity++;
      largePizzaQuantity.innerHTML = largeQuantity;
  }

  if (event.target.className === "sminusBtn small") {
      smallQuantity--;
      if (smallQuantity < 0) {
          smallQuantity = 0;
      }
      smallPizzaQuantity.innerHTML = smallQuantity;

  } else if (event.target.className === "mminusBtn medium") {
      mediumQuantity--;
      if (mediumQuantity < 0) {
          mediumQuantity = 0;
      }
      mediumPizzaQuantity.innerHTML = mediumQuantity;
      
  } else if (event.target.className === "lminusBtn large") {
      largeQuantity--;
      if (largeQuantity < 0) {
          largeQuantity = 0;
      }
      largePizzaQuantity.innerHTML = largeQuantity;
  }

  smallPizzaTotal.innerHTML = (smallQuantity * 29).toFixed(2);
  mediumPizzaTotal.innerHTML = (mediumQuantity * 59).toFixed(2);
  largePizzaTotal.innerHTML = (largeQuantity * 120).toFixed(2);
  message = smallQuantity * 29.00 + mediumQuantity * 59.00 + largeQuantity * 120.00;
  cartTotal.innerHTML = message.toFixed(2);

 
  }




 



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


            splusBtn.addEventListener("click", BtnClick)
            sminusBtn.addEventListener("click", BtnClick)
            mminusBtn.addEventListener("click", BtnClick)
            mplusBtn.addEventListener("click", BtnClick)
            lplusBtn.addEventListener("click", BtnClick)
            lminusBtn.addEventListener("click", BtnClick)
            