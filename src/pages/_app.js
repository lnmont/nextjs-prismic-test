import { Footer } from "../components/Footer/Index";
import { Header } from "../components/Header/Index";
import { globalStyles } from "../styles/global";

globalStyles();

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
