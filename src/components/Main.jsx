import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [pokeDex, setPokeDex] = useState();
    const [searchTerm, setSearchTerm] = useState("");

    const handleClick = () => (null);

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        getPokemon(res.data.results)
        setLoading(false)
        // console.log(pokeData)
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            const arr = res

            // check if result.data is not in pokedata
            if (!pokeData.includes(result.data)) {
                setPokeData(state => {
                    state = [...state, result.data]
                    state.sort((a, b) => a.id > b.id ? 1 : -1)
                    return state;
                })
            }
        })
    }
    useEffect(() => {
        pokeFun();
    }, [url]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <div className="search">
                <form>
                    <input type="search" placeholder="Enter pokemon name" onChange={handleChange} value={searchTerm} />
                    <button onClick={handleClick}>Go</button>
                </form>
            </div>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />

                </div>
                <div className="right-content">
                    <Pokeinfo data={pokeDex} />
                </div>
            </div>
        </>
    )
}
export default Main;