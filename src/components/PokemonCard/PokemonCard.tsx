import React from "react";
import './PokemonCard.scss'

type Props = {
    name: string;
    image: string;
};

const PokemonCard = (props: Props) => {
    return (
        <div>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
            <div>
                <div>{props.name}</div>
            </div>
        </div>
    );
};

export default PokemonCard;
