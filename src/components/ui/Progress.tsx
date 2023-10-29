import styled from "styled-components";
import { StylingProps } from "../../type/ui.type";
import { Size } from "../../theme/theme";
import { theme } from "../../theme";

type ProgressSize = Extract<Size, "s" | "m" | "l">;

interface ProgressProps extends StylingProps {
  progress: number;
  size?: ProgressSize;
}

const handleSize = (size: ProgressSize): string => {
  if (size === "s") {
    return "6px";
  }

  if (size === "l") {
    return "10px";
  }

  return "8px";
};

const StyledProgressContainer = styled.div<Pick<ProgressProps, "size" | "id">>`
  border-radius: 0.5rem;
  width: 100%;
  height: ${({ size }) => size && handleSize(size)};
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledProgressBar = styled.div<Pick<ProgressProps, "progress">>`
  display: block;
  background: linear-gradient(
    45deg,
    ${theme.color.primary.light},
    ${theme.color.primary.default} 100%
  );
  height: 100%;
  width: ${({ progress }) => progress}%;
`;

const Progress = ({
  style,
  cx = [],
  id,
  progress,
  size = "m",
}: ProgressProps) => (
  <StyledProgressContainer
    style={style}
    className={cx.join(" ")}
    size={size}
    id={id}
  >
    <StyledProgressBar progress={progress} />
  </StyledProgressContainer>
);

export default Progress;
