import React from "react"
import {Link} from "react-router-dom"
import Delete from "./Delete"


const allAuthors = (props) => {
    const removeFromDom = id => {
        props.setAllAuthors(props.allAuthors.filter(author => author._id != id))
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                {
                    props.allAuthors.map((author, i) =>
                        <tbody key = {i}>
                            <tr>
                                <td>{author.name}</td>
                                <td>
                                    <Link to = {`/author/edit/${author._id}`}><button>edit</button></Link>
                                    <Delete id ={author._id} removeFromDom = {removeFromDom} />
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </>
    )
}

export default allAuthors