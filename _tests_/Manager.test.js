const Manager = require("../lib/Manager");

describe("Manager Class", () => {
    describe("getName", () => {
        it("gets name", () => {
            const manager = new Manager('Andrew Yeh', 123, 'ayeh2317@gmail.com', 22);
            let name = manager.getName();
            expect(name).toBe('Andrew Yeh');
        });
    });

    describe("getId", () => {
        it("gets name", () => {
            const manager = new Manager('Andrew Yeh', 123, 'ayeh2317@gmail.com', 22);
            let id = manager.getId();
            expect(id).toBe(123);
        });
    });

    describe("getEmail", () => {
        it("gets name", () => {
            const manager = new Manager('Andrew Yeh', 123, 'ayeh2317@gmail.com', 22);
            let email = manager.getEmail();
            expect(email).toBe('ayeh2317@gmail.com');
        });
    });

    describe("getOfficeNumber", () => {
        it("gets office number", () => {
            const manager = new Manager('Andrew Yeh', 123, 'ayeh2317@gmail.com', 22);
            let officeNumber = manager.getOfficeNumber();
            expect(officeNumber).toBe(22);
        });
    });

    describe("getRole", () => {
        it("gets role", () => {
            const manager = new Manager('Andrew Yeh', 123, 'ayeh2317@gmail.com', 22);
            let role = manager.getRole();
            expect(role).toBe('Manager');
        });
    });
});