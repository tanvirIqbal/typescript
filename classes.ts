class Person {
    // firstName: string;
    // lastName: string;
    // age: number;
    // constructor(firstName: string, lastName: string, age: number) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    // }

    // shorter way to declare property.
    constructor(private firstName: string, private lastName: string, private age: number) {}

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person : Person = new Person('Tanvir', 'Iqbal',31);
console.log(person.getFullName());

// Inheritence
class Employee extends Person {

    get employeeId(): number {
        return this.id;
    }
    set employeeId(employeeId: number) {
        this.id = employeeId;
    }

    constructor(private id : number,
        firstName: string,
        private middleName: string,
        lastname: string,
        age: number) {
        super(firstName,lastname,age);
    }

    getFullName(){
        const nameSegments: Array<string> = super.getFullName().split(" ");
        nameSegments.splice(1,0,this.middleName);
        const fullName = nameSegments.join(" ");
        return `${fullName}`;
    }
}

const manager: Employee = new Employee(1,'Jane','Patrick','Doe',30);
console.log(manager.getFullName()); 
console.log(manager.employeeId);
manager.employeeId = 20;
console.log(manager.employeeId);