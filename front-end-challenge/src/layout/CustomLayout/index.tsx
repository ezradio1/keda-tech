import Navbar from "components/Navbar";
import Contact from "pages/Dashboard/components/Contact";
import Home from "pages/Dashboard/components/Home";
import Pricing from "pages/Dashboard/components/Pricing";

const CustomLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Pricing />
      <Contact />
    </div>
  );
};

export default CustomLayout;
