import { useLocation } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";
import Introduction from "../pages/client/Dashboard/Introduction";


const DefaultLayout = ({ children }) => {
  const location = useLocation();
  const isSignPage =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/dashboard";
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="h-[100vh] bg-[#E5E7EB] scroll-smooth relative flex flex-col gap-12">
      <Header />
      <div>
        {!isSignPage && <Slider />}
        {isDashboard && <Introduction />}
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
