const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "arivera0126";
    const employeeInstance = new Engineer("Alain", 3, "arivera@colegiobolivar.org", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "arivera0126";
    const employeeInstance = new Engineer("Alain", 3, "arivera@colegiobolivar.org", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Alain", 3, "arivera@colegiobolivar.org", "arivera0126");
    expect(employeeInstance.getRole()).toBe(returnValue);
});