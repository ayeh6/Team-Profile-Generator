const Employee = require("../lib/Employee");

describe("Employee Class", () => {
    describe("getName", () => {
        it("gets name", () => {
            const employee = new Employee('Andrew Yeh', 123, 'ayeh2317@gmail.com');
            let name = employee.getName();
            expect(name).toBe('Andrew Yeh');
        });
    });

    describe("getId", () => {
        it("gets name", () => {
            const employee = new Employee('Andrew Yeh', 123, 'ayeh2317@gmail.com');
            let id = employee.getId();
            expect(id).toBe(123);
        });
    });

    describe("getEmail", () => {
        it("gets name", () => {
            const employee = new Employee('Andrew Yeh', 123, 'ayeh2317@gmail.com');
            let email = employee.getEmail();
            expect(email).toBe('ayeh2317@gmail.com');
        });
    });

    describe("getRole", () => {
        it("gets role", () => {
            const employee = new Employee('Andrew Yeh', 123, 'ayeh2317@gmail.com');
            let role = employee.getRole();
            expect(role).toBe('Employee');
        });
    });
});