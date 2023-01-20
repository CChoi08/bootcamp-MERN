import React from "react";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const SearchForm = (props) => {
    const navigate = useNavigate();

    const handleUnit = (e) => {
        props.setUnit(e.target.value);
    }

    const handleId = (e) => {
        props.setOneId(e.target.value);
    }

    const sendCall = (e) => {
        e.preventDefault();
        navigate(`/${props.unit}/${props.oneId}`);
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <form onSubmit={sendCall} className="form-control w-50 my-3 shadow border-0">
                    <div>
                        <label htmlFor="" className="form-label">Search For:</label>
                        <select onClick={handleUnit} className="form-select">
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="" className="form-label">ID:</label>
                        <input type="number" onChange={handleId} placeholder={1} className="form-control" />
                    </div>
                    <div className="my-3">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchForm;