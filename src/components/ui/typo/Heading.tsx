import { PropsWithChildren } from "react";
import styled from "styled-components";
import { StylingProps } from "../../../type/ui.type";

interface HeadingProps extends StylingProps {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  underline?: boolean;
}

const styles = {
  marginBlockStart: 0,
  fontWeight: 500,
  textUnderlineOffset: 5,
};

const StyledH1 = styled.h1<HeadingProps>`
  margin-block-end: 25px;
  line-height: 1.5;
  text-decoration: ${({ underline }) => underline && "underline"};
  font-size: 2.5rem;
`;

const StyledH2 = styled.h2<HeadingProps>`
  margin-block-end: 20px;
  line-height: 1.4;
  text-decoration: ${({ underline }) => underline && "underline"};
  font-size: 2rem;
`;

const StyledH3 = styled.h3<HeadingProps>`
  margin-block-end: 15px;
  line-height: 1.2;
  text-decoration: ${({ underline }) => underline && "underline"};
  font-size: 1.5rem;
`;

const StyledH4 = styled.h4<HeadingProps>`
  margin-block-end: 10px;
  line-height: 1.2;
  text-decoration: ${({ underline }) => underline && "underline"};
  font-size: 1.25rem;
`;

const StyledH5 = styled.h5<HeadingProps>`
  margin-block-end: 10px;
  line-height: 1;
  text-decoration: ${({ underline }) => underline && "underline"};
  font-size: 1.12rem;
`;

const StyledH6 = styled.h6<HeadingProps>`
  margin-block-end: 5px;
  line-height: 1;
  text-decoration: ${({ underline }) => underline && "underline"};
  font-size: 1rem;
`;

const Heading = ({
  size = "h3",
  style,
  underline = false,
  children,
}: PropsWithChildren<HeadingProps>) => {
  if (size === "h1") {
    return (
      <StyledH1 underline={underline} style={{ ...styles, ...style }}>
        {children}
      </StyledH1>
    );
  }
  if (size === "h2") {
    return (
      <StyledH2 underline={underline} style={{ ...styles, ...style }}>
        {children}
      </StyledH2>
    );
  }
  if (size === "h4") {
    return (
      <StyledH4 underline={underline} style={{ ...styles, ...style }}>
        {children}
      </StyledH4>
    );
  }
  if (size === "h5") {
    return (
      <StyledH5 underline={underline} style={{ ...styles, ...style }}>
        {children}
      </StyledH5>
    );
  }
  if (size === "h6") {
    return (
      <StyledH6 underline={underline} style={{ ...styles, ...style }}>
        {children}
      </StyledH6>
    );
  }

  return (
    <StyledH3 underline={underline} style={{ ...styles, ...style }}>
      {children}
    </StyledH3>
  );
};

export default Heading;
