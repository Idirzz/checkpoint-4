import CharacterPage from "../pages/CharacterPage/CharacterPage";
import HomePage from "../pages/HomePage/HomePage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/monstre/:name",
    element: <CharacterPage />,
  },
];

export default routes;
