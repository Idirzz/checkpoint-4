import HomePage from "../pages/HomePage/HomePage";
import MonsterPage from "../pages/MonsterPage/MonsterPage";
import { monsterLoader } from "../services/Loaders/MonsterLoader";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/monstre/:name",
    element: <MonsterPage />,
    loader: monsterLoader,
  },
];

export default routes;
