import {
    Person,
    Employee,
    Supervisor
} from '../src/person.js';
import {
    assert
} from 'chai'

describe('Inheritance', function () {
    describe('valid input', function () {
        const person = new Supervisor('Miss', 'Madufor', 'Jessica', '13/12/1996', 'adajess01@gmail.com', '001');
        const emp = new Employee('Mrs', 'Madufor', 'Adachi', '13/12/1996', 'adajess01@gmail.com', '001');

        it('Should return name', function () {
            assert.equal(person.getFullName(), 'Miss Madufor Jessica');

        });
        it('Should return a string', function () {
            assert.equal(person.getDetails(), 'Miss Madufor Jessica is a supervisor');

        });
        it('Should return a string', function () {
            assert.equal(emp.getDetails(), 'Mrs Madufor Adachi is an employee');

        });
        it('Should return name', function () {
            assert.deepEqual(person.addNewMember(emp)[0], emp);
        });
        it('Should return an empty array', function () {
            assert.equal(person.removeMember(emp), []);
        });
    });
});