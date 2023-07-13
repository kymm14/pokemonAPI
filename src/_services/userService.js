import axios from "axios";

import { global } from "../_config/global";

const userService = {};

userService.getPokemons = async (page = 1) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/ability/`,
    params: { page },
    headers: {
      accept: "application/json",
    },
  };
  await sleep(2000); // TODO
  const response = await axios.request(options);

  return response.data;
};

userService.getPokemonDetail = async (id) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/pokemon/${id}/`,
    params: { page },
    headers: {
      accept: "application/json",
    },
  };
  await sleep(2000); // TODO
  const response = await axios.request(options);

  return response.data;
};

userService.getFood = async (id) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL_FOOD}/lookup.php?i=${id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
    },
  };

  const response = await axios.request(options);

  return response.data;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default userService;
