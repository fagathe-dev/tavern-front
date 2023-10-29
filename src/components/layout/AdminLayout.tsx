import { useOutlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdminLayout = () => {
  const outlet = useOutlet();
  return (
    <>
      <Navbar>header</Navbar>
      <main>{outlet}</main>
      <Footer>footer</Footer>
    </>
  );
};
export default AdminLayout;
