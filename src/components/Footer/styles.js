import { styled } from "../../styles/";
import { Container } from "../../styles/global";

export const FooterStyle = styled("footer", {
  borderTop: "1px solid rgba(255, 255, 255,0.2)",
  padding: "40px 0",
  [`${Container}`]: {
    display: "flex",
    alignItens: "flex-start",
    justifyContent: "space-between",
    strong: {
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "21px",
      color: "$white",
    },
    "& > div": {
      display: "flex",
      alignItens: "flex-start",
      p: {
        flex: 1,
        maxWidth: 593,
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "21px",
        color: "$grey500",
        marginLeft: "18.6rem",
      },
    },
  },
});
