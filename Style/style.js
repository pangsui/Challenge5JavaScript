var name = 'Pangsui';

age = 56;
switch (true) {
    case age < 23:
        console.log(name + 'is man');
        break;
    case age >= 23 && age < 45:
        console.log(name + 'man');
        break;
    default:
        console.log(name + ' do sth else');
}


var averageJohn = (89 + 120 + 103) / 3;
var averageMile = (116 + 94 + 123) / 3;

if (averageJohn > averageMile) {
    console.log('John wins with  ' + averageJohn);
} else if (averageMile > averageJohn) {
    console.log('Mike wins with ' + averageMile);
} else {
    console.log('Draw game');
}

var lingeh = {
    firtname: 'pangsui',
    lastName: 'linge',
    birthYear: 1990,
    family: ['thalut', 'mahmud', 'sheif'],
    job: 'developer',
    isMarried: true,
    calAge: function() {
        this.age = 2020 - this.birthYear;
    }

};
lingeh.calAge();
console.log(lingeh);



var mark = {
    fullName: 'Mark',
    mass: 78,
    height: 1.69,
    BMI: function() {
        mark.markB = mark.mass / (mark.height * mark.height);
        return mark.markB;
    }

}

var john = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
    BMI: function() {
        this.johnB = this.mass / (this.height * this.height);
        return this.johnB;
    }

}

if (mark.BMI() > john.BMI()) {
    console.log(mark.fullName + ' has a greater \
    BMI with BMI :' + mark.BMI());
} else if (mark.BMI() < john.BMI()) {
    console.log(john.fullName + ' has a greater BMI with :' + john.BMI());
} else {
    console.log('Both have thesame BMI');
}

console.log(john, mark);


//challenge 5

var john1 = {
    bill: [124, 48, 268, 180, 42],
    tip: function() {
        var allTips = new Array();
        var finalPaidAmount = new Array();
        for (var i = 0; i <= this.bill.length; i++) {
            if (this.bill[i] < 50) {
                this.tipcal = 0.2 * this.bill[i];
                allTips.push(this.tipcal);
                finalPaidAmount.push(this.tipcal + this.bill[i]);
            } else if (this.bill[i] >= 50 && this.bill[i] <= 200) {
                this.tipcal = 0.15 * this.bill[i];
                allTips.push(this.tipcal);
                finalPaidAmount.push(this.tipcal + this.bill[i]);
            } else if (this.bill[i] > 200) {
                this.tipcal = 0.1 * this.bill[i];
                allTips.push(this.tipcal);
                finalPaidAmount.push(this.tipcal + this.bill[i]);
            }
        }
        console.log('allTips ' + allTips);
        console.log('finalAmountJohn : ' + finalPaidAmount);
        return allTips;
    }
}
john1.tip()

//extra challenge 5

var mark = {
    bill: [77, 375, 110, 45],
    tip: function() {
        var allTips = new Array();
        var finalPaidAmount = new Array();
        for (var i = 0; i <= this.bill.length; i++) {
            if (this.bill[i] < 100) {
                this.tipcal = 0.2 * this.bill[i];
                allTips.push(this.tipcal);
                finalPaidAmount.push(this.tipcal + this.bill[i]);
            } else if (this.bill[i] >= 100 && this.bill[i] <= 300) {
                this.tipcal = 0.1 * this.bill[i];
                allTips.push(this.tipcal);
                finalPaidAmount.push(this.tipcal + this.bill[i]);
            } else if (this.bill[i] > 300) {
                this.tipcal = 0.25 * this.bill[i];
                allTips.push(this.tipcal);
                finalPaidAmount.push(this.tipcal + this.bill[i]);
            }
        }
        console.log('allTipsMark ' + allTips);
        console.log('finalAmount : ' + finalPaidAmount);
        return allTips;
    }
}
mark.tip();
console.log('tips are ' + mark.tip());

//creaing the function
function averageOfTips() {
    var sumTipJohn = 0;
    var sumTipMark = 0;
    var averageTipJohn;
    var averageTipMark;
    for (var i = 0; i < john1.tip().length; i++) {
        sumTipJohn += john1.tip()[i];
    }

    for (var j = 0; j < mark.tip().length; j++) {
        sumTipMark += mark.tip()[j];
    }
    console.log('sumJohn ' + sumTipJohn);
    console.log('sumMark ' + sumTipMark);

    averageTipJohn = sumTipJohn / (john1.tip().length);
    averageTipMark = sumTipMark / (mark.tip().length);

    if (averageTipMark > averageTipJohn) {
        console.log('Mark has a higher average tip with tip average :' + averageTipMark);
    } else {
        console.log('John has a higher average tip with tip average : ' + averageTipJohn)
    }
}

//caling the function
averageOfTips();