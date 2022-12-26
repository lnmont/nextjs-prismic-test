import { styled } from "../../../styles";
import { Container } from "../../../styles/global";

export const SectionCharacterStyle = styled("section", {
  marginTop: "9.6rem",
  height: 641,
  borderBottom: "1px solid rgba(255, 255, 255,0.2)",

  [`${Container}`]: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    borderLeft: "1px solid rgba(255, 255, 255,0.2)",
    borderRight: "1px solid rgba(255, 255, 255,0.2)",
  },
  ".image": {
    borderRadius: "5px",
    height: "100%",
    overflow: "hidden",
    img: {
      height: "100%",
    },
  },
  ".info": {
    flex: 1,
    maxWidth: 650,
    marginLeft: 32,
    display: "flex",
    span: {
      display: "block",
      marginTop: 20,
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "27px",
      color: "$grey400",
      opacity: 0.6,
    },
    "& > div": {
      position: "relative",
      flex: 1,
      maxWidth: 543,
      paddingLeft: 27,
      marginLeft: 19,
      "&:before": {
        content: "",
        position: "absolute",
        top: 12,
        left: 0,
        width: 4,
        height: 46,
        background: "$red800",
      },
      h1: {
        fontWeight: 600,
        fontSize: 61,
        lineHeight: "71px",
        color: "$white",
        marginBottom: 13,
      },
      p: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "$grey400",
      },
    },
  },
});
