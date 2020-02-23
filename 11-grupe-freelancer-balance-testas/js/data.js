const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis' ];

//Susirasome pagrindinius kintamuosius
//Prasome cikla kuris ispildo lentele
//Suksime cikla tiek kartu kiek turime account duomenu ir generuosiem HTML eilutes


function myBalanse(target, list, months) {
    
    let HTML = '';
    let yearlyIncome = 0;
    let yearlyExpense = 0;
    let yearlyBalance = 0;
    let minIncomeMonth = Infinity;
    let maxIncomeMonth = -Infinity;
    let minExpenseMonth = Infinity;
    let maxExpenseMonth = -Infinity;
    let month1 = 0;
    let month2 = 0;
    let month3 = 0;
    let month4 = 0;
    let minMonthName = 0;
    let maxMonthName = 0;
    let minExpenseMonthName = 0;
    let maxExpenseMonthName = 0;
    
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        console.log(item);
        
        // Months to table
        let monthIndex = item.month;      
        if (!monthIndex) {
            continue; 
        }
        let printMonth = months[monthIndex - 1];
        // Income to table
        if (item.income === undefined) {
            item.income = 0;
        }
            item.income;
        // Expense to table
        if (item.expense === undefined) {
            item.expense = 0;
        }
            item.expense;
        //Balance to table
        let balance = item.income - item.expense;
        //skaiciuojame metines pajamas
        yearlyIncome = item.income + yearlyIncome;
        //skaiciuojame metines islaidas
        yearlyExpense = item.expense + yearlyExpense;
        //skaiciuojame metini balanca
        yearlyBalance = balance + yearlyBalance;
       
        HTML += `<div class="table-row">
                    <div class="cell">${item.month}</div>
                    <div class="cell">${printMonth}</div>
                    <div class="cell">${item.income} Eur</div>
                    <div class="cell">${item.expense} Eur</div>
                    <div class="cell">${balance} Eur</div>
                </div>`

        //mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui
        if (item.income <= 0) {
            continue;
        }
        if (item.income < minIncomeMonth ) {
            minIncomeMonth = item.income;
        }
        // minIncomeMonth;

        // mėnuo, kai buvo daugiausiai uždirbta 
        if (item.income > maxIncomeMonth ) {
            maxIncomeMonth = item.income;
        }
            maxIncomeMonth;

            //mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui
        if (item.expense <= 0) {
            continue;
        }
        if (item.expense < minExpenseMonth ) {
            minExpenseMonth = item.expense;
        }
            minExpenseMonth;
        // mėnuo, kai buvo didžiausios išlaidos
        if (item.expense > maxExpenseMonth ) {
            maxExpenseMonth = item.expense;
        }
            maxExpenseMonth;
        
    }
    //Atvaizduojame metines susumuotas reiksmes
    document.getElementById("income").textContent = yearlyIncome + ' Eur';
    document.getElementById("expense").textContent = yearlyExpense + ' ' + 'Eur';
    document.getElementById("balance").textContent = yearlyBalance + ' ' + 'Eur';
   
    //Randame maziausiai uzdirbusio menesio pavadinima

    for (let j = 0; j < list.length; j++) {
        const item = list[j];
        if (item.income === minIncomeMonth) {
            minMonthName = item.month;
        }
        if (item.income === maxIncomeMonth) {
           maxMonthName = item.month;
        }
        if (item.expense === minExpenseMonth) {
            minExpenseMonthName = item.month;
        }
        if (item.expense === maxExpenseMonth) {
            maxExpenseMonthName = item.month;
        }
    }
        month1 = months[minMonthName - 1];
        month2 = months[maxMonthName - 1];
        month3 = months[minExpenseMonthName - 1];
        month4 = months[maxExpenseMonthName - 1];

        document.getElementById("month1").textContent = month1;
        document.getElementById("month2").textContent = month2;
        document.getElementById("month3").textContent = month3;
        document.getElementById("month4").textContent = month4;
        
    return  document.querySelector('#content').innerHTML = HTML;  
    
}

myBalanse('content', account, months);

