import React, {useEffect} from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

const Pokemon = (props) => {

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => {props.setAllPokemon(response.data.results)})
        }, []
    )

    const displayPokemon = (e) => {
        e.preventDefault();
        if (props.displayPokemon == false) {
            props.setDisplayPokemon(true);
        } else {
            props.setDisplayPokemon(false);
        }
    }


    return (
        <>
            <div className = "text-center">
                <div>
                    <button onClick = {displayPokemon} className = "btn btn-lg btn-danger my-3">
                        Fetch Pokemon
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                    {
                        props.displayPokemon ?
                            <div>
                                {
                                    props.allPokemon.map((item, i) =>
                                        <ul key = {i} className = "list-group">
                                            <li className = "list-group-item my-1">{item.name}</li>
                                        </ul>
                                    )
                                }
                            </div>
                            : ""
                    }
                </div>
            </div>
        </>
    )
}

export default Pokemon;