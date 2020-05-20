'use strict';

function changeText(value) {
    var div = document.getElementById("div");
    var text = "";

    if (value == 1) text += "Pat's Salmon Cookies Shirt: 20$";
    if (value == 2) text += "Cookies cutter: 10$";
    if (value == 3) text += "frosted-cookie: 6$";

    div.innerHTML = text;
}


function changeImg(value) {
    var div2 = document.getElementById("div2");
    var text = "";

    if (value == 1) {

        text += "Address: 1510 E Olive Way, Seattle, WA 98122, United States";
        text += ",  phone 5258565";

    }
  
    if (value == 2) {

        text += "Address: Unit TB1-28, Level TB1,DIFC Gate Building,Marble Walk,DIFC - Dubai - United Arab Emirates";
        text += ",  phone 5258565";

    }
    if (value == 3) {
          text += "Address: 2-1-1, Nihonbashimuromachi, Chuo City, Tokyo 103-8328, Japan";
          text += ",  phone 5258565";

    }
    if (value == 4) {
        text += "Address: 15 Rue Condorcet, 92140 Clamart, France";
        text += ",  phone 5258565";

    }
    if (value == 5) {

        text += "Address: Calle Colón 161, Miraflores 15074, Peru";
        text += ",  phone 5258565";

    }
    
    
    div2.innerHTML = text;

}
