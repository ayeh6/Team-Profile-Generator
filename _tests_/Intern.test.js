const Intern = require("../lib/Intern");

describe("Intern Class", () => {
    describe("getName", () => {
        it("gets name", () => {
            const intern = new Intern('Andrew Yeh', 123, 'ayeh2317@gmail.com', 'University of California, Merced');
            let name = intern.getName();
            expect(name).toBe('Andrew Yeh');
        });
    });

    describe("getId", () => {
        it("gets name", () => {
            const intern = new Intern('Andrew Yeh', 123, 'ayeh2317@gmail.com', 'University of California, Merced');
            let id = intern.getId();
            expect(id).toBe(123);
        });
    });

    describe("getEmail", () => {
        it("gets name", () => {
            const intern = new Intern('Andrew Yeh', 123, 'ayeh2317@gmail.com', 'University of California, Merced');
            let email = intern.getEmail();
            expect(email).toBe('ayeh2317@gmail.com');
        });
    });

    describe("getSchool", () => {
        it("gets school", () => {
            const intern = new Intern('Andrew Yeh', 123, 'ayeh2317@gmail.com', 'University of California, Merced');
            let school = intern.getSchool();
            expect(school).toBe('University of California, Merced');
        });
    });

    describe("getRole", () => {
        it("gets role", () => {
            const intern = new Intern('Andrew Yeh', 123, 'ayeh2317@gmail.com', 'University of California, Merced');
            let role = intern.getRole();
            expect(role).toBe('Intern');
        });
    });
});