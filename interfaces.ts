
// interfaces is a way of defining contracts for classes or objects
// Used for implementing structural subtyping of objects
// Interfaces can extend other interfaces.
interface IHuman {
    readonly age: number;
    walk(): void;
}

interface IPerson extends IHuman {
    firstName: string;
    lastName: string;
}

// For Objects

const user: IPerson = {
    firstName: '',
    lastName: '',
    age: 10,
    walk():void {

    }
}

// For classes

class Employee implements IPerson {
    firstName ='';
    lastName = '';
    age = 10;
    walk():void {

    }
}