const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 3;
    const employeeInstance = new Manager("Alain", 3, "arivera@colegiobolivar.org", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 3;
    const employeeInstance = new Manager("Alain", 3, "arivera@colegiobolivar.org", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Alain", 3, "arivera@colegiobolivar.org", 3);
    expect(employeeInstance.getRole()).toBe(returnValue);
});