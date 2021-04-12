class Employee {
    private static headCount = 0;

    constructor(name: string, age: number){
        Employee.headCount++;
    }

    public static getHeadCount() {
        return Employee.headCount;
    }
}

const e1 = new Employee('Tae', 26);
const e2 = new Employee('Jimin', 26);
console.log(Employee.getHeadCount());
// console.log(Employee.headCount);
