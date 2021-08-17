function BtnClick() {
    if (event.target.className == "splusBtn small" ||
     event.target.className == "plusBtn small buy") {
        smallQuantity++;
        smallPizzaQuantity.innerHTML = smallQuantity;
    } else if (event.target.className == "splusBtn medium" ||
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
    totalCart = smallQuantity * 29.00 + mediumQuantity * 59.00 + largeQuantity * 120.00;
    cartTotal.innerHTML = totalCart.toFixed(2);
  
    if (totalCart > 0) {
        checkOut.classList.remove('hidden');
    } else {
        checkOut.classList.add('hidden');
        payOut.classList.add('hidden');
    }
  }
  
  
  function checkOutClick(){
    checkOut.classList.add('hidden');
    payOut.classList.remove('hidden');
  }
      
  splusBtn.addEventListener("click", BtnClick)
  