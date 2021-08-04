import axios from "axios";
import BGAResponse from "../models/BGAResponse";
import Game from "../models/Game";

const baseUrl = process.env.REACT_APP_API_URL;

export const getGameSearch = async (search: any): Promise<BGAResponse> => {
  let params: any = { ...search, client_id: "1FoN8rvM9B" };

  const response = await axios.get(
    "https://api.boardgameatlas.com/api/search?",
    { params }
  );
  return response.data;
};

export const getGameList = async (uid: string): Promise<Game[]> => {
  const response = await axios.get(baseUrl! + `/${encodeURIComponent(uid)}`);
  return response.data;
};

export const postGameToList = async (game: Game): Promise<Game> => {
  const response = await axios.post(baseUrl!, game);
  return response.data;
};
