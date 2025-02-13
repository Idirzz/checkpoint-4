export interface Monster {
  id: number;
  picture_name: string;
  name: string;
  family: string;
  health: number;
  action_points: number;
  movement_points: number;
  resists: {
    neu: number;
    fo: number;
    ine: number;
    cha: number;
    age: number;
  };
}
