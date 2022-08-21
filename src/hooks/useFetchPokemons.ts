import React, { useState, useEffect } from "react";
import * as API from "../services/pokeapi";

type Props = {};
// props: Props
const useFetchPokemons = () => {
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [limit, setLimit] = useState<number>(20);
    const [offset, setOffset] = useState<number>(0);
    const [isFetching, setIsFetching] = useState<boolean>(true);

    // const getPokemon()

    const getAllPokemons = async () => {
        console.log("getAllPokemons");
        await API.getPokemons({limit, offset})
            .then(async (data: any) => {
                console.log(data);
                for (const pokemon of data.results) {
                    await API.getPokemon(pokemon.url).then((res: any) => {
                        // console.log("pokemon");
                        setPokemons(state => [...state, res]);
                        // setPokemons(data.results)
                    });
                }
                // setIsFetching(false);
            })
            .finally(() => {
                console.log("finally");
                setIsFetching(false)
            });
    };
    useEffect(() => {
        // console.log('i fire once');
        // let mounted = true;
        // if (mounted) {
        //     getAllPokemons();
        // }
        // return () => {
        //     console.log('se desmonta');
        //     mounted = false;
        // };
    }, []);

    useEffect(() => {
        console.log('offset');
        getAllPokemons();
    }, [offset]);
    return { pokemons, isFetching, offset, setOffset };
};

export default useFetchPokemons;
