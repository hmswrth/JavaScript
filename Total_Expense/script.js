let expenseAmount = [];
let expenseCode = [];
let tableData='Expense Details<br>';
let finalExpense={};
function add(){
    let code = document.getElementById('code').value;
    let amount = parseInt(document.getElementById('amount').value);
    expenseAmount.push(amount);
    expenseCode.push(code);
    document.getElementById('amount').value='';
}
function calculate(){
    for(let i=0; i<expenseCode.length;i++){
        if(expenseCode[i] in finalExpense){
            finalExpense[expenseCode[i]] += expenseAmount[i];
        }
        else{
            finalExpense[expenseCode[i]] = expenseAmount[i];
        }
    }
    for(let k in finalExpense){
        tableData += k + ' : ' + finalExpense[k]+'<br>';
    }
    document.getElementById('result').innerHTML = tableData;
    tableData='Expense Details<br>';
    for(let i in finalExpense){
        delete finalExpense[i];
    }
    expenseCode.length=0;
    expenseAmount.length=0;
}