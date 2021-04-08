var Add = /** @class */ (function () {
    function Add(x, y) {
        this.x = x;
        this.y = y;
    }
    Add.prototype.Display = function () {
        console.log(this.x);
        console.log(this.y);
        console.log("Sum " + (this.x + this.y));
    };
    return Add;
}());
var add = new Add(2, 3);
add.Display();
var student = {
    Name: "Kyle",
    Age: 32,
    Phone: 3302558556
};
var studentsList = [
    { Name: "Peter", Age: 44, Phone: 3302667998 },
    { Name: "Ted", Age: 34, Phone: 3302657988 }
];
studentsList.push(student);
for (var index = 0; index < studentsList.length; index++) {
    var element = studentsList[index];
    console.log(element.Name);
}
//# sourceMappingURL=Sample.js.map