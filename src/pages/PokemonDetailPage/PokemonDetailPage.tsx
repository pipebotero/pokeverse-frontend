import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";

type Props = {}

const PokemonDetailPage = (props: Props) => {
  let params = useParams();
  return (
    <div>Pokemon {params.pokemonId}</div>
  )
}

export default PokemonDetailPage