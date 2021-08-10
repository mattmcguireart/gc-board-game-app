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
  msrp_text: string;
  description_preview: string;
  thumb_url: string;
  image_url: string;
  categories: Category[];
  mechanics: Mechanic[];
  uid?: string;
  my_games_list?: boolean;
  wish_list?: boolean;
  min_age: number;
  year_published: number;
  primary_publisher: any;
}
