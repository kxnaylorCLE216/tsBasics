class Add{
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    Display(){
        console.log(this.x);
        console.log(this.y);
        console.log("Sum " + (this.x + this.y));
    }
}

let add = new Add(2, 3);
add.Display();

let student = {
    Name: "Kyle",
    Age: 32,
    Phone: 3302558556
}

let studentsList = [
    {Name: "Peter", Age: 44, Phone: 3302667998},
    {Name: "Tom", Age: 34, Phone: 3302657988}
]

studentsList.push(student)

for (let index = 0; index < studentsList.length; index++) {
    var element = studentsList[index];
    console.log(element.Name);
}



