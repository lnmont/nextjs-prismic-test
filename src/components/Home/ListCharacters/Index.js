import Image from "next/image";
import { StyleSectionCharacters, StyleListCharacters } from "./styles";
import { Container } from "../../../styles/global";
import { CardCharacter } from "../../CardCharacter/Index";
import ImageCharacter from "../../../assets/character.jpg";

import LogoMarvel from "../../../assets/logo.svg";

export function ListCharacters({ data }) {
  return (
    <StyleSectionCharacters>
      <Container>
        <div className="title">
          <span>What If</span>
          <h2>Personagens Marvel</h2>
        </div>
        <StyleListCharacters>
          {data.map((character) => {
            return (
              <CardCharacter
                key={character.id}
                slug={character.data.slug}
                name={character.data.name_character}
                image={character.data.image_character.url}
              />
            );
          })}

          <div className="marvel">
            <Image src={LogoMarvel} alt="marvel studios" />
          </div>
        </StyleListCharacters>
      </Container>
    </StyleSectionCharacters>
  );
}
