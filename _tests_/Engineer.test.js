const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
    describe("getName", () => {
        it("gets name", () => {
            const engineer = new Engineer('Andrew Yeh', 123, 'ayeh2317@gmail.com', 'ayeh6');
            let name = engineer.getName();
            expect(name).toBe('Andrew Yeh');
        });
    });

    describe("getId", () => {
        it("gets name", () => {
            const engineer = new Engineer('Andrew Yeh', 123, 'ayeh2317@gmail.com', 'ayeh6');
            let id = engineer.getId();
            expect(id).toBe(123);
        });
    });

    describe("getEmail", () => {
        it("gets name", () => {
            const engineer = new Engineer('Andrew Yeh', 123, 'ayeh2317@gmail.com', 'ayeh6');
            let email = engineer.getEmail();
            expect(email).toBe('ayeh2317@gmail.com');
        });
    });

    describe("getGithub", () => {
        it("gets github username", () => {
            const engineer = new Engineer('Andrew Yeh', 123, 'ayeh2317@gmail.com', 'ayeh6');
            let github = engineer.getGithub();
            expect(github).toBe('ayeh6');
        });
    });

    describe("getRole", () => {
        it("gets role", () => {
            const engineer = new Engineer('Andrew Yeh', 123, 'ayeh2317@gmail.com', 'ayeh6');
            let role = engineer.getRole();
            expect(role).toBe('Engineer');
        });
    });
});