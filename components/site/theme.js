import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    brand: {
      100: "#8A4BF8",
      200: "#EEECF3",
      300: "#640FF5",
      400: "#DBD4E1",
      500: "#362853",
      600: "#FF64A4",
      700: "#FF82B6",
      800: "#A3FFCA",
    },
    front: {
      100: "#362853",
      200: "#8A8190",
      300: "#60576A",
      400: "#2ABE69",
      900: "#FF0000",
    },
  },
  fonts: {},
  fontSizes: {},
  lineHeights: {},
  layerStyles: {},
  components: {},
});

export default theme;
