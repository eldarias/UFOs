// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// This function will be used to fill the table to display UFO sightings data
function buildTable(data) {
  // First, clear out any existing data from the table body in the HTML Page:
  tbody.html("");

  // Next, loop through each object in the data using forEach and fat arrow:
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body using "let", so the variable row is limited to just this block of code:
    // the below tells JS to find the <tbody> tag within HTML and add a table row:
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    // object.values tells TV to referecen one object from the array of UFO Sightings.  the (dataRow) argment says we want the values to go into the dataRow.  foEach((val)) specifies we want one object per row
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let changedElementProperty = changedElement.property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    let changedElementId = changedElement.attr("id")

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (changedElementProperty) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filters[changedElementId] = changedElementProperty;
    }
    else {
      delete filters[changedElementId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.  Our default filter will actually be the original table data because we want users to refine their search on their own terms.
    let filteredData = tableData
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values.  "show only the rows equal to the filters data"
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);

  // Build the table when the page loads
  buildTable(tableData);
