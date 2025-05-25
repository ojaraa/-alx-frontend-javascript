var student1 = {
    firstName: "Favour",
    lastName: "Okereke",
    age: 24,
    location: "Lagos",
};
var student2 = {
    firstName: "Zoe",
    lastName: "Okoh",
    age: 2,
    location: "Anambra",
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var headerRow = table.insertRow();
var header1 = document.createElement("th");
var header2 = document.createElement("th");
header1.textContent = "First Name";
header2.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map