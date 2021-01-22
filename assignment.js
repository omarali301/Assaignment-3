



// https://github.com/omarali301/Assaignment-3








//kilometerToMeter----------------------------------------------------------------------------------------------


function kilometerToMeter(kilometer){

  

    var Meter = kilometer *1000;

    return Meter;
    
}

var result = kilometerToMeter(7)

console.log(result);






//budgetCalculator --------------------------------------------------------------------------------------------




function budgetCalculator(watch, phone, laptop){


    var total = (watch *50) + (phone *100) + (laptop *500);

    return total;
}


var totalPrice = budgetCalculator (3,4,1);

console.log(totalPrice);








//hotelCost----------------------------------------------------------------------------------------------------


 function hotelCost(day){


    var totalCost = 0;

    if(day <=10){

        totalCost = day *100;
    }

    else if ( day <=20){

        var firstPart = 10 *100;

        var remaining = day -10;

        var secondPart = remaining * 80;

        totalCost = firstPart + secondPart;
    }


    else {


        var firstPart = 10 *100;

        var secondPart = 10 *80;

        var remaining = day -20;

        var thirdPart = remaining * 50;

        totalCost = firstPart + secondPart + thirdPart; 
    }

    return totalCost;

 }


 var count = hotelCost(21);

 console.log(count);








//megaFriend ---------------------------------------------------------------------------------------------------


function megaFriend(name) {
    var longestWord = [];
  
    name.forEach(function(name) {
      if(name.length > longestWord.length) {
        longestWord = name;
      }
    });
  
    return longestWord;
  }

  
  
  var bigName = megaFriend(["Hasan","Rasel","Raju", "Robiul", "Romjanali", "Md Omar ali", "Akash", "Roji", "Rehana"]);


  console.log(bigName);









