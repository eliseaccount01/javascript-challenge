var tbody = d3.select("tbody");

function updatetable(ufoData) {
    ufoData.forEach(function (ufoReport) {
        console.log(ufoReport);
        var row = tbody.append("tr");

        Object.entries(ufoReport).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


var button = d3.select("#filter-btn");

// You can also define the click handler inline
button.on("click", function () {
    d3.select("tbody").selectAll('tr').remove();
    var inputValue = d3.select("#datetime").property("value");
    //console.log(inputValue);
    var filteredData = data.filter(date => date.datetime === inputValue);
    console.log(filteredData);
    updatetable(filteredData);
});

updatetable(data);