// types
var pName = "alireza";
var phone = 9398482612;
var isActive = true;
var i = 44;
var mix = ["hello", true, 22];
var ids = [23, 43, 54];
// tuple
var info = [1, "doctor", true];
var relation = [1, "many to many"];
// tuple array
var cars;
cars = [
    [1, "bmw"],
    [2, "benz"],
];
// onion
var id = "twoenty-nine";
var user = {
    id: 1,
    pName: "alireza",
};
// functions
function sum(x, y) {
    return x + y;
}
// void
function logger(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: "alireza",
};
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " registered!");
    };
    return Person;
}());
var p1 = new Person(2, "danial");
console.log(p1.register);
