//Navbar Contents

    const navbar = document.getElementById("navbar");
    const navbar_dashboard = document.getElementById("navbar_dashboard");
    const navbar_expenses = document.getElementById("navbar_expenses");
    const navbar_income = document.getElementById("navbar_income");
    const navbar_statistics = document.getElementById("navbar_statistics");
    const navbar_budgets = document.getElementById("navbar_budgets");
    const navbar_settings = document.getElementById("navbar_settings");


//Dashboard Contents

    const dashboard_page = document.getElementById("dashboard_page");
    const current_balance = document.getElementById("current_balance"); 
    const total_income = document.getElementById("total_income");
    const total_expenses = document.getElementById("total_expenses");
    const total_savings = document.getElementById("total_savings");
    const expense_trend = document.getElementById("expense_trend");
    const budget_bar = document.getElementById("budget_bar");
    const dashboard_budget_text = document.getElementById("dashboard_budget_text");
    const budget_button = document.getElementById("budget_button");
    const recent_transactions = document.getElementById("recent_transactions");
    const financial_data = document.getElementById("financial_data");
    const live_data = document.getElementById("live_data");
    const recent_transactions1 = document.getElementById("recent_transactions1");
    const recent_transactions2 = document.getElementById("recent_transactions2");
    const recent_transactions3 = document.getElementById("recent_transactions3");
    const recent_transactions4 = document.getElementById("recent_transactions4");
    const dashboard_graph = document.getElementById("dashboard_graph");
    const dashboard_graph_label = document.getElementById("dashboard_graph_label");
    const dashboard_comparison = document.getElementById("dashboard_comparison");
    const dashboard_amount = document.getElementById("dashboard_amount");
    const from = document.getElementById("from");
    const to = document.getElementById("to");
    const convertor_button = document.getElementById("convertor_button");
    const dashboard_exchange = document.getElementById("dashboard_exchange");
    const dashboard_reverse = document.getElementById("dashboard_reverse");
    const total_income_display = document.getElementById("total_income_display");
    const total_expenses_display = document.getElementById("total_expenses_display");


//Income Contents

    const income_page = document.getElementById("income_page");
    const income_label = document.getElementById("income_label");
    const income_type = document.getElementById("income_type");
    const income_unit = document.getElementById("income_unit");
    const income_mode = document.getElementById("income_mode");
    const income_amount = document.getElementById("income_amount");
    const income_date = document.getElementById("income_date");
    const add_income = document.getElementById("add_income");
    const income_list = document.getElementById("income_list");
    const others_income = document.getElementById("others_income");


//Expenses Contents

    const expenses_page = document.getElementById("expenses_page");
    const expense_label = document.getElementById("expense_label");
    const expense_type = document.getElementById("expense_type");
    const expense_unit = document.getElementById("expense_unit");
    const expense_mode = document.getElementById("expense_mode");
    const expense_amount = document.getElementById("expense_amount");
    const expense_date = document.getElementById("expense_date");
    const add_expense = document.getElementById("add_expense");
    const expense_list = document.getElementById("expense_list");
    const others_expense = document.getElementById("others_expense");

//Budgets Contents

    const budgets_page = document.getElementById("budgets_page");
    const budgetCategory = document.getElementById("budgetCategory");
    const budgetCurrency = document.getElementById("budgetCurrency");
    const budgetAmount = document.getElementById("budgetAmount");
    const setBudgetButton = document.getElementById("setBudgetButton");
    const deleteBudgetCategory = document.getElementById("deleteBudgetCategory");
    const deleteBudgetButton = document.getElementById("deleteBudgetButton");
    const budgets_list = document.getElementById("budgets_list");

//Statistics Contents

    const statistics_page = document.getElementById("statistics_page");
    const pie_chart = document.getElementById("pie_chart");
    const line_chart = document.getElementById("line_chart");
    const pie_chart_options = document.getElementById("pie_chart_options");
    const line_option = document.getElementById("line_option");
    const line_start_date = document.getElementById("line_start_date");
    const line_end_date = document.getElementById("line_end_date");
    const show_line_graph = document.getElementById("show_line_graph");
    const pie_display = document.getElementById("pie_display");
    const bar_chart = document.getElementById("bar_chart");
    const bar_display = document.getElementById("bar_display");
    const highest_spending_category = document.getElementById("highest_spending_category");
    const highest_spending_category_amount = document.getElementById("highest_spending_category_amount");
    const highest_spending_percentage = document.getElementById("highest_spending_percentage");
    const average_spending = document.getElementById("average_spending");
    const average_spending_comparison = document.getElementById("average_spending_comparison");
    const largest_expense_label = document.getElementById("largest_expense_label");
    const largest_expense_amount = document.getElementById("largest_expense_amount");
    const largest_expense_date = document.getElementById("largest_expense_date");
    const total_transactions = document.getElementById("total_transactions");
    const averageDays = document.getElementById("averageDays");

//Settings Contents

    const settings_page = document.getElementById("settings_page");
    const INR = document.getElementById("INR");
    const USD = document.getElementById("USD");
    const JPY = document.getElementById("JPY");
    const GBP = document.getElementById("GBP");
    const EUR = document.getElementById("EUR");

    const exportCSV = document.getElementById("exportCSV");
    const importCSV = document.getElementById("importCSV");
    const csvFile = document.getElementById("csvFile");
    const deleteData = document.getElementById("clearData");

    const baseCurrencyList = [INR,USD,JPY,GBP,EUR];



/*localStorage{
    income : Array of [Income , Label , Initial Unit , Initial Amount , Type , Mode , Date , Current Unit , Current Value],
    expenses : Array of [Expense , Label , Initial Unit , Initial Amount , Type , Mode , Date , Current Unit , Current Value],
    transactions : Array of [Income/Expense , Label , Initial Unit , Initial Amount , Type , Mode , Date , Current Unit , Current Value],
    baseCurrency : 'inr'/'jpy',...,
    baseSymbol : '₹'/'¥'/'$'/'€'/'£',
    coreIncomeCategories : [....],
    coreExpenseCategories : [...],
    budgets : [{Category  , Initial Currency , Initial Amount , Current Unit , Current Amount}....]
}
*/

if (localStorage.getItem('income') == null){
    localStorage.income = '[]';
}
if (localStorage.getItem('expenses') == null){
    localStorage.expenses = '[]';
}
if (localStorage.getItem('transactions') == null){
    localStorage.transactions = '[]';
}
if (localStorage.getItem('baseCurrency') == null){
    localStorage.baseCurrency = 'inr';
}
if (localStorage.getItem('baseSymbol') == null){
    localStorage.baseSymbol = '₹';
}
if (localStorage.getItem('coreIncomeCategories') == null){
    localStorage.coreIncomeCategories = '["Salary / Stipend","Freelancing","Scholarship","Internship","Investments","Gifts","Refunds","Business","Rental Income"]';
}
if (localStorage.getItem('coreExpenseCategories') == null){
    localStorage.coreExpenseCategories = '["Food and Dining","Transport","Housing","Bills and Subscriptions","Education","Shopping","Health","Entertainment","Travel","Personal","Financial"]';
}
if (localStorage.getItem('budgets') == null){
    localStorage.budgets = '[]';
}

//Months List
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const days = [31,28,31,30,31,30,31,31,30,31,30,31];

//Currencies and their symbols
const baseCurrencies = {
    inr : '₹',
    usd : '$',
    jpy : '¥',
    gbp : '£',
    eur : '€'
}


//Function to calculate the total amount
function total_amount(transaction_type){
    let total = 0;
    let records = JSON.parse(localStorage[transaction_type]);
    records.forEach((record) => {
        if (record[0] == 'Income'){
            total += Number(record[8]);
        }
        if (record[0] == 'Expense'){
            total -= Number(record[8]);
        }
    })
    return total;
}

//Function to compare 2 dates. Date format : [Year , Month , Day]
function compare_date(date1,date2){
    let year1 = date1[0];
    let month1 = date1[1];
    let day1 = date1[2];
    let year2 = date2[0];
    let month2 = date2[1];
    let day2 = date2[2];

    if (year1 == year2){
        if (month1 == month2){
            if (day1 == day2){
                return "same";
            }
            else if (day1 < day2){
                return "after";
            }
            else{
                return "before";
            }
        }
        else if (month1 < month2){
            return "after";
        }
        else{
            return "before";
        }
    }
    else if (year1 < year2){
        return "after";
    }
    else{
        return "before";
    }
}

//Function to push a record
function push_record(transaction_type,record){
    let full_record = JSON.parse(localStorage[transaction_type]);
    let input_date = record[6];
    if (full_record.length > 0){
        for (let i = 0 ; i < full_record.length ; i++){
            let date = full_record[i][6];
            let comparison = compare_date(date,input_date);
            if (comparison == 'before'){
                full_record.splice(i,0,record);
                break;
            }
            else if (comparison == 'after' && i == full_record.length-1){
                full_record.push(record);
                break;
            }
            else if (comparison == 'same'){
                full_record.splice(i,0,record);
                break;
            }
        }
    }
    else{
        full_record.push(record);
    }
    return full_record;
}

//Function to get the current month. Returns [year , month number , 1]
function get_current_month(){
    let date = Date().split(' ');
    date = [date[3],date[1],1];
    date[1] = months.indexOf(date[1]) + 1;
    date = date.map(element => Number(element));
    return date;
}

//Function to calculate the total amount for the current month
function total_amount_this_month(transaction_type){
    let total = 0;
    let records = JSON.parse(localStorage[transaction_type]);
    let current_month_firstday = get_current_month();
    let current_month_lastday = [current_month_firstday[0],current_month_firstday[1],31];
    let new_records = [];
    for (let i = 0 ; i < records.length ; i++){
        let record_date = records[i][6];
        let comparison1 = compare_date(record_date,current_month_firstday);
        let comparison2 = compare_date(record_date,current_month_lastday);
        if (comparison1 != 'after' && comparison2 != 'before'){
            new_records.push(records[i]);
        }
    }
    new_records.forEach((record) => {
        if (record[0] == 'Income'){
            total += Number(record[8]);
        }
        if (record[0] == 'Expense'){
            total -= Number(record[8]);
        }
    })

    return total;
}

//Function to calculate the total amount for a certain month
function monthlyTotal(transaction_type,month){
    let total = 0;
    let records = JSON.parse(localStorage[transaction_type]);
    let current_month_firstday = month;
    let current_month_lastday = [current_month_firstday[0],current_month_firstday[1],31];
    let new_records = [];
    for (let i = 0 ; i < records.length ; i++){
        let record_date = records[i][6];
        let comparison1 = compare_date(record_date,current_month_firstday);
        let comparison2 = compare_date(record_date,current_month_lastday);
        if (comparison1 != 'after' && comparison2 != 'before'){
            new_records.push(records[i]);
        }
    }
    new_records.forEach((record) => {
        if (record[0] == 'Income'){
            total += Number(record[8]);
        }
        if (record[0] == 'Expense'){
            total -= Number(record[8]);
        }
    })

    return total;
}

//Function to return all indices of a certain value in localStorage
function getIndices(array,value){
    let indices = [];
    for (let i = 0 ; i < array.length ; i++){
        let record = array[i];
        let canBeAdded = true;
        for (let j = 0 ; j < 6 ; j++){
            if (record[j] != value[j]){
                canBeAdded = false;
                break;
            }
        }
        if (canBeAdded){
            record = record[6];
            let value1 = value[6];
            for (let j = 0 ; j < 3; j++){
                if (record[j] != value1[j]){
                    canBeAdded = false;
                    break;
                }
            }
        }
        if (canBeAdded){
            indices.push(i);
        }
    }
    return indices;
}

//Function to convert from one currency to another. Apply await to the variable receiving it.
async function convert(amount,unit1,unit2){
    let url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/' + `${unit1}` + '.json';
    let conversionList = await fetch(url);
    conversionList = await conversionList.json();
    let conversionRate = conversionList[unit1][unit2];
    return amount * conversionRate;
}

//Function to fetch all categories
function getAllCategories(type,categories){
    categories = JSON.parse(categories);
    let records = JSON.parse(localStorage[type]);
    records.forEach((record) => {
        let category = record[4];
        if (!categories.includes(category)){
            categories.push(category);
        }
    })
    return categories;
}

//Function to check if a category has a budget set or not
function budgetsContains(category){
    let budgetRecords = JSON.parse(localStorage.budgets);
    for (let i=0 ; i<budgetRecords.length ; i++){
        budgetRecord = budgetRecords[i];
        if (budgetRecord[0] == category){
            return true;
        }
    }
    return false;
}

//Function to delete a category budget
function deleteBudget(category){
    let budgetRecords = JSON.parse(localStorage.budgets);
    let index;
    for (let i = 0 ; i < budgetRecords.length ; i++){
        let recordCategory = budgetRecords[i][0];
        if (recordCategory == category){
            index = i;
            break;
        }
    }
    budgetRecords.splice(index,1);
    localStorage.budgets = JSON.stringify(budgetRecords);
}

//Function to compute the total of a category (monthly basis available) : time month format : [year , month number , 1]
//TOTAL RETURNED FOR THE EXPENSE OF A MONTH WILL BE NEGATIVE
function categoryTotal(transactionType,category,time){
    let records = JSON.parse(localStorage[transactionType]);
    let total = 0;
    if (time == "all"){
        records.forEach((record) => {
            if (record[4] == category){
                total += Number(record[8]);
            }
        })
    }
    else {
        let current_month_firstday = time;
        let current_month_lastday = [current_month_firstday[0],current_month_firstday[1],31];
        let new_records = [];
        if (category != 'Combined Budget'){
            for (let i = 0 ; i < records.length ; i++){
                let record_date = records[i][6];
                let comparison1 = compare_date(record_date,current_month_firstday);
                let comparison2 = compare_date(record_date,current_month_lastday);
                if (comparison1 != 'after' && comparison2 != 'before' && records[i][4] == category){
                    new_records.push(records[i]);
                }
            }
        }
        else{
            for (let i = 0 ; i < records.length ; i++){
                let record_date = records[i][6];
                let comparison1 = compare_date(record_date,current_month_firstday);
                let comparison2 = compare_date(record_date,current_month_lastday);
                if (comparison1 != 'after' && comparison2 != 'before'){
                    new_records.push(records[i]);
                }
            }
        }
        new_records.forEach((record) => {
            if (record[0] == 'Income'){
                total += Number(record[8]);
            }
            if (record[0] == 'Expense'){
                total -= Number(record[8]);
            }
        })
    }
    return total;
}

//Function to get certain transactions in a certain month
function getMonthTransactions(month_start,category){
    let month_end = [month_start[0],month_start[1],31];
    let records = JSON.parse(localStorage[category]);
    let transactions=[];
    records.forEach((record) => {
        let date = record[6];
        if (compare_date(month_start,date)!='before' && compare_date(month_end,date)!='after'){
            transactions.push(record);
        }
    })
    return transactions;
}

//Function to return the months in between 2 months
function getMonths(date1,date2){
    date2 = [date2[0],date2[1],1];
    let months = [];
    if (date1[1] == 12){
        date1 = [date1[0]+1,1,1];
    }
    else{
        date1 = [date1[0],date1[1]+1,1];
    }

    while (compare_date(date2,date1) == 'before'){
        months.push(date1);
        if (date1[1] == 12){
            date1 = [date1[0]+1,1,1];
        }
        else{
            date1 = [date1[0],date1[1]+1,1];
        }
    }

    return months;
}

//Function to display the overall share of expenses for a certain month or all time. Target element : pie_chart
function setPieChart(category){
    pie_display.innerText = `Expenses Division (${localStorage.baseSymbol})`;
    let categoryData = {};
    if (category == 'This Month'){
        let transactions = getMonthTransactions(get_current_month(),'expenses');
        transactions.forEach((transaction) => {
            let transactionCategory = transaction[4];
            if (!Object.keys(categoryData).includes(transactionCategory)){
                categoryData[transactionCategory] = -categoryTotal('expenses',transactionCategory,get_current_month());
            }
        })
    }
    else{
        let transactions = JSON.parse(localStorage.expenses);
        transactions.forEach((transaction) => {
            let transactionCategory = transaction[4];
            if (!Object.keys(categoryData).includes(transactionCategory)){
                categoryData[transactionCategory] = categoryTotal('expenses',transactionCategory,'all');
            }
        })
    }
    let labels = Object.keys(categoryData);
    let data = [];
    labels.forEach((label) => {
        data.push(categoryData[label]);
    })


   new Chart(pie_chart, {

        type: "doughnut",
        data: {
            labels: labels,
            datasets: [{
                data: data,
                borderWidth: 2,
                // borderColor:"black",
                hoverOffset:20,
                cutout:'40%',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio : false,
            plugins: {
                legend: {
                    position: "left",
                    labels: {
                        boxHeight: 10,
                        // padding: 10,
                        boxWidth:10,
                        color: "black",
                        font: {
                            size: 15,
                            // weight:,
                        }
                    }
                }
                
            },
            layout : {
                padding:5
            }
        }
    })
}

//Function to display the line chart
function setLineChart(category,start_date,end_date){
    let transaction_records = JSON.parse(localStorage.transactions);
    let eligible_transactions = [];
    transaction_records.forEach((transaction_record) => {
        let date = transaction_record[6];
        if (compare_date(start_date,date) != 'before' && compare_date(end_date,date) != 'after'){
            eligible_transactions.push(transaction_record);
        }
    })
    
    // Monthly details : [['Apr 2026',income,expenses]]
    let monthly_details = [];

    //First Month
    let incomes = 0;
    let expenses = 0;
    let checkpoint = [start_date[0],start_date[1],31];
    for (let i = 0 ; i < transaction_records.length ; i++){
        let record = transaction_records[i];
        let date = record[6];
        if (compare_date(start_date,date)!='before' && compare_date(checkpoint,date)!='after'){
            if (record[0] == 'Income'){
                incomes += Number(record[8]);
            }
            else{
                expenses += Number(record[8]);
            }
        }
    }
    monthly_details.push([`${months[start_date[1]-1]} ${start_date[0]}`,incomes,expenses]);

    //Months in Between
    let interMonths = getMonths(start_date,end_date);
    interMonths.forEach((interMonth) => {
        monthly_details.push([`${months[interMonth[1]-1]} ${interMonth[0]}`,monthlyTotal('income',interMonth),-monthlyTotal('expenses',interMonth)]);
    })

    //Last Month
    incomes = 0;
    expenses = 0;
    checkpoint = [end_date[0],end_date[1],1];
    for (let i = 0 ; i < transaction_records.length ; i++){
        let record = transaction_records[i];
        let date = record[6];
        if (compare_date(checkpoint,date)!='before' && compare_date(end_date,date)!='after'){
            if (record[0] == 'Income'){
                incomes += Number(record[8]);
            }
            else{
                expenses += Number(record[8]);
            }
        }
    }
    monthly_details.push([`${months[end_date[1]-1]} ${end_date[0]}`,incomes,expenses]);
    
    let monthsList = [];
    incomes = [];
    expenses = [];
    let savings=[];
    monthly_details.forEach((monthly_detail) => {
        monthsList.push(monthly_detail[0]);
        incomes.push(monthly_detail[1]);
        expenses.push(monthly_detail[2]);
        savings.push(monthly_detail[1]-monthly_detail[2]);
    })

    let data,label,colour;
    if (category=='Incomes'){
        data = incomes;
        label = `Incomes from ${start_date[2]} ${months[start_date[1]-1]} ${start_date[0]} to ${end_date[2]} ${months[end_date[1]-1]} ${end_date[0]} (${localStorage.baseSymbol})`;
        colour = 'darkgreen';
    }
    else if (category=='Expenses'){
        data = expenses;
        label = `Expenses from ${start_date[2]} ${months[start_date[1]-1]} ${start_date[0]} to ${end_date[2]} ${months[end_date[1]-1]} ${end_date[0]} (${localStorage.baseSymbol})`;
        colour = 'red';
    }
    else{
        data = savings;
        label = `Savings from ${start_date[2]} ${months[start_date[1]-1]} ${start_date[0]} to ${end_date[2]} ${months[end_date[1]-1]} ${end_date[0]} (${localStorage.baseSymbol})`;
        colour = 'rgb(29, 110, 110)';
    }

    new Chart(line_chart , {
        type: 'line',
        data: {
            labels:monthsList,
            datasets: [{
                label: label,
                data: data,
                fill: false,
                borderColor: colour,
                tension: 0.1,
                borderWidth:2,
            }]
        },
        options : {
            responsive:true,
            maintainAspectRatio:false,
            plugins : {
                legend : {
                    labels : {
                        boxHeight:10,
                        boxWidth:10,
                        color:"black",
                        font : {
                            size:15,
                            weight:"bold",
                        }
                    }
                }
            }
        }
    })

}

//Function to return a date in our format
function returnDate(date){
    date = date.split('-');
    return [Number(date[0]),Number(date[1]),Number(date[2])];
}

//Function to return the previous month
function previousMonth(month){
    if (month[1] == 1){
        return [month[0]-1,12,1];
    }
    else{
        return [month[0],month[1]-1,1];
    }
}

//Function to set the bar graph
function setBarChart(){
    let month3 = get_current_month();
    let month2 = previousMonth(month3);
    let month1 = previousMonth(month2);

    let incomes = [monthlyTotal('income',month1),monthlyTotal('income',month2),monthlyTotal('income',month3)];
    let expenses = [-monthlyTotal('expenses',month1),-monthlyTotal('expenses',month2),-monthlyTotal('expenses',month3)];
    let labels = [`${months[month1[1]-1]} ${month1[0]}`,`${months[month2[1]-1]} ${month2[0]}`,`${months[month3[1]-1]} ${month3[0]}`];

    bar_display.innerText = `Monthly Comparison (${localStorage.baseSymbol})`;

    new Chart(bar_chart, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Income",
                    data: incomes,
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor:  "rgb(75, 192, 192)",
                    borderWidth:2,
                },
                {
                    label: "Expense",
                    data: expenses,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor:  "rgb(255, 99, 132)",
                    borderWidth:2,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio:false,
            plugins: {
                legend: {
                    position: "top",
                    labels : {
                        boxHeight:10,
                        boxWidth:10,
                        color:"black",
                        font : {
                            size:15,
                        }
                    }
                },
            }
        }
    });
}

//Function to compute the average expense
function getAverage(month,days){
    let total = monthlyTotal('expenses',month);
    return Number(-(total / days).toFixed(2));
}

//Function to set the top insights
function setTopInsights(){
    //Highest Spending Category
    let categories = getAllCategories('expenses',localStorage.coreExpenseCategories);
    let maxSpending = 0;
    let maxCategory='';
    categories.forEach((category) => {
        let total = categoryTotal('expenses',category,'all');
        if (total > maxSpending){
            maxSpending = total;
            maxCategory = category;
        }
    })
    let total = total_amount('expenses');
    let percentage = -maxSpending/total*100;
    if (total==0){
        percentage = 0;
    }
    highest_spending_category.innerHTML = maxCategory;
    highest_spending_category_amount.innerHTML = `<b>${localStorage.baseSymbol} ${maxSpending}</b>`;
    highest_spending_percentage.innerHTML = `<b>${percentage.toFixed(2)}%</b> of your total expenses`;

    //Average Spending This Month
    let noDays = days[get_current_month()[1]-1];
    if (get_current_month()[1]==2 && get_current_month()[2]%4==0){
        noDays = 29;
    }
    let average = getAverage(get_current_month(),noDays);
    average_spending.innerHTML = `<b>${localStorage.baseSymbol} ${average}</b>`;
    averageDays.innerText = `(computed over ${noDays} days)`;
    if (previousMonth(get_current_month())[1]==2 && previousMonth(get_current_month())[2]%4==0){
        noDays = 29;
    }
    else{
        noDays = noDays = days[previousMonth(get_current_month())[1]-1];
    }
    let averagePreviousMonth = getAverage(previousMonth(get_current_month()),noDays);
    if (averagePreviousMonth != 0){
        percentage = ((average-averagePreviousMonth)/averagePreviousMonth)*100;
        if (percentage >= 0){
            average_spending_comparison.innerHTML = `<b>+ ${percentage.toFixed(2)}%</b> compared to last month`;
        }
        else{
            average_spending_comparison.innerHTML = `<b>- ${-percentage.toFixed(2)}%</b> compared to last month</b>`;
        }
    }
    else{
        average_spending_comparison.innerHTML = "You had no expenses last month";
    }

    //Largest Expense
    let transactions = JSON.parse(localStorage.expenses);
    let label = 'No Expenses Yet';
    let date = '';
    maxSpending = 0;
    transactions.forEach((transaction) => {
        let amount = Number(transaction[8]);
        if (amount > maxSpending){
            maxSpending = amount;
            label = transaction[1];
            date = transaction[6];
            date = `on ${date[2]} ${months[date[1]-1]} ${date[0]}`;
        }
    })
    largest_expense_label.innerText = label;
    largest_expense_amount.innerHTML = `<b>${localStorage.baseSymbol} ${maxSpending}</b>`;
    largest_expense_date.innerText = date;

    //Total Transactions this month
    transactions = getMonthTransactions(get_current_month(),'transactions');
    total_transactions.innerHTML = `<b>${transactions.length}</b>`;

}

//Function to set the dashboard graph
function setDashboardGraph(){
    let month6 = get_current_month();
    let month5 = previousMonth(month6);
    let month4 = previousMonth(month5);
    let month3 = previousMonth(month4);
    let month2 = previousMonth(month3);
    let month1 = previousMonth(month2);

    let incomes = [monthlyTotal('income',month1),monthlyTotal('income',month2),monthlyTotal('income',month3),monthlyTotal('income',month4),monthlyTotal('income',month5),monthlyTotal('income',month6)];
    let expenses = [-monthlyTotal('expenses',month1),-monthlyTotal('expenses',month2),-monthlyTotal('expenses',month3),-monthlyTotal('expenses',month4),-monthlyTotal('expenses',month5),-monthlyTotal('expenses',month6)];
    let labels = [`${months[month1[1]-1]} ${month1[0]}`,`${months[month2[1]-1]} ${month2[0]}`,`${months[month3[1]-1]} ${month3[0]}`,`${months[month4[1]-1]} ${month4[0]}`,`${months[month5[1]-1]} ${month5[0]}`,`${months[month6[1]-1]} ${month6[0]}`];

    bar_display.innerText = `Monthly Comparison (${localStorage.baseSymbol})`;

    new Chart(dashboard_graph, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Income",
                    data: incomes,
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor:  "rgb(75, 192, 192)",
                    borderWidth:2,
                },
                {
                    label: "Expense",
                    data: expenses,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor:  "rgb(255, 99, 132)",
                    borderWidth:2,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio:false,
            plugins: {
                legend: {
                    position: "top",
                    labels : {
                        boxHeight:10,
                        boxWidth:10,
                        color:"black",
                        font : {
                            size:15,
                        }
                    }
                },
            }
        }
    });
}

//Function to set the currency convertor
async function setCurrencyConvertor(){
    from.innerHTML = '';
    to.innerHTML = '';
    let currencies = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json')
    currencies = await currencies.json();
    Object.keys(currencies).forEach((currency) => {
        let text = `<option title="${currencies[currency]}">${currency.toUpperCase()}</option>`;
        from.innerHTML += text;
        to.innerHTML += text;
    })
    dashboard_amount.placeholder = `Enter amount in ${from.value}`;
}








//Default Dashboard Page Setup
function dashboard_setup(){
    current_balance.innerText = localStorage.baseSymbol + ' ' + total_amount('transactions').toFixed(2);
    total_income.innerText = localStorage.baseSymbol + ' ' + total_amount_this_month('income').toFixed(2);
    total_expenses.innerText = localStorage.baseSymbol + ' ' + total_amount_this_month('expenses').toFixed(2) * -1;
    total_savings.innerText = localStorage.baseSymbol + ' ' + total_amount_this_month('transactions').toFixed(2);

    if (budgetsContains('Combined Budget')){
        let expenses = total_amount_this_month('expenses')*-1;
        let budget;
        let budgetRecords = JSON.parse(localStorage.budgets);
        for (let i=0 ; i<budgetRecords.length ; i++){
            let budgetRecord = budgetRecords[i];
            if (budgetRecord[0] == 'Combined Budget'){
                budget = Number(budgetRecord[4]);
                break;
            }
        }
        if (budget >= expenses){
            budget_bar.style.accentColor = '#4a8a6e';
        }
        else{
            budget_bar.style.accentColor = 'rgb(246, 68, 68)';
        }
        
        budget_bar.max = budget;
        budget_bar.value = expenses;
        dashboard_budget_text.innerText = `${localStorage.baseSymbol}${expenses} used of ${localStorage.baseSymbol}${budget}`;
        budget_button.innerHTML = '<b>View Budgets</b>';
    }
    else{
        budget_bar.max = 100;
        budget_bar.value = 0;
        dashboard_budget_text.innerText = "You have not set a monthly combined budget yet!";
        budget_button.style.width = '50%';
        budget_button.innerHTML = "<b>Set Combined Budget</b>";
    }

    let recTrans = [recent_transactions1,recent_transactions2,recent_transactions3,recent_transactions4];
    let records = JSON.parse(localStorage.transactions);
    let index = records.length;
    for (let i=0 ; i<records.length ; i++){
        if (i == 4){
            break;
        }
        let j = records.length-1-i;
        let record = records[j];
        let code = '';
        let transactionBlock = recTrans[i];
        code += `<div style="font-weight:bold">${record[1]}</div>`;
        code += `<div>${record[4]}</div>`;
        let date = record[6];
        let month = months[date[1]-1];
        let displayDate = `${date[2]} ${month} ${date[0]}`;
        code += `<div>${displayDate}</div>`;
        if (record[0] == 'Income'){
            code += `<div style="color:darkgreen;font-weight:bold;">+ ${localStorage.baseSymbol}${record[8]}</div>`;
        }
        else{
            code += `<div style="color:red;font-weight:bold;">- ${localStorage.baseSymbol}${record[8]}</div>`;
        }
        transactionBlock.innerHTML = code;
    }
    if (index<3){
        for (let i = index ; i < 4 ; i++){
            recTrans[i].innerHTML = '';
        }
    }
    dashboard_graph_label.innerText = `Monthly Comparison (${localStorage.baseSymbol})`;
    setDashboardGraph();

    let current_month = get_current_month();
    let balance = 0;
    records = JSON.parse(localStorage.transactions);
    records.forEach((record) => {
        let amount = Number(record[8]);
        let date = record[6];
        if (compare_date(current_month,date) == 'before'){
            if (record[0] == 'Income'){
                balance += amount;
            }
            else{
                balance -= amount;
            }
        }
    })
    if (balance == 0){
        dashboard_comparison.innerText = `Your balance at the start of the month was ${localStorage.baseSymbol} 0`;
    }
    else{
        let percentage = (total_amount('transactions')-balance)/Math.abs(balance) * 100;
        if (percentage >= 0){
            dashboard_comparison.innerHTML = `+ ${percentage.toFixed(2)}% since the start of this month`;
        }
        else{
            dashboard_comparison.innerHTML = `- ${-percentage.toFixed(2)}% since the start of this month`;
        }
    }
    setCurrencyConvertor();

    total_income_display.innerText = `${localStorage.baseSymbol} ${total_amount('income')}`;
    total_expenses_display.innerText = `${localStorage.baseSymbol} ${-total_amount('expenses')}`;
}
dashboard_setup();

//Default Income Page Setup (Setting the list of income records)
function income_setup(){
    let income_records = JSON.parse(localStorage.income);
    income_list.innerHTML = '';
    for(let i = income_records.length-1 ; i >= 0 ; i--){
        income_record = income_records[i];
        let incomeLabel = `<div><b>${income_record[1]}</b></div>`;
        let incomeAmount = `<div><b>${income_record[2]} ${income_record[3]}</b></div>`;
        let incomeType = `<div>${income_record[4]}</div>`;
        let incomeMode = `<div>${income_record[5]}</div>`;
        let incomeDate = income_record[6];
        let incomeMonth = months[incomeDate[1]-1];
        incomeDate = `${incomeDate[2]} ${incomeMonth} ${incomeDate[0]}`;
        incomeDate = `<div>${incomeDate}</div>`;
        let incomeDelete = `<button class = "delete_income" id=${JSON.stringify(i)}>Delete Record</button>`;
        let recordDisplay = incomeLabel+incomeAmount+incomeType+incomeMode+incomeDate+incomeDelete;
        recordDisplay = `<div class='income_list'>${recordDisplay}</div>`;
        income_list.innerHTML += recordDisplay;
    }
    income_unit.value = localStorage.baseCurrency.toUpperCase();
}
income_setup();

//Default Expenses Page Setup (Setting the list of income records)
function expenses_setup(){
    let expense_records = JSON.parse(localStorage.expenses);
    expense_list.innerHTML = '';
    for(let i = expense_records.length-1 ; i >= 0 ; i--){
        expense_record = expense_records[i];
        let expenseLabel = `<div><b>${expense_record[1]}</b></div>`;
        let expenseAmount = `<div><b>${expense_record[2]} ${expense_record[3]}</b></div>`;
        let expenseType = `<div>${expense_record[4]}</div>`;
        let expenseMode = `<div>${expense_record[5]}</div>`;
        let expenseDate = expense_record[6];
        let expenseMonth = months[expenseDate[1]-1];
        expenseDate = `${expenseDate[2]} ${expenseMonth} ${expenseDate[0]}`;
        expenseDate = `<div>${expenseDate}</div>`;
        let expenseDelete = `<button class = "delete_expense" id=${JSON.stringify(i)}>Delete Record</button>`;
        let recordDisplay = expenseLabel+expenseAmount+expenseType+expenseMode+expenseDate+expenseDelete;
        recordDisplay = `<div class='expense_list'>${recordDisplay}</div>`;
        expense_list.innerHTML += recordDisplay;
    }
    expense_unit.value = localStorage.baseCurrency.toUpperCase();
}
expenses_setup();

//Default Budgets Page Setup
function budgets_setup(){
    //Add and Delete Budget
    let budgetCategories = getAllCategories('expenses',localStorage.coreExpenseCategories);
    let code = '<option>Combined Budget</option>'
    budgetCategories.forEach((budgetCategory) => {
        code += '<option>';
        code += budgetCategory;
        code += '</option>';
    })
    budgetCategory.innerHTML = code;

    budgetCategories = [];
    code = '';
    let budgets = JSON.parse(localStorage.budgets);
    budgets.forEach((budget) => {
        budgetCategories.push(budget[0]);
    })    
    budgetCategories.forEach((budgetCategory) => {
        code += '<option>';
        code += budgetCategory;
        code += '</option>';
    })
    deleteBudgetCategory.innerHTML = code;

    //Budget List
    code = '';
    let budgetRecords = JSON.parse(localStorage.budgets);
    budgetRecords.forEach((budgetRecord) => {
        let categoryExpenses = categoryTotal('expenses',budgetRecord[0],get_current_month()) * -1;
        let categoryBudget = Number(budgetRecord[4]);
        let percentage = categoryExpenses / categoryBudget * 100;
        code += '<div class = "budgets_list">';
        code += '<div>';
        code += `<div style="font-size:120%;"><b>${budgetRecord[0]}</b></div>`;
        code += `<div style="color:rgb(84, 84, 84)">${localStorage.baseSymbol}${categoryExpenses} of ${localStorage.baseSymbol}${categoryBudget} used this month</div>`;
        code += '</div>';
        if (percentage <= 100){
            code += `<progress max=100 value=${percentage} class="budget_progress"></progress>`;
        }
        else{
            code += `<progress max=100 value=${percentage} style = "accent-color:rgb(246, 68, 68)" class="budget_progress"></progress>`;
        }
        code += `<div><b>${percentage.toFixed(2)}%</b></div>`;
        code += '</div>';
    })
    budgets_list.innerHTML = code;
    budgetCurrency.value = localStorage.baseCurrency.toUpperCase();
}
budgets_setup();

//Default Statistics Page Setup. Add condition that to date must be after from date.
function statistics_setup(){
    setPieChart('');
    let currentDate = new Date().toLocaleDateString().split('/');
    currentDate = [Number(currentDate[2]),Number(currentDate[1]),Number(currentDate[0])];
    let startDate = [currentDate[0],1,1];
    let date = new Date().toLocaleDateString().split('/');
    line_start_date.value = `${date[2]}-01-01`;
    line_end_date.value = `${date[2]}-${date[1]}-${date[0]}`;
    setLineChart('Incomes',startDate,currentDate);
    setBarChart();
    setTopInsights();
}
statistics_setup();

//Settings Page Setup
function settings_setup(){
    document.getElementById(localStorage.baseCurrency.toUpperCase()).checked = true;
}
settings_setup();









//Navbar Controls
{
    navbar_dashboard.addEventListener('click',() => {
        dashboard_page.style.display = 'block';
        expenses_page.style.display = 'none';
        income_page.style.display = 'none';
        statistics_page.style.display = 'none';
        budgets_page.style.display = 'none';
        settings_page.style.display = 'none';
    })
    navbar_expenses.addEventListener('click',() => {
        dashboard_page.style.display = 'none';
        expenses_page.style.display = 'block';
        income_page.style.display = 'none';
        statistics_page.style.display = 'none';
        budgets_page.style.display = 'none';
        settings_page.style.display = 'none';
    })
    navbar_income.addEventListener('click',() => {
        dashboard_page.style.display = 'none';
        expenses_page.style.display = 'none';
        income_page.style.display = 'block';
        statistics_page.style.display = 'none';
        budgets_page.style.display = 'none';
        settings_page.style.display = 'none';
    })
    navbar_budgets.addEventListener('click',() => {
        dashboard_page.style.display = 'none';
        expenses_page.style.display = 'none';
        income_page.style.display = 'none';
        statistics_page.style.display = 'none';
        budgets_page.style.display = 'block';
        settings_page.style.display = 'none';
    })
    navbar_statistics.addEventListener('click',() => {
        dashboard_page.style.display = 'none';
        expenses_page.style.display = 'none';
        income_page.style.display = 'none';
        statistics_page.style.display = 'block';
        budgets_page.style.display = 'none';
        settings_page.style.display = 'none';
    })
    navbar_settings.addEventListener('click',() => {
        dashboard_page.style.display = 'none';
        expenses_page.style.display = 'none';
        income_page.style.display = 'none';
        statistics_page.style.display = 'none';
        budgets_page.style.display = 'none';
        settings_page.style.display = 'block';
    })
}

//Dashboard Page Controls
{
    budget_button.addEventListener('click',() => {
        dashboard_page.style.display = 'none';
        expenses_page.style.display = 'none';
        income_page.style.display = 'none';
        statistics_page.style.display = 'none';
        budgets_page.style.display = 'block';
        settings_page.style.display = 'none';
    })

    convertor_button.addEventListener('click',() => {
        (async function(){
            if (dashboard_amount.value != ''){
                dashboard_exchange.innerText = `${from.value} ${dashboard_amount.value} = ${to.value} ${(await convert(Number(dashboard_amount.value),from.value.toLowerCase(),to.value.toLowerCase())).toFixed(2)}`;
            }
        })()
    })

    dashboard_reverse.addEventListener('click',() => {
        let temp = from.value;
        from.value = to.value;
        to.value = temp;
        dashboard_amount.placeholder = `Enter amount in ${from.value}`;
    })

    from.addEventListener('change',() => {
        dashboard_amount.placeholder = `Enter amount in ${from.value}`;
    })
}

//Expenses Page Controls
{
    others_expense.value = expense_type.value;
    expense_type.addEventListener('change', function() {
        if (this.value == 'Others') {
            others_expense.style.display = 'block'; 
            others_expense.value = '';
        } else {
            others_expense.style.display = 'none';  
            others_expense.value = expense_type.value;
        }
    });
    add_expense.addEventListener('click',() => {
        (async function(){
            if (expense_label.value!='' && Number(expense_amount.value)>0 && expense_date.value != '' && others_expense.value != ''){
                //Addition of the expense to the record
                let expenses = JSON.parse(localStorage.expenses);
                let transactions = JSON.parse(localStorage.transactions);
                let date = expense_date.value.split('-');
                date = date.map(element => Number(element));

                //Conversion from the initial unit to the base unit
                let baseValue;
                let baseCurrency = localStorage.baseCurrency;
                if (baseCurrency != expense_unit.value.toLowerCase()){
                    baseValue = (await convert(Number(expense_amount.value),expense_unit.value.toLowerCase(),baseCurrency)).toFixed(2);
                }
                else{
                    baseValue = expense_amount.value;
                }

                let expense_push = ['Expense',expense_label.value,expense_unit.value,expense_amount.value,others_expense.value,expense_mode.value,date,baseCurrency,baseValue];
                expenses = push_record('expenses',expense_push);
                transactions = push_record('transactions',expense_push);
                localStorage.expenses = JSON.stringify(expenses);
                localStorage.transactions = JSON.stringify(transactions);
                
                //Back to default
                expense_label.value='';
                expense_amount.value='';
                expense_mode.value='UPI';
                expense_unit.value='INR';
                expense_type.value='Food and Dining';
                expense_date.value = '';
                others_expense.style.display = 'none';
                others_expense.value='Food and Dining';
                Chart.getChart('dashboard_graph').destroy();
                dashboard_setup();
                expenses_setup();
                budgets_setup();
                Chart.getChart('pie_chart').destroy();
                Chart.getChart('line_chart').destroy();
                Chart.getChart('bar_chart').destroy();
                statistics_setup();
            }
        })()
    })

    //Delete Expense Controls
    document.querySelector('#expense_list').addEventListener('click', (e) => {
        if (!e.target.classList.contains('delete_expense')) return;
        let choice = confirm(`Do you wish to delete the expense record?`);
        if (choice){
            let expense_records = JSON.parse(localStorage.expenses);
            let transaction_records = JSON.parse(localStorage.transactions);
            let deletedExpenseIndex = Number(e.target.id);
            let transactionIndicesIndex = getIndices(expense_records,expense_records[deletedExpenseIndex]).indexOf(deletedExpenseIndex);
            let transactionIndex = getIndices(transaction_records,expense_records[deletedExpenseIndex])[transactionIndicesIndex];
            expense_records.splice(deletedExpenseIndex,1);
            transaction_records.splice(transactionIndex,1);
            localStorage.expenses = JSON.stringify(expense_records);
            localStorage.transactions = JSON.stringify(transaction_records);
            expenses_setup();
            Chart.getChart('dashboard_graph').destroy();
            dashboard_setup();
            budgets_setup();
            Chart.getChart('pie_chart').destroy();
            Chart.getChart('line_chart').destroy();
            Chart.getChart('bar_chart').destroy();
            statistics_setup();
        }
    });
}

//Income Page Controls
{
    others_income.value = income_type.value;
    income_type.addEventListener('change', function() {
        if (this.value == 'Others') {
            others_income.style.display = 'block'; 
            others_income.value = '';
        } else {
            others_income.style.display = 'none';  
            others_income.value = income_type.value;
        }
    });
    add_income.addEventListener('click',() => {
        (async function() {
            if (income_label.value!='' && Number(income_amount.value)>0 && income_date.value!='' && others_income.value!=''){
                //Addition of the expense to the record
                let income = JSON.parse(localStorage.income);
                let transactions = JSON.parse(localStorage.transactions);
                let date = income_date.value.split('-');
                date = date.map(element => Number(element));

                //Conversion from the initial unit to the base unit
                let baseValue;
                let baseCurrency = localStorage.baseCurrency;
                if (baseCurrency != income_unit.value.toLowerCase()){
                    baseValue = (await convert(Number(income_amount.value),income_unit.value.toLowerCase(),baseCurrency)).toFixed(2);
                }
                else{
                    baseValue = income_amount.value;
                }

                let income_push = ['Income',income_label.value,income_unit.value,income_amount.value,others_income.value,income_mode.value,date,baseCurrency,baseValue];
                income = push_record('income',income_push);
                transactions = push_record('transactions',income_push);
                localStorage.income = JSON.stringify(income);
                localStorage.transactions = JSON.stringify(transactions);
                
                //Back to default
                income_label.value='';
                income_amount.value='';
                income_mode.value='UPI';
                income_unit.value='INR';
                income_type.value='Salary / Stipend';
                income_date.value='';
                others_income.style.display = 'none';
                others_income.value='Salary / Stipend';
                Chart.getChart('dashboard_graph').destroy();
                dashboard_setup();
                income_setup();
                Chart.getChart('pie_chart').destroy();
                Chart.getChart('line_chart').destroy();
                Chart.getChart('bar_chart').destroy();
                statistics_setup();
            }
        })()
    })

    //Delete Income Controls
    document.querySelector('#income_list').addEventListener('click', (e) => {
        if (!e.target.classList.contains('delete_income')) return;
        let choice = confirm(`Do you wish to delete the income record?`);
        if(choice){
            let income_records = JSON.parse(localStorage.income);
            let transaction_records = JSON.parse(localStorage.transactions);
            let deletedIncomeIndex = Number(e.target.id);
            let transactionIndicesIndex = getIndices(income_records,income_records[deletedIncomeIndex]).indexOf(deletedIncomeIndex);
            let transactionIndex = getIndices(transaction_records,income_records[deletedIncomeIndex])[transactionIndicesIndex];
            income_records.splice(deletedIncomeIndex,1);
            transaction_records.splice(transactionIndex,1);
            localStorage.income = JSON.stringify(income_records);
            localStorage.transactions = JSON.stringify(transaction_records);
            Chart.getChart('dashboard_graph').destroy();
            dashboard_setup();
            income_setup();
            Chart.getChart('pie_chart').destroy();
            Chart.getChart('line_chart').destroy();
            Chart.getChart('bar_chart').destroy();
            statistics_setup();
        }
    });

}

//Budgets Page Controls
{
    setBudgetButton.addEventListener('click', () => {
        (async function(){
            if (budgetAmount.value != ''){
                let currentAmount;
                if (budgetCurrency.value.toLowerCase() != localStorage.baseCurrency){
                    currentAmount = (await convert(Number(budgetAmount.value),budgetCurrency.value.toLowerCase(),localStorage.baseCurrency)).toFixed(2);
                }
                else{
                    currentAmount = Number(budgetAmount.value);
                }
                let budgetRecord = [budgetCategory.value,budgetCurrency.value,budgetAmount.value,localStorage.baseCurrency,currentAmount];
                let budgetRecords = JSON.parse(localStorage.budgets);
                if (budgetsContains(budgetCategory.value)){
                    deleteBudget(budgetCategory.value);
                }
                budgetRecords = JSON.parse(localStorage.budgets);
                if ((budgetCategory.value) == 'Combined Budget'){
                    budgetRecords.unshift(budgetRecord);
                }
                else{
                    budgetRecords.push(budgetRecord);
                }
                localStorage.budgets = JSON.stringify(budgetRecords);
                budgetCategory.value = "Combined Budget";
                budgetCurrency.value = "INR";
                budgetAmount.value = '';

                budgets_setup();
                Chart.getChart('dashboard_graph').destroy();
                dashboard_setup();
                
            }
        })()
    })

    deleteBudgetButton.addEventListener('click',() => {
        deleteBudget(deleteBudgetCategory.value);
        budgets_setup();
        Chart.getChart('dashboard_graph').destroy();
        dashboard_setup();
    })
}

//Statistics Page Controls
{
    pie_chart_options.addEventListener('change',() => {
        Chart.getChart('pie_chart').destroy();
        setPieChart(pie_chart_options.value);
    })

    line_start_date.addEventListener('change',() => {
        line_end_date.min = line_start_date.value;
    })

    show_line_graph.addEventListener('click',() => {
        if (line_start_date.value!='' && line_end_date.value!=''){
            Chart.getChart('line_chart').destroy();
            setLineChart(line_option.value,returnDate(line_start_date.value),returnDate(line_end_date.value));
        }
    })
}

//Settings Page Controls
{
    baseCurrencyList.forEach((baseCurrency) => {
        baseCurrency.addEventListener('click',() => {
            (async function(){
                localStorage.baseCurrency = baseCurrency.value.toLowerCase();
                localStorage.baseSymbol = baseCurrencies[baseCurrency.value.toLowerCase()];
                expense_unit.value = localStorage.baseCurrency.toUpperCase();
                income_unit.value = localStorage.baseCurrency.toUpperCase();
                budgetCurrency.value = localStorage.baseCurrency.toUpperCase();

                //Modifying Income Records
                let incomeRecords = JSON.parse(localStorage.income);
                for (let i=0 ; i<incomeRecords.length ; i++){
                    incomeRecord = incomeRecords[i];
                    incomeRecord[7] = localStorage.baseCurrency;
                    incomeRecord[8] = (await convert(Number(incomeRecord[3]),incomeRecord[2].toLowerCase(),localStorage.baseCurrency)).toFixed(2);
                }
                
                localStorage.income = JSON.stringify(incomeRecords);

                //Modifying Expense Records
                let expenseRecords = JSON.parse(localStorage.expenses);
                for (let i=0 ; i<expenseRecords.length ; i++){
                    expenseRecord = expenseRecords[i];
                    expenseRecord[7] = localStorage.baseCurrency;
                    expenseRecord[8] = (await convert(Number(expenseRecord[3]),expenseRecord[2].toLowerCase(),localStorage.baseCurrency)).toFixed(2);
                }
                
                localStorage.expenses = JSON.stringify(expenseRecords);

                //Modifying Transaction Records
                let transactionRecords = JSON.parse(localStorage.transactions);
                for (let i=0 ; i<transactionRecords.length ; i++){
                    transactionRecord = transactionRecords[i];
                    transactionRecord[7] = localStorage.baseCurrency;
                    transactionRecord[8] = (await convert(Number(transactionRecord[3]),transactionRecord[2].toLowerCase(),localStorage.baseCurrency)).toFixed(2);
                }
                localStorage.transactions = JSON.stringify(transactionRecords);

                //Modifying Budget Records
                let budgetRecords = JSON.parse(localStorage.budgets);
                for (let i=0 ; i<budgetRecords.length ; i++){
                    budgetRecord = budgetRecords[i];
                    budgetRecord[3] = localStorage.baseCurrency;
                    budgetRecord[4] = (await convert(Number(budgetRecord[2]),budgetRecord[1].toLowerCase(),localStorage.baseCurrency)).toFixed(2);
                }
                
                localStorage.budgets = JSON.stringify(budgetRecords);


                Chart.getChart('dashboard_graph').destroy();
                Chart.getChart('pie_chart').destroy();
                Chart.getChart('line_chart').destroy();
                Chart.getChart('bar_chart').destroy();

                dashboard_setup();
                income_setup();
                expenses_setup();
                budgets_setup();
                statistics_setup();
            })()
        })
    })

    exportCSV.addEventListener('click',() => {
        let choice = confirm("Click OK to download the CSV file");
        if (choice){
            let data = [['Transaction Type' , 'Label' , 'Initial Currency' , 'Initial Amount' , 'Category' , 'Transaction Mode' , 'Date' , 'Current Currency' , 'Current Amount']];
            let records = JSON.parse(localStorage.transactions);
            records.forEach((record) => {
                record[6] = `${record[6][2]} ${months[record[6][1]-1]} ${record[6][0]}`;
                data.push(record);
            })

            const csvContent = data
            .map(row => row.join(","))
            .join("\n");

            console.log(csvContent);

            const blob = new Blob([csvContent], {
            type: "text/csv;charset=utf-8;"
            });

            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "Transactions.csv";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(link.href);
        }
    })

    importCSV.addEventListener('click', () => csvFile.click());

    csvFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            (async function(){
                let contents = event.target.result;
                contents = contents.split('\n');
                for (let i=1 ; i < contents.length ; i++){
                    contents[i] = contents[i].split(',');
                }
                if (contents[contents.length-1] == ''){
                    contents.splice(contents.length-1,1);
                }
                for (let i=1 ; i < contents.length ; i++){
                    let content = contents[i];
                    let date = content[6];
                    date = date.split('-');
                    date = [Number(date[2]),Number(date[1]),Number(date[0])];
                    content[6] = date;
                    content.push(localStorage.baseCurrency);
                    content.push((await convert(Number(content[3]),content[2].toLowerCase(),localStorage.baseCurrency)).toFixed(2));

                    if (content[0] == 'Income'){
                        let newData = push_record('income',content);
                        localStorage.income = JSON.stringify(newData);
                    }
                    else{
                        let newData = push_record('expenses',content);
                        localStorage.expenses = JSON.stringify(newData);
                    }
                    let newData = push_record('transactions',content);
                    localStorage.transactions = JSON.stringify(newData);
                }
                Chart.getChart('dashboard_graph').destroy();
                Chart.getChart('pie_chart').destroy();
                Chart.getChart('line_chart').destroy();
                Chart.getChart('bar_chart').destroy();

                dashboard_setup();
                income_setup();
                expenses_setup();
                budgets_setup();
                statistics_setup();

                alert("Data from the uploaded CSV file has been uploaded");
            })()
         };
        reader.readAsText(file);
        csvFile.value = '';
    });

    deleteData.addEventListener('click',() => {

        if (confirm("You are about to delete all your data")){
            localStorage.income = '[]';
            localStorage.expenses = '[]';
            localStorage.transactions = '[]';
            localStorage.baseCurrency = 'inr';
            localStorage.baseSymbol = '₹';
            localStorage.budgets = '[]';

            csvFile.value = '';
            Chart.getChart('dashboard_graph').destroy();
            Chart.getChart('pie_chart').destroy();
            Chart.getChart('line_chart').destroy();
            Chart.getChart('bar_chart').destroy();

            dashboard_setup();
            income_setup();
            expenses_setup();
            budgets_setup();
            statistics_setup();
            alert("All of your local data has been deleted");
        }
    })
}