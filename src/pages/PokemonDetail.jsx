import React from "react";
import { useNavigate } from "react-router-dom";

export default function PokemonDetail({ pokemon }) {
  // hooks
  const navigate = useNavigate();

  // handle
  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return <div>PokemonDetail</div>;
}
