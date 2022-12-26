import { FooterStyle } from "./styles";
import { Container } from "../../styles/global";

import LogoCodeBoost from "../../assets/logo-codeboost.svg";
import Image from "next/image";

export function Footer() {
  return (
    <FooterStyle>
      <Container>
        <div>
          <strong>2022 CodeBoost</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <Image src={LogoCodeBoost} alt="logo codeboost" />
      </Container>
    </FooterStyle>
  );
}
