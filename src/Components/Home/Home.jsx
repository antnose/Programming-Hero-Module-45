import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <h1>Welcome to home page</h1>
      <Outlet />
    </>
  );
};

export default Home;
