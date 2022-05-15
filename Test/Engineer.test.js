const Engineer = require("../lib/Engineer")
const engineerOne = new Engineer("Seamona", "2121", "Jassy@aol.com")

describe("EngineerInfo", () => {
    it ("returns employee name", () => {
        const engineerName = engineerOne.getName()
        expect (engineerName).toBe("Seamona")
    }) 
    it ("returns github", () => {
        const engineerGithub = engineerOne.getRole()
        expect (engineerGithub).toBe("Employee")
    })
})

