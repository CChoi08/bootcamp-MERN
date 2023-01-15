import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPWMatch, setConfirmPWMatch] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
    const [confirmPWError, setConfirmPWError] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPW};
        console.log (newUser);
    }


    // VALIDATIONS

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name required");
        } else if (e.target.value.length < 3) {
            setFirstNameError("First Name must be at least 3 characters long")
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name required");
        } else if (e.target.value.length < 3) {
            setLastNameError("Last Name must be at least 3 characters long")
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("E-mail required");
        } else if (e.target.value.length < 6) {
            setEmailError("E-mail must be at least 5 characters long")
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password required");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters long")
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPW = (e) => {
        setConfirmPW(e.target.value);
        if(e.target.value !== password) {
            setConfirmPWMatch("Passwords do not match");
        } else {
            setConfirmPWMatch("");
        }

        if(e.target.value.length < 8) {
            setConfirmPWError("Confirm password must be at least 8 characters long")
        } else {
            setConfirmPWError("");
        }
    }


    // RENDERS THE FORM

    return (
        <div>
            <form onSubmit = {createUser}>
                <div>
                    <div>
                        {
                            firstNameError ?
                                <p style = {{color : "red"}}>{firstNameError}</p> : ""
                        }
                    </div>
                    <div>
                        <label htmlFor = "firstName">First Name:</label>
                        <input type = "text" onChange = {handleFirstName} />
                    </div>
                </div>
                <div>
                    <div>
                        {
                            lastNameError ?
                                <p style = {{color : "red"}}>{lastNameError}</p> : ""
                        }
                    </div>
                    <div>
                        <label htmlFor = "lastName">Last Name:</label>
                        <input type = "text" onChange = {handleLastName} />
                    </div>
                </div>
                <div>
                    <div>
                        {
                            emailError ?
                                <p style = {{color : "red"}}>{emailError}</p> : ""
                        }
                    </div>
                    <div>
                        <label htmlFor = "email">E-mail:</label>
                        <input type = "text" onChange = {handleEmail} />
                    </div>
                </div>
                <div>
                    <div>
                        {
                            passwordError ?
                                <p style = {{color : "red"}}>{passwordError}</p> : ""
                        }
                    </div>
                    <div>
                        <label htmlFor = "password">Password:</label>
                        <input type = "password" onChange = {handlePassword} />
                    </div>
                </div>
                <div>
                    <div>
                        {
                            confirmPWError ?
                                <p style = {{color : "red"}}>{confirmPWError}</p> : ""
                        }
                        {
                            confirmPWMatch ? 
                                <p style = {{color : "red"}}>{confirmPWMatch}</p> : ""
                        }
                    </div>
                    <div>
                        <label htmlFor = "confirmPW">Confirm Password:</label>
                        <input type = "password" onChange = {handleConfirmPW} />
                    </div>
                </div>
            </form>


            <div>
                <h3>Your Form Data</h3>
                <div>
                    <p>First Name: </p>
                    <p>{firstName}</p>
                </div>
                <div>
                    <p>Last Name: </p>
                    <p>{lastName}</p>
                </div>
                <div>
                    <p>E-mail: </p>
                    <p>{email}</p>
                </div>
                <div>
                    <p>Password: </p>
                    <p>{password}</p>
                </div>
                <div>
                    <p>Confirm Password: </p>
                    <p>{confirmPW}</p>
                </div>
            </div>
        </div>
    )
}


export default Form;