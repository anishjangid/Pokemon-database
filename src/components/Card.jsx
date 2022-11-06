import React from "react";

const card = ({ pokemon, loading, infoPokemon }) => {
    console.log(pokemon);
    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon && pokemon.map((item) => {

                        return (
                            <>


                                <div className="Card" key={item.id} onClick={()=>infoPokemon(item)}>
                                    <h3>{item.id}</h3>
                                    <img src={item.sprites.front_default} alt="" />
                                    <h2>{item.name}</h2>
                                </div>
                            </>
                        )
                    })
            }
        </>
    )
}

export default card;