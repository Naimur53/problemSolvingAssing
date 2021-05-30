function kilometerToMeter(n){
    var result = n*1000;
    return result;
}
var converter = kilometerToMeter(1);
console.log(converter);
// budgetCalculator
function budgetCalculator(a ,b ,c){
    var clock = a*50;
    var phone = b*100;
    var laptop = c*500;
    var total = clock + phone + laptop;
    return total;
}
var total = budgetCalculator(2,1,1);
console.log(total);
// hotelcost
function hotelCost(day){
    if(day<=10){
        var money =day*100;
    }
    else if(day<=20){
        var first =10 * 100;
        var second = day - 10;
        var main =second * 80;
        var money = first + main;
    }
    else{
        var first = 10*100;
        var second = 10*80;
        var third =day -20;
        var remaining = third *50;
        var money = first + second + remaining;
    }
    return money;
}
var money = hotelCost(11);
console.log(money);