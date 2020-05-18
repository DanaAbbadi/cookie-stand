'use strict';


// Define the constructor and the helper fxns
var AllStores = [];
function Store(location, MinCst, MaxCst, AvgCookies) {

    this.location = location;
    this.MinCst = MinCst;
    this.MaxCst = MaxCst;
    this.AvgCookies = AvgCookies;
    this.Cst = 0;
    this.sum = 0;
    this.array1 = [];
    AllStores.push(this);

}


Store.prototype.getCst = function (min, max) {
    this.Cst = getRandomCst(min, max);
}

Store.prototype.getArray = function () {
    var num = 0;
    for (var i = 0; i < 14; i++) {
        this.Cst = getRandomCst(23, 65);
        num = cookiesSold(6.3, this.Cst);
        this.sum += num;
        this.array1.push(num);
    }
}

    var container = document.getElementById('Cookies');

    var articleE1 = document.createElement('article');
    container.appendChild(articleE1);

    var h2E1 = document.createElement('h2');
    articleE1.appendChild(h2E1);
    //h2E1.textContent = this.location;



    var tableE1 = document.createElement('table');
    container.appendChild(tableE1);
    //first row
    var headerRow = document.createElement('tr');
    tableE1.appendChild(headerRow);

    var th1 = document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent = 'Location';

Store.prototype.tableHeader = function (All) {

    for (var i = 0; i < this.array1.length; i++) {
        var th2 = document.createElement('th');
        headerRow.appendChild(th2);

        var hour = i + 6;
        if (hour <= 12) {
            th2.textContent = hour + ' am';
        }
        if (hour > 12) {
            hour -= 12;
            th2.textContent = hour + ' pm';
        }

    }
    var th4 = document.createElement('th');
    headerRow.appendChild(th4);
    th4.textContent = 'Daily Location Total';
}
Store.prototype.tableContent = function (All) {


    //second row
    for (var j = 0; j < All.length; j++) {
        var row2 = document.createElement('tr');
        tableE1.appendChild(row2);

        var td1 = document.createElement('td');
        row2.appendChild(td1);
        td1.textContent = All[j].location;

        for (var i = 0; i < All[j].array1.length; i++) {
            var td3 = document.createElement('td');
            row2.appendChild(td3);
            td3.textContent = All[j].array1[i];

        }
        var td4 = document.createElement('td');
        row2.appendChild(td4);
        td4.textContent = All[j].sum;


    }
}
Store.prototype.tableFooter = function (All) {
    var row6 = document.createElement('tr');
    tableE1.appendChild(row6);

    var td6 = document.createElement('td');
    row6.appendChild(td6);
    td6.textContent = 'Total';
    var rowTotal = 0;
    var allTotal = 0;

    for (var i = 0; i < this.array1.length; i++) {

        for (var j = 0; j < 5; j++) {
            rowTotal += All[j].array1[i];
            // console.log(All[j].array1[i]);
        }
        var td7 = document.createElement('td');
        row6.appendChild(td7);
        td7.textContent = rowTotal;
        allTotal += rowTotal;
    }


    var td8 = document.createElement('td');
    row6.appendChild(td8);
    td8.textContent = allTotal;

}

// Helper Functions

function getRandomCst(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function cookiesSold(ck, people) {
    var num = Math.round(ck * people);
    return num;
}



//Creating objects

var Seattle = new Store('Seattle', 23, 65, 6.3);
var Tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai', 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 2, 16, 4.6);





//Calling the fxns
for (var j = 0; j < AllStores.length; j++) {
    AllStores[j].getCst(this.MinCst, this.MaxCst);
    AllStores[j].getArray();
    // AllStores[j].render();
}


AllStores[0].tableHeader(AllStores);
AllStores[0].tableContent(AllStores);
AllStores[0].tableFooter(AllStores);

var sure=1424+	2861+	4279 +	5950 +	7104+	8516+	9971+	11105+	12460+	14193+	15478+	16739+	17987+	19002;
console.log('sure =  ',sure);















// var Seattle = {
//     location: 'Seattle',   
//     MinCst: 23,
//     MaxCst: 65,
//     AvgCookies : 6.3,
//     Cst: 0,
//     array1: [ ],
//     sum: 0,

//     getCst: function (min, max) {
//         this.Cst = getRandomCst(min, max);        
//     },

//     getArray: function(){
//         var num=0;
//          for(var i=0; i< 14; i++){
//             this.Cst = getRandomCst(23, 65);  
//             num= cookiesSold(6.3,this.Cst);
//             this.sum+=num;
//             // console.log(this.Cst, num);
//             this.array1.push(num);
//             //console.log((i+6), this.array1[i]);
//         }

//     },

//     render: function () {

//         var container = document.getElementById('Cookies');
//         // console.log(container);

//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);

//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = this.location;

//         var ulE1 = document.createElement('ul');
//         articleE1.appendChild(ulE1);

//         for (var i = 0; i < this.array1.length; i++) {
//             var liE = document.createElement('li');
//             ulE1.appendChild(liE);
//             var PE = document.createElement('p');
//             ulE1.appendChild(PE);
//             // PE.textContent = i+6;
//             var hour=i+6;
//             if (hour<=12){
//             liE.textContent = hour +'am:  ' +this.array1[i] + ' Cookies';
//             }
//             if (hour>12){
//                 hour-=12;
//             liE.textContent = hour +'pm:  ' +this.array1[i] + ' Cookies';
//             }
//         }
//         var liE = document.createElement('li');
//         ulE1.appendChild(liE);
//         liE.textContent= 'Total: ' +this.sum + ' Cookies';


//     },


// }

// var Tokyo = {
//     location: 'Tokyo',   
//     MinCst: 3,
//     MaxCst: 24,
//     AvgCookies : 1.2,
//     Cst: 0,
//     array1: [ ],
//     sum: 0,

//     getCst: function (min, max) {
//         this.Cst = getRandomCst(min, max);        
//     },

//     getArray: function(){
//         var num=0;
//          for(var i=0; i< 14; i++){
//             this.Cst = getRandomCst(3, 24);  
//             num= cookiesSold(1.2,this.Cst);
//             this.sum+=num;
//             // console.log(this.Cst, num);
//             this.array1.push(num);
//             //console.log((i+6), this.array1[i]);
//         }

//     },

//     render: function () {

//         var container = document.getElementById('Cookies');
//         // console.log(container);

//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);

//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = this.location;

//         var ulE1 = document.createElement('ul');
//         articleE1.appendChild(ulE1);

//         for (var i = 0; i < this.array1.length; i++) {
//             var liE = document.createElement('li');
//             ulE1.appendChild(liE);
//             var PE = document.createElement('p');
//             ulE1.appendChild(PE);
//             // PE.textContent = i+6;
//             var hour=i+6;
//             if (hour<=12){
//             liE.textContent = hour +'am:  ' +this.array1[i] + ' Cookies';
//             }
//             if (hour>12){
//                 hour-=12;
//             liE.textContent = hour +'pm:  ' +this.array1[i] + ' Cookies';
//             }
//         }
//         var liE = document.createElement('li');
//         ulE1.appendChild(liE);
//         liE.textContent= 'Total: ' +this.sum + ' Cookies';


//     },


// }


// var Dubai = {
//     location: 'Dubai',   
//     MinCst: 11,
//     MaxCst: 38,
//     AvgCookies : 3.7,
//     Cst: 0,
//     array1: [ ],
//     sum: 0,

//     getCst: function (min, max) {
//         this.Cst = getRandomCst(min, max);        
//     },

//     getArray: function(){
//         var num=0;
//          for(var i=0; i< 14; i++){
//             this.Cst = getRandomCst(11, 38);  
//             num= cookiesSold(3.7,this.Cst);
//             this.sum+=num;
//             // console.log(this.Cst, num);
//             this.array1.push(num);
//             //console.log((i+6), this.array1[i]);
//         }

//     },

//     render: function () {

//         var container = document.getElementById('Cookies');
//         // console.log(container);

//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);

//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = this.location;

//         var ulE1 = document.createElement('ul');
//         articleE1.appendChild(ulE1);

//         for (var i = 0; i < this.array1.length; i++) {
//             var liE = document.createElement('li');
//             ulE1.appendChild(liE);
//             var PE = document.createElement('p');
//             ulE1.appendChild(PE);
//             // PE.textContent = i+6;
//             var hour=i+6;
//             if (hour<=12){
//             liE.textContent = hour +'am:  ' +this.array1[i] + ' Cookies';
//             }
//             if (hour>12){
//                 hour-=12;
//             liE.textContent = hour +'pm:  ' +this.array1[i] + ' Cookies';
//             }
//         }
//         var liE = document.createElement('li');
//         ulE1.appendChild(liE);
//         liE.textContent= 'Total: ' +this.sum + ' Cookies';


//     },


// }

// var Paris = {
//     location: 'Paris',   
//     MinCst: 20,
//     MaxCst: 38,
//     AvgCookies : 2.3,
//     Cst: 0,
//     array1: [ ],
//     sum: 0,

//     getCst: function (min, max) {
//         this.Cst = getRandomCst(min, max);        
//     },

//     getArray: function(){
//         var num=0;
//          for(var i=0; i< 14; i++){
//             this.Cst = getRandomCst(20, 38);  
//             num= cookiesSold(2.3,this.Cst);
//             this.sum+=num;
//             // console.log(this.Cst, num);
//             this.array1.push(num);
//             //console.log((i+6), this.array1[i]);
//         }

//     },

//     render: function () {

//         var container = document.getElementById('Cookies');
//         // console.log(container);

//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);

//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = this.location;

//         var ulE1 = document.createElement('ul');
//         articleE1.appendChild(ulE1);

//         for (var i = 0; i < this.array1.length; i++) {
//             var liE = document.createElement('li');
//             ulE1.appendChild(liE);
//             var PE = document.createElement('p');
//             ulE1.appendChild(PE);
//             // PE.textContent = i+6;
//             var hour=i+6;
//             if (hour<=12){
//             liE.textContent = hour +'am:  ' +this.array1[i] + ' Cookies';
//             }
//             if (hour>12){
//                 hour-=12;
//             liE.textContent = hour +'pm:  ' +this.array1[i] + ' Cookies';
//             }
//         }
//         var liE = document.createElement('li');
//         ulE1.appendChild(liE);
//         liE.textContent= 'Total: ' +this.sum + ' Cookies';


//     },


// }

// var Lima = {
//     location: 'Lima',   
//     MinCst: 2,
//     MaxCst: 16,
//     AvgCookies : 4.6,
//     Cst: 0,
//     array1: [ ],
//     sum: 0,

//     getCst: function (min, max) {
//         this.Cst = getRandomCst(min, max);        
//     },

//     getArray: function(){
//         var num=0;
//          for(var i=0; i< 14; i++){
//             this.Cst = getRandomCst(2, 16);  
//             num= cookiesSold(4.6,this.Cst);
//             this.sum+=num;
//             // console.log(this.Cst, num);
//             // if(i==2){
//             //     this.array1.shift();
//             //     this.array1[0]=cookiesSold(4.6,this.Cst);
//             // }
//             this.array1.push(num);
//             //console.log((i+6), this.array1[i]);
//         }

//     },

//     render: function () {

//         var container = document.getElementById('Cookies');
//         // console.log(container);

//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);

//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = this.location;

//         var ulE1 = document.createElement('ul');
//         articleE1.appendChild(ulE1);

//         for (var i = 0; i < this.array1.length; i++) {
//             var liE = document.createElement('li');
//             ulE1.appendChild(liE);
//             var PE = document.createElement('p');
//             ulE1.appendChild(PE);
//             // PE.textContent = i+6;
//             var hour=i+6;
//             if (hour<=12){
//             liE.textContent = hour +'am:  ' +this.array1[i] + ' Cookies';
//             }
//             if (hour>12){
//                 hour-=12;
//             liE.textContent = hour +'pm:  ' +this.array1[i] + ' Cookies';
//             }
//         }
//         var liE = document.createElement('li');
//         ulE1.appendChild(liE);
//         liE.textContent= 'Total: ' +this.sum + ' Cookies';


//     },


// }






// // public fxn to calculate random customers number
// //2 helper function to calculate random age within range

// Seattle.getCst(23, 65);
// // console.log(Seattle.Cst);
// Seattle.getArray();
// // console.log(Seattle.getArray());
// Seattle.render();

// Tokyo.getCst(3, 24);
// Tokyo.getArray();
// Tokyo.render();

// Dubai.getCst(11, 38);
// Dubai.getArray();
// Dubai.render();

// Paris.getCst(20, 38);
// Paris.getArray();
// Paris.render();

// Lima.getCst(2, 16);
// Lima.getArray();
// Lima.render();




























