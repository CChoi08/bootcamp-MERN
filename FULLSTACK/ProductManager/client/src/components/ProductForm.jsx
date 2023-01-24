import React, {useState} from "react"
import axios from "axios"

export default () => {

    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    
    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/product/create", {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return (
        <>
            <h1>Product Manager</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type = "text" onChange = {e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type = "text" onChange = {e => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type = "text" onChange = {e => setDescription(e.target.value)} />
                </div>
                <div>
                    <button>Create</button>
                </div>
            </form>
        </>
    )
}
