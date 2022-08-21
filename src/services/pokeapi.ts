const API_URL = "https://pokeapi.co/api/v2/";

type limOff = {
    limit: number,
    offset: number
}

export async function getPokemons({limit, offset}: limOff) {
    try {
        const response = await fetch(`${API_URL}pokemon/?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getPokemon(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}