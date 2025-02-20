import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";

const Home = () => {
  const navigation = useNavigation();
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <Header />
      {navigation.state === "loading" ? <Spinner /> : <Outlet />}

      <Footer />
    </>
  );
};

export default Home;
