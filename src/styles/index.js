import { createStitches } from "@stitches/react";

export const { styled, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        red900: "#ff0000",
        red800: "#ff040d",
        white: "#fff",
        grey900: "#333d3e",
        grey800: "#4e4b59",
        grey700: "#5f5c6b",
        grey600: "#7a7786",
        grey500: "#8c8a97",
        grey400: "#acabb7",
        grey200: "#c6c5ce",
        grey100: "#e1e0e7",
      },
    },
  });
