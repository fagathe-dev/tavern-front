import styled from "styled-components";
import { StylingProps } from "../../type/ui.type";
import { PropsWithChildren } from "react";
import Hr from "../ui/Hr";
import Container from "../grid/Container";
import { Link } from "react-router-dom";
import Small from "../ui/typo/Small";

interface FooterProps extends StylingProps {}

const StyledFooterContainer = styled.footer`
  width: 100%;
  min-height: 75px;
  height: fit-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.09);
`;

const StyledFooterContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.4rem 1rem;
`;

const StyledFooterBottom = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Footer = ({ style, children }: PropsWithChildren<FooterProps>) => (
  <StyledFooterContainer style={style}>
    <Container>
      <StyledFooterContent>{children}</StyledFooterContent>
      <Hr style={{ marginBlockStart: 10, marginBlockEnd: 5 }} />
      <StyledFooterBottom>
        <Small align={`center`}>
          Site developpé par&nbsp;
          <Link target={`_blank`} to={`https://github.com/fagathe-dev`}>
            <em>fagathe-dev</em>
          </Link>
        </Small>
      </StyledFooterBottom>
    </Container>
  </StyledFooterContainer>
);

export default Footer;
