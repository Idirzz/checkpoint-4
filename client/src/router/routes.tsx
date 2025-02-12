import CharacterPage from "../pages/CharacterPage/CharacterPage";
import HomePage from "../pages/HomePage/HomePage";
import { monsterLoader } from "../services/Loaders/MonsterLoader";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/monstre/:name",
    element: <CharacterPage />,
    loader: monsterLoader,
  },
];

export default routes;
