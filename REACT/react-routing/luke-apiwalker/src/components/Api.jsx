import React, {useEffect} from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Api = (props) => {
    const [data, setData] = useState([]);
    const {category, id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                let arr = Object.entries(response.data);
                setData(arr);
            })
    }, [category, id])

    return (
        <>
            {
                data.map((item, i) =>
                    <div key={i}>
                        <p>{item[0]} : {item[1]}</p>
                    </div>
                )
            }
        </>
    )
}

export default Api;