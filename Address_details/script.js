var name;

var doorNumber;

var streetName;

var city;

var state;

var country;

var Address = new Array();

var Address1 = new Object();

var Address2 = new Object();

function addAddress()

{

  name = document.getElementById("name").value;

  document.getElementById("name").value = "";

  doorNumber = document.getElementById("doorNumber").value;

  document.getElementById("doorNumber").value = "";

  streetName = document.getElementById("streetName").value;

  document.getElementById("streetName").value = "";

  city = document.getElementById("city").value;

  document.getElementById("city").value = "";

  state = document.getElementById("state").value;

  document.getElementById("state").value = "";

  country = document.getElementById("country").value;

  document.getElementById("country").value = "";



  Address1 = {
    Name: name,
    DoorNumber: doorNumber,
    Street: streetName,
    City: city,
    State: state,
    Country: country
  };

  Address.push(Address1);

}



function displayAddressDetails()

{

  var el = document.getElementById("result");

  if (Address.length == 0)

  {

    el.innerHTML = "";

    el.innerHTML = "No details to display";

  } else

  {

    var cols = [];

    for (var i = 0; i < Address.length; i++) {

      for (var k in Address[i]) {

        if (cols.indexOf(k) === -1) {

          // Push all keys to the array

          cols.push(k);

        }

      }

    }



    // Create a table element

    var table = document.createElement("table");

    table.setAttribute("id", "resultTable");

    table.setAttribute("border", "1");

    // Create table row tr element of a table

    var tr = table.insertRow(-1);



    for (i = 0; i < cols.length; i++) {



      // Create the table header th element

      var theader = document.createElement("th");



      theader.innerHTML = cols[i];



      // Append columnName to the table row

      tr.appendChild(theader);

    }



    // Adding the data to the table

    for (i = 0; i < Address.length; i++) {

      // Create a new row

      trow = table.insertRow(-1);

      for (var j = 0; j < cols.length; j++) {

        var cell = trow.insertCell(-1);



        // Inserting the cell at particular place

        cell.innerHTML = Address[i][cols[j]];

      }

    }



    el.innerHTML = "";

    el.appendChild(table);



  }

}



function searchAddressByState()

{

  var ss = document.getElementById("searchbox").value;

  var searchData = Address.filter(function (obj) {

    return obj.State == ss;

  });

  if (searchData.length != 0)

  {

    Address2 = searchData;

    cols = [];

    for (i = 0; i < Address.length; i++) {

      for (k in Address[i]) {

        if (cols.indexOf(k) === -1) {

          // Push all keys to the array

          cols.push(k);

        }

      }

    }



    // Create a table element

    var table = document.createElement("table");

    // Create table row tr element of a table

    table.setAttribute("id", "resultTable");

    table.setAttribute("border", "1");



    tr = table.insertRow(-1);



    for (i = 0; i < cols.length; i++) {



      // Create the table header th element

      var theader = document.createElement("th");

      theader.innerHTML = cols[i];



      // Append columnName to the table row

      tr.appendChild(theader);

    }



    // Adding the data to the table

    for (i = 0; i < Address2.length; i++) {

      // Create a new row

      trow = table.insertRow(-1);

      for (j = 0; j < cols.length; j++) {

        cell = trow.insertCell(-1);

        // Inserting the cell at particular place

        cell.innerHTML = Address2[i][cols[j]];

      }

    }



    // Add the newly created table containing json data              

    //var el1 =document.getElementById("result").getElementsByTagName("table")[0];

    var el = document.getElementById("result");

    el.innerHTML = "";

    el.appendChild(table);

  } else {

    var el = document.getElementById("result");

    el.innerText = "";

    el.innerText = "No Address found in the " + ss + " state";

  }



}