import React, { useState, useEffect, useRef, ReactElement } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import * as API from '../../services/pokeapi';
import './Pokedex.scss';

type Props = {
    children: ReactElement[] | ReactElement
};

const Pokedex = (props: Props) => {
    // const [pokemons, setPokemons] = useState<any[]>([]);
    let searchInput: any = useRef(null)

    const searchPkemon = (event: any) => {
        console.log('searchPkemon')
        console.log(searchInput?.current?.value);
        event.preventDefault();
    }
    const searchChange = (event: any) => {
        console.log(event.target.value)
        // event.preventDefault();
        // setPokemons((prevState) => ({...prevState, [name]: value}));
    }
    return (
        <div>
            <div>
                <form autoComplete="off" onSubmit={searchPkemon}>
                    <input type="text" name="" id="" ref={searchInput} onChange={searchChange}/>
                    <button type="submit">Buscar</button>
                </form>
            </div>
            {/* <div>
            {
                pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} name={pokemon.name}/>
                ))
            }
            </div> */}
            <div className="pokemons-container">
                {props.children}
            </div>
        </div>
    );
};

export default Pokedex;
