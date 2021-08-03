import Category from "./Category";
import Mechanic from "./Mechanic";

export default interface Game {
  _id?: string;
  id: string;
  name: string;
  url: string;
  gt_min_players: number;
  lt_max_players: number;
  gt_min_playtime: number;
  lt_max_playtime: number;
  gt_min_age: number;
  msrp_text: string;
  description_preview: string;
  thumb_url: string;
  image_url: string;
  categories: Category[];
  mechanics: Mechanic[];
}
