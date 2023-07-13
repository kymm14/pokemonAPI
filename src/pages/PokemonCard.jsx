import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { global } from "../_config/global";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import userService from "../_services/userService";

export default function PokemonCard({ pokemon }) {
  // hooks
  const navigate = useNavigate();

  // handle
  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  //   useEffect(() => {
  //     getImage();
  //   }, []);

  const getImage = async () => {
    try {
      const images = await userService.getImage();
      getImage(images.results);
      console.log(images);
    } catch (error) {
      console.log(error);
    }
  };

  const image = pokemon.sprites
    ? `${global.BASE_API_URL_IMAGES}/${data.sprites.other.dream_world.front_default}`
    : "/images/pokebola.webp";

  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia component='img' image={image} alt='green iguana' />
        <CardContent sx={{ position: "relative", pt: 3 }}>
          <Typography
            gutterBottom
            variant='h5'
            fontSize={18}
            fontWeight={600}
            component='div'>
            {pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
