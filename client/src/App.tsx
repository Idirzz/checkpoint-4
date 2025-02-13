import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";
import "./globals.css";
import { Outlet } from "react-router-dom";
import ToastContainerWithOptions from "./ToastConfig";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainerWithOptions />
      <Footer />
    </>
  );
}

export default App;
