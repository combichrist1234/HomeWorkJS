let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
            if ((typeof (a)) === 'string' && (typeof (b)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("ERROR");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let art = prompt("Статья необязательных расходов?", "");
            if (art != null && art != '') {
                appData.optionalExpenses[i] = art;
            } else {
                i = i - 1;
            }
        }
    },
    chooseIncome:function(){
        let items;
        while(!isNaN(items)|| items==''||items==null){
            items=prompt("Что принесет дополнительный доход? (Перечислите через запятую)");
        }
        appData.income=items.split(', ');
        appData.income.push(prompt("Может что-то ещё?"),"");
        appData.income.sort();
        alert("Способы доп. заработка: ");
        appData.income.forEach(function(item,i){
          alert(i+1+":"+item);
        });
        
    }
};
console.log("Наша программа включает в себя данные: ");
for(let key in appData){
    console.log(key);
}

/*chooseExpenses();

detectDayBudget();

detectLevel();

checkSavings();

chooseOptExpenses();*/