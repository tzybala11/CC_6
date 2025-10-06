// Coding Challenge 6

// Step 2
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in ${this.department}`;
    }
}

// Step 3
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} manages a team of ${this.teamSize} in ${this.department}`;
    }
}

// Step 4
const emp1 = new Employee("Lucia", "Finance");
const emp2 = new Employee("Frank", "Sales");
const emp3 = new Employee("Lucas", "Customer Service");

const man1 = new Manager("Jaime", "Information Technology", 10);
const man2 = new Manager("Bob", "Sales", 20);

console.log(emp1.describe());
console.log(emp2.describe());
console.log(emp3.describe());
console.log(man1.describe());
console.log(man2.describe());

// Step 5
class Company {
    constructor(employees) {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
}