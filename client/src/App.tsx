import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";
import "./globals.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
