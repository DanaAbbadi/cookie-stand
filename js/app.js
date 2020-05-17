'use strict'


// Defining Objects

var Seattle = {
    location: 'Seattle',   
    MinCst: 23,
    MaxCst: 65,
    AvgCookies : 6.3,
    Cst: 0,
    array1: [ ],
    sum: 0,

    getCst: function (min, max) {
        this.Cst = getRandomCst(min, max);        
    },

    getArray: function(){
        var num=0;
         for(var i=0; i< 14; i++){
            this.Cst = getRandomCst(23, 65);  
            num= cookiesSold(6.3,this.Cst);
            this.sum+=num;
            // console.log(this.Cst, num);
            this.array1.push(num);
            //console.log((i+6), this.array1[i]);
        }
        
    },

    render: function () {
       
        var container = document.getElementById('Cookies');
        // console.log(container);

        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);

        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.location;

        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);

        for (var i = 0; i < this.array1.length; i++) {
            var liE = document.createElement('li');
            ulE1.appendChild(liE);
            var PE = document.createElement('p');
            ulE1.appendChild(PE);
            // PE.textContent = i+6;
            var hour=i+6;
            if (hour<=12){
            liE.textContent = hour +'am:  ' +this.array1[i] + ' Cookies';
            }
            if (hour>12){
                hour-=12;
            liE.textContent = hour +'pm:  ' +this.array1[i] + ' Cookies';
            }
        }
        var liE = document.createElement('li');
        ulE1.appendChild(liE);
        liE.textContent= 'Total: ' +this.sum + ' Cookies';

    
    },


}

var Tokyo = {
    location: 'Tokyo',   
    MinCst: 3,
    MaxCst: 24,
    AvgCookies : 1.2,
    Cst: 0,
    array1: [ ],
    sum: 0,

    getCst: function (min, max) {
        this.Cst = getRandomCst(min, max);        
    },

    getArray: function(){
        var num=0;
         for(var i=0; i< 14; i++){
            this.Cst = getRandomCst(3, 24);  
            num= cookiesSold(1.2,this.Cst);
            this.sum+=num;
            // console.log(this.Cst, num);
            this.array1.push(num);
            //console.log((i+6), this.array1[i]);
        }
        
    },

    render: function () {
       
        var container = document.getElementById('Cookies');
        // console.log(container);

        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);

        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.location;

        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);

        for (var i = 0; i < this.array1.length; i++) {
            var liE = document.createElement('li');
            ulE1.appendChild(liE);
            var PE = document.createElement('p');
            ulE1.appendChild(PE);
            // PE.textContent = i+6;
            var hour=i+6;
            if (hour<=12){
            liE.textContent = hour +'am:  ' +this.array1[i] + ' Cookies';
            }
            if (hour>12){
                hour-=12;
            liE.textContent = hour +'pm:  ' +this.array1[i] + ' Cookies';
            }
        }
        var liE = document.createElement('li');
        ulE1.appendChild(liE);
        liE.textContent= 'Total: ' +this.sum + ' Cookies';

    
    },


}


var Dubai = {
    location: 'Dubai',   
    MinCst: 11,
    MaxCst: 38,
    AvgCookies : 3.7,
    Cst: 0,
    array1: [ ],
    sum: 0,

    getCst: function (min, max) {
        this.Cst = getRandomCst(min, max);        
    },

    getArray: function(){
        var num=0;
         for(var i=0; i< 14; i++){
            this.Cst = getRandomCst(11, 38);  
            num= cookiesSold(3.7,this.Cst);
            this.sum+=num;
            // console.log(this.Cst, num);
            this.array1.push(num);
            //console.log((i+6), this.array1[i]);
        }
        
    },

    render: function () {
       
        var container = document.getElementById('Cookies');
        // console.log(container);

        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);

        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.location;

        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);

        for (var i = 0; i < this.array1.length; i++) {
            var liE = document.createElement('li');
            ulE1.appendChild(liE);
            var PE = document.createElement('p');
            ulE1.appendChild(PE);
            // PE.textContent = i+6;
            var hour=i+6;
            if (hour<=12){
            liE.textContent = hour +'am:  ' +this.array1[i] + ' Cookies';
            }
            if (hour>12){
                hour-=12;
            liE.textContent = hour +'pm:  ' +this.array1[i] + ' Cookies';
            }
        }
        var liE = document.createElement('li');
        ulE1.appendChild(liE);
        liE.textContent= 'Total: ' +this.sum + ' Cookies';

    
    },


}

var Paris = {
    location: 'Paris',   
    MinCst: 20,
    MaxCst: 38,
    AvgCookies : 2.3,
    Cst: 0,
    array1: [ ],
    sum: 0,

    getCst: function (min, max) {
        this.Cst = getRandomCst(min, max);        
    },

    getArray: function(){
        var num=0;
         for(var i=0; i< 14; i++){
            this.Cst = getRandomCst(20, 38);  
            num= cookiesSold(2.3,this.Cst);
            this.sum+=num;
            // console.log(this.Cst, num);
            this.array1.push(num);
            //console.log((i+6), this.array1[i]);
        }
        
    },

    render: function () {
       
        var container = document.getElementById('Cookies');
        // console.log(container);

        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);

        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.location;

        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);

        for (var i = 0; i < this.array1.length; i++) {
            var liE = document.createElement('li');
            ulE1.appendChild(liE);
            var PE = document.createElement('p');
            ulE1.appendChild(PE);
            // PE.textContent = i+6;
            var hour=i+6;
            if (hour<=12){
            liE.textContent = hour +'am:  ' +this.array1[i] + ' Cookies';
            }
            if (hour>12){
                hour-=12;
            liE.textContent = hour +'pm:  ' +this.array1[i] + ' Cookies';
            }
        }
        var liE = document.createElement('li');
        ulE1.appendChild(liE);
        liE.textContent= 'Total: ' +this.sum + ' Cookies';

    
    },


}

var Lima = {
    location: 'Lima',   
    MinCst: 2,
    MaxCst: 16,
    AvgCookies : 4.6,
    Cst: 0,
    array1: [ ],
    sum: 0,

    getCst: function (min, max) {
        this.Cst = getRandomCst(min, max);        
    },

    getArray: function(){
        var num=0;
         for(var i=0; i< 14; i++){
            this.Cst = getRandomCst(2, 16);  
            num= cookiesSold(4.6,this.Cst);
            this.sum+=num;
            // console.log(this.Cst, num);
            // if(i==2){
            //     this.array1.shift();
            //     this.array1[0]=cookiesSold(4.6,this.Cst);
            // }
            this.array1.push(num);
            //console.log((i+6), this.array1[i]);
        }
        
    },

    render: function () {
       
        var container = document.getElementById('Cookies');
        // console.log(container);

        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);

        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.location;

        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);

        for (var i = 0; i < this.array1.length; i++) {
            var liE = document.createElement('li');
            ulE1.appendChild(liE);
            var PE = document.createElement('p');
            ulE1.appendChild(PE);
            // PE.textContent = i+6;
            var hour=i+6;
            if (hour<=12){
            liE.textContent = hour +'am:  ' +this.array1[i] + ' Cookies';
            }
            if (hour>12){
                hour-=12;
            liE.textContent = hour +'pm:  ' +this.array1[i] + ' Cookies';
            }
        }
        var liE = document.createElement('li');
        ulE1.appendChild(liE);
        liE.textContent= 'Total: ' +this.sum + ' Cookies';

    
    },


}






// public fxn to calculate random customers number
//2 helper function to calculate random age within range

Seattle.getCst(23, 65);
// console.log(Seattle.Cst);
Seattle.getArray();
// console.log(Seattle.getArray());
Seattle.render();

Tokyo.getCst(3, 24);
Tokyo.getArray();
Tokyo.render();

Dubai.getCst(11, 38);
Dubai.getArray();
Dubai.render();

Paris.getCst(20, 38);
Paris.getArray();
Paris.render();

Lima.getCst(2, 16);
Lima.getArray();
Lima.render();




function getRandomCst(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function cookiesSold(ck, people) {
    var num= Math.round(ck*people);
    return num;
}


























