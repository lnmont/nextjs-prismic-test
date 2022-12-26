import { AreaSocial, ContextText, SectionHeroStyle } from "./styles";
import { Container } from "../../../styles/global";

import IconYoutube from "../../../assets/youtube.svg";
import IconInstagram from "../../../assets/instagram.svg";
import Image from "next/image";
import { PopUpVideo } from "../../PopUpVideo/Index";

const socials = [
  {
    name: "Youtube",
    url: "#",
    icon: IconYoutube,
  },
  {
    name: "Instagram",
    url: "#",
    icon: IconInstagram,
  },
];

export function SectionHero({ data }) {
  return (
    <SectionHeroStyle>
      <Container>
        <AreaSocial>
          <ul>
            {socials.map(({ name, url, icon }, index) => {
              return (
                <li key={index}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <Image src={icon} alt={name} />
                  </a>
                </li>
              );
            })}
          </ul>
        </AreaSocial>
        <ContextText>
          <div className="left">
            <h3>{data.subtitle_hero}</h3>
            <h1>{data.title}</h1>
            <p>{data.description_hero[0].text}</p>
            <a href={data.url_button.url} target="_blank" rel="noreferrer">
              {data.label_button_hero}
            </a>
          </div>
          <PopUpVideo
            label={data.label_trailer}
            thumb={data.thumbnail_trailer.url}
          />
        </ContextText>
      </Container>
    </SectionHeroStyle>
  );
}
