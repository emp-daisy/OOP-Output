'use strict'
/**
 * ENCAPSULATION: Using a class to hide the data
 */
class Person {
    constructor(sal, surname, firstName, dob) {
        this.sal = sal;
        this.firstName = firstName;
        this.surname = surname;
        this.dob = dob;
    }

    getFullName() {
        return `${this.sal} ${this.surname} ${this.firstName}`;
    }


    getDetails() {
        return `${this.getFullName()} is an person`;
    }
}

class Employee extends Person {
    //INHERITANCE: Inheriting from the super clss Person
    constructor(title, firstName, surname, dob, email, id) {
        super(title, firstName, surname, dob);
        this.email = email;
        this.employeeId = id;
        this.salary = 0;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    //POLYMORPHISM: Overriding an existing method in the parent class
    getDetails() {
        return `${this.getFullName()} is an employee`;
    }
}

class Supervisor extends Person {

    constructor(title, firstName, surname, dob, email, id) {
        super(title, firstName, surname, dob);
        this.team = [];
    }
    addNewMember(employee) {
        this.team.push(employee);
        return this.team;
    }
    removeMember(employee) {
        let tempArr = this.team.filter(e => e.employeeId !== employee.employeeId);
        this.team = tempArr;
        return this.team;
    }
    //POLYMORPHISM: Overriding an existing method in the parent class
    getDetails() {
        return `${this.getFullName()} is a supervisor`;
    }
}

export {
    Person,
    Employee,
    Supervisor
}; //exporting the classes