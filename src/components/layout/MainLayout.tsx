import { useOutlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";

const StyledMain = styled.main`
  min-height: calc(100vh - 60px);
  height: fit-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const MainLayout = () => {
  const outlet = useOutlet();
  return (
    <>
      <Navbar>header</Navbar>
      <StyledMain>{outlet}</StyledMain>
      <Footer>footer</Footer>
    </>
  );
};
export default MainLayout;
