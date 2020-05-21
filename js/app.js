'use strict';

var newAdd = false;
var index = 0;
var updating = 0;
var updateStore = false;
var toUpdate = 0;
var rawdelete = 0;
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
        this.Cst = getRandomCst(this.MinCst, this.MaxCst);
        num = cookiesSold(this.AvgCookies, this.Cst);
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
tableE1.id = 'tableId';
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
    var ju=0;
    if (updateStore === true) {
        ju = toUpdate;
        updateStore = false;
    }

    for (var j = ju; j < All.length; j++) {
        var row2 = document.createElement('tr');
        tableE1.appendChild(row2);

        //check if it's a new location
        if (newAdd === true) {
            j = All.length - 1;
        }

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
        rowTotal = 0;

        for (var j = 0; j < All.length; j++) {
            rowTotal += All[j].array1[i];
            //console.log(All[j].array1[i]);
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



// Using the form

var addLocation = document.getElementById('addLocation');



addLocation.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log(event);

    // Storing new data from the form
    var storeLocation = event.target.Location.value;
    var storeMin = parseInt(event.target.Minimum_customer.value);
    var storeMax = parseInt(event.target.Maxmum_customer.value);
    var storeAvg = parseFloat(event.target.Average_cookies.value);

    //check if its a new location or an updated location
    for (var i = 0; i < AllStores.length; i++) {
        //console.log(AllStores[i].location + ' ===  ' + storeLocation);
        if (AllStores[i].location == storeLocation) {
            updateStore = true;
            toUpdate = i;        // toUpdate stores the index that cointains the updated object
            //console.log(i);
        }
    }

    console.table(AllStores);

    // Take the next action depending on updateStore value
    // 1. Updating an object
    if (updateStore == true) {
        //update to new values
        AllStores[toUpdate].MinCst = storeMin;
        AllStores[toUpdate].MaxCst = storeMax;
        AllStores[toUpdate].AvgCookies = storeAvg;
        AllStores[toUpdate].array1 = [];

        // newLocation will be used to call fxns for both actions(1 and 2)
        var newLocation = AllStores[toUpdate];
        // call row2 to delete the row of the updated object and all rows below it
        var rawToUpdate = toUpdate + 1;
        row2(rawToUpdate);
        newLocation.getCst(newLocation.MinCst, newLocation.MaxCst);
        newLocation.getArray();
        newLocation.tableContent(AllStores);
            newLocation.tableFooter(AllStores);



        //newLocation.tableContent2(AllStores, toUpdate);

    }
    // 2. Adding a new object
    else {
        var newLocation = new Store(storeLocation, storeMin, storeMax, storeAvg);
        newAdd = true; // will be used in the content table 
        // delete the "total" row
        rawdelete = AllStores.length;
        row(rawdelete);
        newLocation.getCst(newLocation.MinCst, newLocation.MaxCst);
        newLocation.getArray();
        newLocation.tableContent(AllStores);
        newLocation.tableFooter(AllStores);

    }


    // Calling the fxns


    console.table(AllStores);

    // Calling the table
    // newLocation.tableFooter(AllStores);


});

// var rawdelete = 0;
function row(rawdelete) { // only delete the last row: the "total" row
    document.getElementById("tableId").deleteRow(rawdelete);
}

function row2(rawToUpdate) {
    var tableRow = AllStores.length + 2;
    while ((rawToUpdate) != tableRow) { //start deleting from the updated location, keep deleting unitl you reach the location on top of the updated
        document.getElementById("tableId").deleteRow(rawToUpdate); // each time you delete a row the total number of rows decreases by 1
        tableRow--;
    }

}









