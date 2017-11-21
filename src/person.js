'use strict'

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
}

class Employee extends Person {
    constructor(title, firstName, surname, dob, email, id) {
        super(title, firstName, surname, dob);
        this.email = email;
        this.employeeId = id;
        this.salary = 0;
    }
    setSalary(salary) {
        this.salary = salary;
    }
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
        this.team.filter(e => e.employeeId !== employee.employeeId);

        return this.team;
    }
    getDetails() {
        return `${this.getFullName()} is a supervisor`;
    }
}

export {
    Person,
    Employee,
    Supervisor
}; //exporting the classes