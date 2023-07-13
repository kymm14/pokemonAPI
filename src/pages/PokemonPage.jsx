import React, { useEffect, useState } from "react";
import userService from "../_services/userService";
import { Box, Container, Pagination, Typography } from "@mui/material";
import PokemonDetail from "./PokemonDetail";
import PokemonCard from "./PokemonCard";

export default function PokemonPage() {
  const initialPokemons = [];

  // hooks
  const [pokemons, setPokemons] = useState(initialPokemons);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  // handles
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getPokemons();
  }, [page]);

  const getPokemons = async () => {
    try {
      const data = await userService.getPokemons(page);
      setPokemons(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container sx={{ pt: 5, pb: 5 }}>
        <Typography variant='h1' fontSize={30} align='center' gutterBottom>
          Pokemons
        </Typography>
        <Box sx={{ mt: 3, mb: 3, display: "flex", justifyContent: "center" }}>
          <Pagination page={page} count={500} onChange={handleChange} />
        </Box>
        <Box className='pokemon-list-wrapper'>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Box>
      </Container>
    </>
  );
}
