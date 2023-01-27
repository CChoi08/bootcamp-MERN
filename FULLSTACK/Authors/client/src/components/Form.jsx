import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Form = (props) => {
    const navigate = useNavigate()

    const [errors, setErrors] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/createAuthor",  {
            name : props.name
        })
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errArr = []
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr)
            })
    }

    const handleEdit = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/editAuthor/${props.id}`, {
            name : props.name
        })
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errArr = []
                for(const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr)
            })
    }

    return (
            <form onSubmit = {props.isCreate ? handleSubmit : handleEdit}>
                {
                    errors.map((err, i) => <p key = {i}>{err}</p>)
                }
                <div>
                    <label>Name:</label>
                    <input type = "text" onChange = {e => props.setName(e.target.value)} value = {props.name} />
                </div>
                <div>
                    <button>Submit</button>
                    <Link to = "/"><button>Cancel</button></Link>
                </div>
            </form>
    )
}

export default Form