// void
var _this = this;
function logToConsole() {
    console.log('Hello World');
    return; // optional
}
// Array
var fruits;
fruits = ['mango', (function () { return 'banana'; })(), null, undefined];
var foods;
foods = ['pizza', 'burger'];
var genericArray;
genericArray = ['mango', 123, false];
// tuple
var coordinates;
coordinates = [12, 11, 10];
var genTuple;
genTuple = [12, '11', false];
// Objects
var user = {
    firstName: 'tanvir',
    lastName: 'iqbal',
    userName: 'tanviriqbal',
    getUserName: function () { return _this.userName; }
};
// Enum
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["MONDAY"] = 0] = "MONDAY";
    DaysOfTheWeek[DaysOfTheWeek["TUESDAY"] = 1] = "TUESDAY";
    DaysOfTheWeek[DaysOfTheWeek["WEDNESDAY"] = 2] = "WEDNESDAY";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var dayToday;
dayToday = DaysOfTheWeek.MONDAY;
// any
var authorizedUser = {
    firstName: 'tanvir',
    lastName: 'iqbal',
    userName: 'tanviriqbal',
    getUserName: function () { return _this.userName; }
};
