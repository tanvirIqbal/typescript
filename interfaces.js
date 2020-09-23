// For Objects
var user = {
    firstName: '',
    lastName: '',
    age: 10,
    walk: function () {
    }
};
// For classes
var Employee = /** @class */ (function () {
    function Employee() {
        this.firstName = '';
        this.lastName = '';
        this.age = 10;
    }
    Employee.prototype.walk = function () {
    };
    return Employee;
}());
