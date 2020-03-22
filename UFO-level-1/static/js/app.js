// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
    data.forEach(function(ufoSighting) {

        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

buildTable(tableData);
console.log(data);

data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
});



var button = d3.select("#button");

button.on("click", function() {
    
 
  var inputElement = d3.select("#example-form-input");

 
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);
  var filteredData = data.filter(date => date.datetime === inputValue);

  console.log(filteredData);

  
  var tbody = d3.select("tbody", ".summary");

  buildTable(filteredData);

  });

  