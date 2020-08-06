// void

function logToConsole(): void {
    console.log('Hello World');
    return; // optional
}

// Array

let fruits: string[];
fruits = ['mango', (() => 'banana')(), null, undefined];

let foods: Array<string>;
foods = ['pizza', 'burger'];

let genericArray: Array<string | number | boolean>;
genericArray = ['mango', 123, false];

// tuple

let coordinates: [number, number, number];
coordinates = [12, 11, 10];

let genTuple: [number, string, boolean];
genTuple = [12, '11', false];

// Objects

let user = {
    firstName: 'tanvir',
    lastName: 'iqbal',
    userName: 'tanviriqbal',
    getUserName: (): string => this.userName
}

// Enum

enum DaysOfTheWeek {
    MONDAY,
    TUESDAY,
    WEDNESDAY
}

let dayToday: DaysOfTheWeek;
dayToday = DaysOfTheWeek.MONDAY;

// any

let authorizedUser: any = {
    firstName: 'tanvir',
    lastName: 'iqbal',
    userName: 'tanviriqbal',
    getUserName: (): string => this.userName
}