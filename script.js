function populateDropdown(data, dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.innerHTML = ""; // Clear previous options

    // Sort the table names alphabetically
    var sortedTableNames = data.map(item => item.table_name).sort();

    sortedTableNames.forEach(function (tableName) {
        var option = document.createElement("option");
        option.value = tableName;
        option.textContent = tableName;
        dropdown.appendChild(option);
    });
}

function findSimilarTableNames() {
    const similarTableNames = [];

    // Convert RePlatformData table names to a map for quick lookup
    const rePlatformTableMap = new Map(RePlatformData.map(item => [item.table_name.toLowerCase(), item.table_name]));

    FunderPortalData.forEach(funderTable => {
        const funderTableName = funderTable.table_name.toLowerCase();

        // Check for exact match or partial match in RePlatformData
        const match = [...rePlatformTableMap.keys()].find(
            rePlatformTableName => rePlatformTableName === funderTableName ||
                rePlatformTableName.includes(funderTableName) ||
                funderTableName.includes(rePlatformTableName)
        );

        if (match) {
            similarTableNames.push({
                FunderPortalData: funderTable.table_name,
                RePlatformData: rePlatformTableMap.get(match)
            });
        }
    });

    console.log(JSON.stringify(similarTableNames, null, 2));
    return similarTableNames;
}


function showTable(tableData, containerId) {
    var tableContainer = document.getElementById(containerId);
    tableContainer.innerHTML = ""; // Clear previous table if any

    var selectedTable = document.getElementById(containerId === 'tableContainer1' ? 'tableSelect1' : 'tableSelect2').value;
    var data = tableData.find(item => item.table_name === selectedTable);

    var table = document.createElement("table");
    var tableCaption = document.createElement("caption");
    tableCaption.textContent = data.table_name;
    table.appendChild(tableCaption);

    var headerRow = document.createElement("tr");
    var columnHeader1 = document.createElement("th");
    columnHeader1.textContent = "Column Name";
    var columnHeader2 = document.createElement("th");
    columnHeader2.textContent = "Data Type";
    var columnHeader3 = document.createElement("th");
    columnHeader3.textContent = "Foreign Key Table";
    headerRow.appendChild(columnHeader1);
    headerRow.appendChild(columnHeader2);
    headerRow.appendChild(columnHeader3);
    table.appendChild(headerRow);

    data.columns.sort((a, b) => a.column_name.localeCompare(b.column_name));

    data.columns.forEach(function (column) {
        var row = document.createElement("tr");
        var columnNameCell = document.createElement("td");
        columnNameCell.textContent = column.column_name;
        var dataTypeCell = document.createElement("td");
        dataTypeCell.textContent = column.data_type;
        var foreignKeyCell = document.createElement("td");

        // Find the foreign key reference for this column
        var foreignKey = data.foreign_keys.find(fk => fk.column_name === column.column_name);
        foreignKeyCell.textContent = foreignKey ? foreignKey.referenced_table_name : "";

        // Check if column name exists in both tables and highlight mismatches
        if (containerId != 'tableContainer1' && !compareColumns(FunderPortalData, RePlatformData, data.table_name, column.column_name)) {
            columnNameCell.classList.add("red-text"); // Add red text class
        }

        row.appendChild(columnNameCell);
        row.appendChild(dataTypeCell);
        row.appendChild(foreignKeyCell);
        table.appendChild(row);
    });

    tableContainer.appendChild(table);
}

function compareColumns(table1, table2, tableName, columnName) {
    var table1Columns = getColumns(table1, tableName);
    var table2Columns = getColumns(table2, tableName);

    return table1Columns.includes(columnName) && table2Columns.includes(columnName);
}

function getColumns(data, tableName) {
    var table = data.find(item => item.table_name === tableName);
    return table ? table.columns.map(column => column.column_name) : [];
}

function checkAndShowSimilarTable(selectedData, containerId) {
    // Determine the selected table name from the dropdown
    var selectedTable = document.getElementById(containerId === 'tableContainer1' ? 'tableSelect1' : 'tableSelect2').value;

    // Find the similar table mapping
    var similarTableEntry = similarTable.find(entry =>
        containerId === 'tableContainer1' ? entry.FunderPortalData === selectedTable : entry.RePlatformData === selectedTable
    );

    // Show the table in both containers if a similar table is found
    if (similarTableEntry) {
        showTable(selectedData === FunderPortalData ? FunderPortalData : RePlatformData, containerId);
        var otherContainerId = containerId === 'tableContainer1' ? 'tableContainer2' : 'tableContainer1';
        var otherSelectId = containerId === 'tableContainer1' ? 'tableSelect2' : 'tableSelect1';

        // Set the other select dropdown to the similar table name and trigger its onchange event
        document.getElementById(otherSelectId).value = selectedData === FunderPortalData ? similarTableEntry.RePlatformData : similarTableEntry.FunderPortalData;
        document.getElementById(otherSelectId).dispatchEvent(new Event('change'));
    } else {
        // Show the table in the corresponding container only
        showTable(selectedData, containerId);
    }
}

// Populate dropdowns with table names sorted alphabetically
populateDropdown(FunderPortalData, 'tableSelect1');
populateDropdown(RePlatformData, 'tableSelect2');

// Show tables on initial load
showTable(FunderPortalData, "tableContainer1");
showTable(RePlatformData, "tableContainer2");



//findSimilarTableNames();
