import CreationPage from "../pages/CreationPage/CreationPage";
import EditPage from "../pages/EditPage/EditPage";
import HomePage from "../pages/HomePage/HomePage";
import MonsterPage from "../pages/MonsterPage/MonsterPage";
import { monsterLoader } from "../services/Loaders/MonsterLoader";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/monstre/creation",
    element: <CreationPage />,
  },
  {
    path: "/monstre/:name",
    element: <MonsterPage />,
    loader: monsterLoader,
  },
  {
    path: "/monstre/edit/:name",
    element: <EditPage />,
    loader: monsterLoader,
  },
];

export default routes;
