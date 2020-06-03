function dodaj() {
    "use strict";

    var tableBody = document.getElementById("table-body");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var row = document.createElement("tr");

    td1.innerHTML = document.getElementById("lp").value;
    td2.innerHTML = document.getElementById("produkt").value;
    td3.innerHTML = document.getElementById("marka").value;
    td4.innerHTML = document.getElementById("cena").value;
    td5.innerHTML = document.getElementById("data_wyprodukowania").value;


    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    tableBody.appendChild(row);
}