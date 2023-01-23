const express = require("express"); // Needs to be at the top of the file
const app = express();
const port = 8000;
const { faker } = require("@faker-js/faker");

// Function to create new fake user
const createUser = () => {
    const newFake = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number("(###) ### - ####"),
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        id : faker.datatype.uuid()
    };
    return newFake;
};

// Function to create new fake company
const createCompany = () => {
    const newFake = {
        id : faker.datatype.uuid(),
        name : faker.company.name(),
        address : {
            street : faker.address.street(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    };
    return newFake;
};


// Routes
app.get("api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("api/companies/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/users/companies/new", (req, res) => {
    res.json([createUser(), createCompany()]);
});



// Notes creating a new server:
// 1. Run "npm init -y" to create package.json file
// 2. Install express with "npm install express" & faker with "npm install --save-dev @faker-js/faker"
// 3. (For this project only) install faker
// 4. Test backend with postman
// 5. Before post request include lines : app.use(express.json());
//                                        app.use(express.urlencoded({extended : true}))
//    After line 3 - Test in postman: x-www-form-urlencoded || raw -> JSON ("keys" : need quotes)


app.get("/api", (req, res) => {
    res.send("Express api is sending to browser");
});

app.listen(port, () => console.log(`Currently running on port: ${port}`)); // Needs to be at the bottom of the file