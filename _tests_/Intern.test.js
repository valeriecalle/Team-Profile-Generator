const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "CB";
    const employeeInstance = new Intern("Alain", 3, "arivera@colegiobolivar.org", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "CB";
    const employeeInstance = new Intern("Alain", 3, "arivera@colegiobolivar.org", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Alain", 3, "arivera@colegiobolivar.org", "CB");
    expect(employeeInstance.getRole()).toBe(returnValue);
});