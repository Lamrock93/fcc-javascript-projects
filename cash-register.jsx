// This program simulates the status of a cash register following a cash transaction. The customer gives a certain amount of cash, and that less the price of the item is the change due. If the change due is exactly that of the total money in the register, the register is then closed and the contents of the till are returned to the customer. If the change due is greater than the amount in the register, there are insufficient funds, and no change is returned. Otherwise, the program will look through each currency in descending order, and if that currency is valued less than the change needed, it will subtract that amount from the change due, and from the cash in the register. This repeats until change due is less than the amount tendered, or the amount of that currency in the register drops to zero - then the next currency amount is checked. This cycle continues until the change due hits zero, or all currency types have been checked for. If all change has been returned, the cash register status is open, and the change is an array containing each currency type and the amount given back to the customer. If there is still change owed, we are not able to make exact change, and thus the status is insufficient funds, and no money is returned.
  function checkCashRegister(price, cash, cid) {
    let changeDue = (cash - price).toFixed(2); // the amount of change due is the cash given less the price of the item, fixed to 2 decimal places
    const noteAmounts = [.01, .05, .1, .25, 1, 5, 10, 20, 100]; // array with value of each bank note
    let drawer = {status: "OPEN", change: []}; // object containing cash register characteristics status and change given
    let totalCID = (cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1]).toFixed(2); // sum of all cash in register, fixed to 2 decimal places
    
    // NOT ENOUGH MONEY
    if (parseFloat(changeDue) > parseFloat(totalCID)) { // if the change due exceeds the amount in the register...
      drawer.status = "INSUFFICIENT_FUNDS" // ...there are insufficient funds
      return drawer; // returns the insufficient funds status and no change
      }
      
    // MAKING CHANGE
    while (changeDue > 0) { // until all change has been returned to the customer
      for (var i = 8; i >= 0; i--) { // check all currencies in descending order, from index 8 (hundreds) to index 0 (pennies)
        if (noteAmounts[i] <= changeDue) { // if value of the given currency is less than the amount of change due...
          var amount = Math.floor(changeDue / noteAmounts[i]); // the amount of this currency given back as change is the change due, divided by the value of that currency, minus the remainder
          if (amount * noteAmounts[i] > cid[i][1]) { // but if there isn't enough of that currency left in the till...
          amount = cid[i][1] / noteAmounts[i]; // the amount is as many of that kind of as you have
          }
          changeDue -= (noteAmounts[i] * amount) // subtract the cash value of the amount given from the change due
          changeDue = changeDue.toFixed(2); // round to 2 decimal places
          var tempArray = [cid[i][0], noteAmounts[i] * amount]; // create a temporary sub-array with the name of the currency type, and its amount
          drawer.change.push(tempArray); // add that temporary array to the change property array
          }
        }
        
    // CAN'T GIVE EXACT CHANGE
    if (changeDue > 0) { // if after checking all currency, there is still change due...
      drawer.status = "INSUFFICIENT_FUNDS" // status is insufficient funds
      drawer.change = []; // change property array is emptied
      return drawer; // returns insuffient funds status and no change
      }
    }

    // ALL MONEY IN REGISTER IS GIVEN AS CHANGE
    if ((cash - price) == totalCID) { // if the cash given less the price equals the amount of cash on hand
      drawer.status = "CLOSED"; // close the register
      drawer.change = cid; // give everything in the register as change
      return drawer; // return status closed, change as everything in the register
      }
      
   return drawer; // return open status and change to the customer
  }
