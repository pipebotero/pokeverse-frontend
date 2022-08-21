import React, { useState, useEffect } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import Pokedex from "../../components/Pokedex/Pokedex";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import useFetchPokemons from "../../hooks/useFetchPokemons";

type Props = {};

const PokedexPage = (props: Props) => {
    const { pokemons, isFetching, offset, setOffset } = useFetchPokemons();

    // useEffect(() => {
    //     console.log('i fire once', pokemons);
    // }, [pokemons]);

    const showPokemon = () => {
        console.log("showPokemon", pokemons);
    };

    const morePokemons = () => {
        console.log("showPokemon", pokemons);
        setOffset(offset + 20);
    };


    if(isFetching) {
        return (
            <div>
                <p>cargando...</p>
            </div>
        );
    }

    return (
        <div>
            <ErrorBoundary>
                <button onClick={morePokemons}>Prueba</button>
                <Pokedex>
                    {/* <PokemonCard name="si" /> */}
                    {pokemons.map((pokemon, index) => (
                        <PokemonCard key={index} name={pokemon.name} image={pokemon.sprites?.other['official-artwork'].front_default}/>
                    ))}
                </Pokedex>
            </ErrorBoundary>
        </div>
    );
};

export default PokedexPage;
