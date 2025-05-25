var teacher3 = {
    firstName: 'Ayomide',
    fullTimeEmployee: false,
    lastName: 'Sunday',
    location: 'Osun',
    contract: true,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
console.log(printTeacher("Williams", "Agbunu"));
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass({ firstName: "Blessing", lastName: "Okey" });
console.log(student.displayName());
console.log(student.workOnHomework());
//# sourceMappingURL=main.js.map