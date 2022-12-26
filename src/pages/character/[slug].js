import Head from "next/head";
import { useRouter } from "next/router";
import { SectionHeroCharacter } from "../../components/Details/SectionHeroCharacter/Index";
import { ListCharacters } from "../../components/Home/ListCharacters/Index";
import { PageTitle } from "../../components/PageTitle";
import { getPrismicClient } from "../../services/prismic";

export default function PageCharacter({ character, characters }) {
  return (
    <>
      <PageTitle title="Marvel - Character" description="Sobre Character" />

      {character && <SectionHeroCharacter data={character} />}
      {characters && <ListCharacters data={characters} />}
    </>
  );
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient();

  const chracteres = await prismic.getAllByType("character");

  const paths = chracteres.map(({ data }) => {
    return {
      params: { slug: data.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const prismic = getPrismicClient();

  const characters = await prismic.getAllByType("character");

  const character = characters.find(({ data }) => {
    return data.slug === context.params.slug;
  });

  characters.splice(
    characters.findIndex((e) => {
      return e.data.slug === character.data.slug;
    }),
    1
  );

  return {
    props: {
      character: character.data,
      characters,
    },
  };
};
