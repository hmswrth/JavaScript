/*var firstname="Hemanth";
var age = 21;
console.log(firstname+' '+age);
var job , isInLove;
job= 'coder';
isInLove=false;
age = prompt('Enter your age nibba');

console.log(firstname + ' ' + age + isInLove);*/
/*var mH,mM,jH,jM;
mH=prompt("Enter Mark's Height");
mM=prompt("Enter Mark's Mass");
jH=prompt("Enter John's Height");
jM=prompt("Enter John's Mass");
var markBMI = mM / (mH*mH);
var johnBMi = jM / (jH*jH);
var res=markBMI > johnBMi ? true : false;
console.log(res);*/

//124,48,268

//  nodalofficerspsr@actcorp.in




var tips = [];
var tip;
var bill;
var final = [];
function tipCalculator(bill){
  if (bill<50){
    tip = 0.2 * bill;
    tips.push(tip);
    final.push(tip+bill);
  }
 else if (bill >= 50 && bill < 200){  
    tip = 0.15 * bill;
    tips.push(tip);
    final.push(tip+bill);}
 else if (bill>200) { 
    tip = 0.1 * bill;
    tips.push(bill);
    final.push(tip+bill);}
    }
tipCalculator(124);
tipCalculator(48);
tipCalculator(268);
console.log(tips, final);