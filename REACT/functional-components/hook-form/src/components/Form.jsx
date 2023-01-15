import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPW};
        console.log (newUser);
    }


    return (
        <div>
            <form onSubmit = {createUser}>
                <div>
                    <label htmlFor = "firstName">First Name:</label>
                    <input type = "text" onChange = {(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor = "lastName">Last Name:</label>
                    <input type = "text" onChange = {(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor = "email">E-mail:</label>
                    <input type = "text" onChange = {(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor = "password">Password:</label>
                    <input type = "password" onChange = {(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor = "confirmPW">Confirm Password:</label>
                    <input type = "password" onChange = {(e) => setConfirmPW(e.target.value)} />
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