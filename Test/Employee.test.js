const Employee = require("../lib/Employee")
const employeeOne = new Employee("Seamona", "2121", "Jassy@aol.com")

describe("EmployeeInfo", () => {
    it ("returns employee name", () => {
        const employeeName = employeeOne.getName()
        expect (employeeName).toBe("Seamona")
    })
    it ("returns employee ID", () => {
        const employeeID = employeeOne.getId()
        expect (employeeID).toBe("2121")
    })
    it ("returns employee Email", () => {
        const employeeEmail= employeeOne.getEmail()
        expect (employeeEmail).toBe(employeeOne.email)
    })
    it ("returns employee Role", () => {
        const employeeRole = employeeOne.getRole()
        expect (employeeRole).toBe("Employee")
    })
})

