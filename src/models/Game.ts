import Category from "./Category";
import Mechanic from "./Mechanic";

export default interface Game {
  _id?: string;
  id: string;
  name: string;
  url: string;
  min_players: number;
  max_players: number;
  min_playtime: number;
  max_playtime: number;
  min_age: number;
  description: string;
  thumb_url: string;
  image_url: string;
  categories: Category[];
  mechanics: Mechanic[];
}
