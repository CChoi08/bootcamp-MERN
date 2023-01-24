import React, {useState, useEffect} from "react"
import ProductForm from "../components/ProductForm"
import AllProducts from "../components/AllProducts"
import axios from "axios"

export default () => {
    const [allProducts, setAllProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/allProducts")
            .then(res => {
                setAllProducts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [allProducts])


    return (
        <>
            <ProductForm />
            {
                loaded &&
                    <AllProducts allProducts = {allProducts} />
            }
        </>
    )
}