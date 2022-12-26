import { styled } from "../../styles";
import { Container } from "../../styles/global";

export const StylePageNotFound = styled("section", {
  marginTop: 96,
  paddingTop: 95,
  paddingBottom: 150,
  [`${Container}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  h1: {
    fontWeight: 600,
    fontSize: "49px",
    lineHeight: "59px",
    marginBottom: 24,
  },
  p: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    color: "$white",
    maxWidth: 641,
    marginBottom: 40,
  },
  a: {
    display: "inline-block",
    lineHeight: "54px",
    background: "$red900",
    borderRadius: 5,
    padding: "0 75px",
    fontWeight: 600,
    fontSize: "16px",
    color: "$white",
    marginBottom: 72,
    transition: "filter 0.3s",
    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
});
