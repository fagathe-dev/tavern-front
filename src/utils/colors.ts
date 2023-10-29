import { theme } from "../theme";
import { Color } from "../theme/theme";

const handleColor = (color: Color) => {
  switch (color) {
    case "primary":
      return theme.color.primary.default;
    case "secondary":
      return theme.color.secondary.default;
    case "warning":
      return theme.color.warning.default;
    case "error":
      return theme.color.error.default;
    case "success":
      return theme.color.success.default;
    case "white":
      return theme.color.white;
    default:
      return theme.color.dark;
  }
};

export { handleColor };
