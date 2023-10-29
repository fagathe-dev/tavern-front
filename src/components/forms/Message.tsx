import React from "react";
import { State } from "../../type/forms.type";
import { StylingProps } from "../../type/ui.type";
import Small from "../ui/typo/Small";

interface MessageProps extends StylingProps {
  type?: State;
  message?: React.ReactElement | string;
}

const Message = ({
  message,
  style,
  cx = [],
  type = "default",
  id,
}: MessageProps) => {
  return (
    <Small style={style} id={id} cx={cx} color={type}>
      {message}
    </Small>
  );
};

export default Message;
