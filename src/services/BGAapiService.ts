import axios from "axios";
import BGAResponse from "../models/BGAResponse";

export const getGameSearch = async (search: any): Promise<BGAResponse> => {
  let params: any = { client_id: "1FoN8rvM9B" };
  if (search.name) {
    params.name = search.name;
  }
  if (search.limit) {
    params.limit = search.limit;
  }
  if (search.mechanics) {
    params.mechanics = search.mechanics;
  }
  if (search.categories) {
    params.categories = search.categories;
  }
  if (search.order_by) {
    params.order_by = search.order_by;
  }
  if (search.gt_min_players) {
    params.gt_min_players = search.gt_min_players;
  }
  if (search.lt_max_players) {
    params.lt_max_players = search.lt_max_players;
  }
  if (search.gt_min_playtime) {
    params.gt_min_playtime = search.gt_min_playtime;
  }
  if (search.lt_max_playtime) {
    params.lt_max_playtime = search.lt_max_playtime;
  }
  const response = await axios.get(
    "https://api.boardgameatlas.com/api/search?",
    { params }
  );
  return response.data;
};
