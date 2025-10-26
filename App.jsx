import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default App;
